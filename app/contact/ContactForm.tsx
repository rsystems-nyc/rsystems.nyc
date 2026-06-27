"use client";

import { useState } from "react";

// Prospective-client "write in" form. Posts to /api/contact, which forwards to
// HubSpot once configured (see docs/contact-form.md). Until then the route
// returns "not_configured" and we show a graceful fallback.
type Status = "idle" | "submitting" | "success" | "error" | "not_configured";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      website: String(fd.get("website") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      fax: String(fd.get("fax") || ""), // honeypot — real users leave this empty
    };
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else if (data?.error === "not_configured") {
        setStatus("not_configured");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#FE6305]/40 bg-white px-6 py-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2">
          Thanks
        </p>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">We&apos;ve got your note.</h3>
        <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
          We&apos;ll be in touch shortly. If it&apos;s urgent, call{" "}
          <a href="tel:9177654968" className="font-semibold text-[#FE6305] hover:text-[#FE6305]/75 transition-colors">
            917.765.4968
          </a>
          .
        </p>
      </div>
    );
  }

  const labelCls = "block text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-1.5";
  const fieldCls =
    "w-full rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#FE6305] focus:outline-none focus:ring-1 focus:ring-[#FE6305]/40 transition-colors";
  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="flex flex-1 flex-col space-y-5" noValidate>
      {/* Honeypot: hidden from people, tempting to bots. Submissions with this
          filled are silently dropped server-side. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Fax
          <input type="text" name="fax" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>
            Your name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldCls} />
        </div>
      </div>

      <div>
        <label htmlFor="website" className={labelCls}>
          Website <span className="font-normal normal-case tracking-normal text-[#1A1A1A]/30">(optional)</span>
        </label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="url"
          placeholder="yourcompany.com"
          className={fieldCls}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <label htmlFor="message" className={labelCls}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="A few lines about your organization and what you're trying to accomplish."
          className={`${fieldCls} flex-1 min-h-[7rem] lg:min-h-0 resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={busy}
        className="inline-flex self-start items-center gap-2 rounded bg-[#FE6305] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#FE6305]/85 transition-colors disabled:opacity-50"
      >
        {busy ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600/90 leading-relaxed">
          Something went wrong sending your message. Please email{" "}
          <a href="mailto:prospectiveclient@rsystems.nyc" className="font-semibold underline">
            prospectiveclient@rsystems.nyc
          </a>{" "}
          or book a call instead.
        </p>
      )}
      {status === "not_configured" && (
        <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
          This form isn&apos;t live just yet. For now, email{" "}
          <a
            href="mailto:prospectiveclient@rsystems.nyc"
            className="font-semibold text-[#FE6305] underline hover:text-[#FE6305]/75 transition-colors"
          >
            prospectiveclient@rsystems.nyc
          </a>{" "}
          or book a call.
        </p>
      )}
    </form>
  );
}
