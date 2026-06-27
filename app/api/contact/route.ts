import { NextResponse } from "next/server";

// Prospective-client "write in" form handler.
//
// SETUP (one-time, see docs/contact-form.md):
//   1. Create a form in HubSpot with fields whose internal names match FIELD_MAP
//      below (email, firstname, website, message — rename here if your form differs).
//   2. Set that form's notification recipient to prospectiveclient@rsystems.nyc.
//   3. Set env vars HUBSPOT_PORTAL_ID and HUBSPOT_CONTACT_FORM_GUID (Vercel +
//      .env.local). Both are public, non-secret values — no API key needed for
//      the Forms submission endpoint.
// Until those env vars are set, this route returns { error: "not_configured" }
// and the form shows a graceful fallback.

// Maps our form fields -> HubSpot form field internal names. Adjust the right
// side to match the HubSpot form you create.
const FIELD_MAP = {
  email: "email",
  name: "firstname",
  website: "website",
  message: "message",
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const website = String(body.website ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.fax ?? "").trim();

  // Bot caught by the honeypot: pretend success, forward nothing.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "missing_fields", message: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "invalid_email", message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_CONTACT_FORM_GUID;
  if (!portalId || !formGuid) {
    // Not yet wired to HubSpot — the form is built but inert. See docs/contact-form.md.
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const fields = [
    { name: FIELD_MAP.email, value: email },
    { name: FIELD_MAP.name, value: name },
    { name: FIELD_MAP.website, value: website },
    { name: FIELD_MAP.message, value: message },
  ].filter((f) => f.value); // omit empty optional fields

  const payload = {
    fields,
    context: { pageUri: "https://rsystems.nyc/contact", pageName: "Contact — RSystems" },
  };

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Contact form: HubSpot submission failed", res.status, detail);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: HubSpot submission error", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
