# Contact "write in" form — HubSpot wiring

The contact page (`/contact`) has a write-in form beside the Google Calendar
scheduler. The form posts to `app/api/contact/route.ts`, which forwards to the
HubSpot Forms API. Until it's wired, the form is built but inert — it shows a
graceful "email prospectiveclient@rsystems.nyc" fallback.

## One-time setup

1. **Create a HubSpot form** with these field internal names (left side of
   `FIELD_MAP` in `route.ts` maps to these — rename there if your form differs):
   - `email` (Email)
   - `firstname` (Your name)
   - `website` (Website, optional)
   - `message` (How can we help?)
2. Set the form's **notification recipient** to `prospectiveclient@rsystems.nyc`.
3. Grab the **Portal ID** and the **form GUID** (HubSpot → Marketing → Forms →
   the form → Share/embed shows both).
4. Set env vars (both public, non-secret — the Forms submission endpoint needs
   no API key):
   - `HUBSPOT_PORTAL_ID`
   - `HUBSPOT_CONTACT_FORM_GUID`
   Set them on **Vercel** (production) and in **.env.local** for local/dev.

That's it. With both env vars present the route submits to HubSpot; without them
it returns `not_configured` and the form shows the email fallback.

## Notes

- A hidden honeypot field (`fax`) silently drops bot submissions server-side.
- The scheduler beside the form is RSystems' Google Calendar appointment embed
  (not HubSpot meetings) — independent of this form.
