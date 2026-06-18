export const foundationsContent = `## 1. Start by deciding how far ahead you're planning

Before any specific decision, it helps to set the right time horizon. Plan no more than five years out, and no less than three.

If you're only thinking about today, you're being short-sighted — this stuff moves quickly, and a couple of years from now you don't want to be paying the price for a decision that ignored where you were obviously headed. But there's no point trying to plan ten years out either. Things change so much over a decade that reading those tea leaves is a waste of effort. The useful question for almost every choice below is simply: *will this still make sense for us in the next three to five years?* If something might be a thing in that window but isn't yet, you should still be thinking about it now — because three to five years comes faster than you expect, and many of these decisions have consequences that run well beyond it.

The reason this matters so much is that infrastructure decisions compound. If you do the minimal amount of work correctly at the beginning, the advantage propagates. If you skip it, the complexity of fixing it later grows every year — more people, more devices, more data, more dependencies all built on top of the shortcut.

Think of it as a foundation. How strong is yours? Don't skimp on it. Anyone familiar with [161 Maiden Lane](https://en.wikipedia.org/wiki/161_Maiden_Lane) in Lower Manhattan knows how this goes: the developer chose a cheaper soil-improvement method for the foundation instead of the deep pilings every neighboring skyscraper used, ostensibly to save around six million dollars. It didn't work. The ground settled unevenly, the 60-story tower began to lean, and the building has sat incomplete for years — tied up in a tangle of lawsuits, having reportedly run up around a quarter of a billion dollars in cost, with one contractor's lawyer comparing its shape to a banana. All because the foundation wasn't built right. Don't be that developer.

Some of what follows you can change later, with effort. Some of it you really can't back out of cleanly. That second category is worth getting right even if you're only two people today.

## 2. Set your naming conventions before you have anyone to name

This is the classic thing that comes back to bite you, and it's trivial to avoid if you do it on day one.

The mistake almost everyone makes is \`firstname@company.com\`. Every company starts in a garage with five people who are certain it'll never be a problem — and then they hire a second John, and the convention breaks immediately. Now one person has an initial, the next one has something else, and there's no logic to any of it. Don't do that. If you want to do it well, use a convention that can be applied programmatically and never has to bend. The best one we've found is simple: \`first.last@domain\`. Just move to it as early as possible. If you want \`firstname@\` to still work, keep it as an alias, but make your primary [SMTP](/resources/glossary/smtp) address — the address of record at Microsoft or Google — \`first.last@domain\`.

The same discipline applies well beyond email. Groups, [distribution groups](/resources/glossary/distribution-group), permission groups, folders — all of it benefits from a consistent, intuitive naming scheme. When a new person joins, the names should make sense to them without a decoder ring. Avoid alphanumeric strings nobody can parse.

And wherever possible, stay away from capital letters and special characters. They can look nice, but they cause real problems later. We've had clients with a pipe or a backslash in their naming conventions; when they moved from one platform to another, the new platform wouldn't accept those characters, and what should have been a clean migration turned into a pile of extra work. Underscores are usually safe. Periods are safe. Slashes, asterisks, and pipes are not. Ampersands will bite you the moment you move between Microsoft and Google.

You can usually tell within a few seconds of walking into someone's office or home how organized they are. Your systems are the same. Decide now which kind you want to be.

## 3. Get a password manager before you have secrets worth protecting

A spreadsheet and a sticky note are not a credential strategy, and neither is using the same password everywhere. A password manager is one of the cheapest, highest-leverage things you can put in place — a couple of dollars a month at the most basic tier.

From the very beginning, use it to organize the things that are genuinely painful to lose: your [super-admin](/resources/glossary/super-admin)-level ownership, your [certificates](/resources/glossary/certificate), your private keys, your [TOTP](/resources/glossary/totp) codes, your [MFA](/resources/glossary/mfa) recovery. The payoff comes at every moment of change — turnover, an IT team transition, anything. Instead of rifling around asking *who set up our AWS root credentials years ago, and where are they?*, you go to one place. That single source of truth is the whole point.

How you organize it matters as much as having it. We prefer [1Password](/resources/university/1password), where the folders are called [vaults](/resources/glossary/vault). Organize them by who needs access, not by individual person. The question for every vault is: who should be able to see this? You don't need eighteen groups that all contain the same four people — that's not efficient. But it does sometimes make sense to create separate vaults for things you expect to diverge. A three-person company where everyone can see both finance and operations today might still set up separate finance and operations vaults, because in a couple of years there'll be a finance manager who should see one and not the other. Create structure where you expect change, not structure for its own sake. The goal is always the fewest, simplest, most elegant arrangement that will still scale.

### Who owns everything

There's a related decision that's easy to get wrong: who is the *owner of record* of your accounts. Our recommendation for most organizations — and almost everyone reading this is well under ten thousand people — is a dedicated [service account](/resources/glossary/service-account), something like \`itadmin@yourdomain.com\`, as the owner of record of everything. It owns Microsoft. It owns Google. It should own your accounting, and effectively everything else. There are a few places where a principal at the company can reasonably be listed as an owner, but as a rule, ownership should not be tied to a real person's primary email.

The reason is security. Your CEO and CFO are the first people to get [spearphished](/resources/glossary/phishing) and targeted. If the credential with ultimate authority over your environment is *their* day-to-day account, a successful phish is catastrophic. If the ultimate authority is the \`itadmin\` service account — whose credential lives in your password manager and is only retrieved when genuinely needed — you've dramatically reduced your attack surface. The people most likely to get attacked are no longer holding the keys to everything. And because those high-authority credentials are typed in rarely rather than constantly, there's a natural pause built in: if your CFO is rushing to board a flight and has to log back into something with their personal account and makes a mistake, only their individual account is exposed, not the whole company.

*If and when you want help structuring this properly, that's exactly what our [Password Management](/services/technology-consulting/password-management) work is for. For the mechanics of strong authentication, see [MFA Types, FIDO2, and Phishing-Resistant Authentication](/resources/university/mfa-and-phishing-resistance).*

## 4. Treat your domain registration like the deed to the company

Your domain registration is the deed to the business. It's the thing you'd normally keep in a safety deposit box. Defend it accordingly — because if you lose control of it, you are in serious trouble, and we've seen it happen.

A few practical implications. There will inevitably be a need for password recovery that has to land somewhere *outside* your primary domain — because if your domain is the thing you're locked out of, a recovery address on that same domain is useless. You need a recovery path that doesn't depend on the very thing it's meant to recover. If you're a more mature organization you might use a secondary domain, or your \`yourcompany.onmicrosoft.com\` address. But it's not unreasonable for it to be a trustworthy personal account — the personal email of a principal, used as the secondary recovery email on the domain registration. Whatever it is, it should live outside your normal ecosystem and should almost never be touched except for true break-glass situations: getting back into your domain, getting back into your password manager. Plan that backdoor deliberately, and then guard it extremely well.

This is also where your [DNS](/resources/glossary/dns) lives, and DNS is the foundation that several later sections build on — your email authentication in particular.

*If and when you want this set up correctly and maintained over time — registration, DNS, and deliverability — that's our [Managed DNS & Domain Administration](/services/management/domain) work.*

## 5. Establish a footprint in both Google and Microsoft — even if you only use one

Get a footprint in the big clouds. Google and Microsoft are the essential two; Amazon matters less for most organizations day to day, though we like to set up an [AWS](/resources/glossary/aws) footprint as well because there are things Amazon does better than either, and using best-of-breed for each has real value. But there is no company — short of being Google or being Microsoft — that shouldn't have both a Google and a Microsoft [tenant](/resources/glossary/tenant) set up.

The most common misunderstanding here is that having both means paying for both. It doesn't. You can have a Google Workspace tenant and a Microsoft 365 / [Azure](/resources/glossary/azure) tenant at no cost in both cases. What costs money is the licenses you attach — and both providers offer free licensing tiers. For nonprofits there's an enormous amount available for free; even for-profit companies can stand up these tenants at no cost.

There are two big reasons to do this early. The first is impersonation. The moment you create a tenant and verify your domain, *you* own \`yourcompany.onmicrosoft.com\` and nobody else can. Nobody else can verify your domain, because you already have. That alone is worth doing. The second is practical interoperability: someone shares a Google Drive document with you, and it's restricted to you specifically rather than the whole internet. Even if you're an Outlook shop, you want to be able to sign in and view that document. Having a Google tenant lets you. Google's [Cloud Identity](/resources/glossary/cloud-identity) Free tier lets you stand up a Workspace tenant at no cost — with some limits, and you can't get the whole thing free at hundreds of users, but the basics are there.

On timing: do this once you're confident about your domain name. It's foundational, and the rest of your identity story builds on it.

*The details on each free tier are written up in [Free Resources → Google Cloud Identity Free and Microsoft Entra ID Free](/resources/free-resources). For how the directory landscape fits together, see [Directory Services](/resources/university/directory-services). When you're ready to plan cloud architecture in earnest, that's our [Cloud Storage & Computing Solutions](/services/technology-consulting/cloud-storage-and-computing-solutions) work.*

## 6. Move toward an identity-first model, in the right order

Once your tenants exist, the next step is thinking about your company in terms of *identities* rather than a scattering of independent username-and-password pairs floating around. That shift in mindset is where you're ultimately going, and the earlier you make it, the better off you'll be.

There's a spectrum here. At the simplest end, the proliferation of "sign in with Google," "sign in with Microsoft," and "sign in with Apple" buttons is a kind of poor man's [single sign-on](/resources/glossary/sso). Once your tenants are configured, these let people authenticate based on an identity rather than yet another unique credential. At the more robust end is proper single sign-on — federating authentication using real protocols like [SAML](/resources/glossary/saml) or [OIDC](/resources/glossary/oidc). That's genuinely worth doing, but it's not necessarily a day-one task: there's cost and a level of technical proficiency required. Even at the basic level, Google and Microsoft both support [federation](/resources/glossary/federation) between them — if you're on Microsoft 365 and you spin up a Google tenant, you can federate the two without standing up a full SSO platform. There are step-by-step guides for it, and an AI assistant can help you find the right buttons.

One important sequencing note: don't turn on single sign-on while you're still workshopping your brand. SSO is tied to your domain name, and changing it after the fact is painful. Some early companies flip-flop on identity and naming; if that's you, wait. But once you've settled — *this is who we are, and we'll be this way for the next several years* — enabling SSO is the right move.

*For the platform landscape, see [Directory Services](/resources/university/directory-services). When you're ready to implement, our [JumpCloud Consulting](/services/technology-consulting/jumpcloud-consulting) and broader [Identity & Security](/services/technology-consulting/identity-security) work is built for exactly this.*

## 7. Get devices under management from the start

Years ago, [MDM](/resources/glossary/mdm) — mobile device management — seemed fancy and not for everyone. That's no longer true. Today, if you're not doing MDM, you're making a mistake. And changing MDM later is almost always annoying and painful, so the move is to get it right early.

There are things you can do to make it less painful, and most of them come down to setting up the right foundations before you have a fleet to wrangle.

### On the Apple side

If you're using Apple computers in a work context, set up [Apple Business](/resources/glossary/apple-business) (formerly Apple Business Manager) from the get-go. It's free, it takes minutes of actual hands-on time to set up (though the verification can take days to weeks in real-world time), and it requires a [DUNS](/resources/glossary/duns) number, which most organizations already have. With it, you should be running MDM through some provider — we think [JumpCloud](/resources/glossary/jumpcloud) is the best, but any of them beats nothing.

Verify your domain at Apple, too. If you don't, anyone can set up an Apple ID using an \`@yourcompany.com\` address — they just do an email verification and it's theirs. That's genuinely annoying when someone has an Apple ID on your domain and no longer works for you, and you have no control over it. Verifying your domain means people can't impersonate you, and the only way someone gets a [managed Apple ID](/resources/glossary/managed-apple-id) on your domain is if you, the organization, let them.

Here's the concrete version of why this matters. You buy an iPad for the office manager, and they install some app for the door cameras, or for Sonos, on a personal Apple ID. That person moves on. A new office manager takes over — and the app on that iPad is tied to an Apple ID nobody can control. Updates break. It asks for passwords you don't have. You can't reset them, because the account isn't in your Apple Business. You end up asking *how did we set it up this way?* The answer is that nobody thought about it. Setting up Apple Business and managed Apple IDs from the start prevents exactly this.

### Device trust and personal phones

As you mature, you'll want [device trust](/resources/glossary/device-trust): the ability to say *this HR data or this financial system can only be reached from a device we know about and trust.* That's straightforward for company laptops and genuinely tricky for personal phones. Most companies are fine with people checking email on their own iPhone or Android — but what happens when someone leaves under contentious terms and all that email is sitting on a device you don't control?

One of the best answers is a [BYOD](/resources/glossary/byod) MDM enrollment. You load a certificate — a cryptographic watermark — onto the personal device that says *we know who you are and you're allowed in*, and that you can revoke if the device is stolen or the person is terminated. Setting that up requires signing in with a managed Apple ID, which is yet another reason to manage your Apple IDs from the beginning. If you're not managing them, this becomes a nightmare, and it gets worse the longer you wait, because people will keep setting up Apple IDs with company email through the wrong channel, and untangling that later disrupts every one of them.

### A note on app licenses (VPP)

If someone buys a paid app on a personal Apple ID — say a premium camera app the company actually needs — you cannot transfer that license to corporate ownership later. When you move to managed Apple IDs, that license is simply lost. Bought correctly through Apple Business and [VPP](/resources/glossary/vpp), the company owns the license, assigns it to the office manager, and reassigns it to the next person when they leave. Bought on a personal ID, it's locked there forever. (As a bonus, when identities are managed properly, "sign in with Apple" just works as part of your single sign-on, with no special configuration.)

### Buy from business stores, not retail

This isn't wishy-washy advice — it's about MDM control. Never buy company computers from a consumer retailer. Buy from a business store.

On the Microsoft side, the relevant program is [Autopilot](/resources/glossary/autopilot). You *can* take a machine off a retail shelf and make it work with [Intune](/resources/glossary/intune), Microsoft's MDM — but the better experience is zero-touch: peel the plastic off a brand-new laptop, turn it on, and it automatically enrolls, pulls down everything it needs, and is ready for the user as if by magic. For that to happen, the manufacturer has to tell Microsoft *this machine belongs to this company.* Lenovo, HP, Dell, and authorized resellers like CDW can set this up — but you usually have to ask before you purchase. The instruction is simply: *I want any purchases I make registered for Autopilot.* Even if you're not using Intune today, getting those serial numbers tied to your company means if you ever want to, it's a lot easier — the groundwork is already done.

Apple actually works better here, because you can buy direct from Apple's business store — call any Apple retail store and ask to speak with the business team. They'll set up a business entity and give you a customer number, and any purchase tied to it can be added to Apple Business and managed by any Apple-supported MDM. You can buy from B&H, from CDW, direct from Apple, or even Apple refurbished, send it straight to the end user, and they peel the plastic and go. On the Microsoft side, the fully automated flow currently requires Microsoft's own MDM, though we're optimistic they'll eventually open Autopilot to other MDM providers the way they eventually opened SSO federation.

If you buy Linux machines, none of this applies. Chromebooks have something similar, but the mechanisms are less tied to the moment of purchase and can usually be configured after the fact — and Chromebooks are a separate can of worms.

The throughline: setting this up correctly from the beginning doesn't mean you have to use every feature. It just prevents people from doing the small, convenient, wrong thing that causes real pain — and real cost — later. The longer you wait, the more people and apps are affected, and the bigger the bill to fix it.

*For the detail on each piece, see [Windows Autopilot](/resources/university/autopilot), [Apple Business Manager](/resources/university/apple-business-manager), [Device Trust and Apple BYOD](/resources/university/device-trust-byod), and [Managed Chrome](/resources/university/managed-chrome). The free Apple tier is written up in [Free Resources → Apple Business](/resources/free-resources). When you want this run for you, that's our [Endpoint Management](/services/management/endpoint-management) work.*

## 8. Assign permissions to groups, never to people

This is one of the biggest pieces of advice on the list, and it's about how you think, not just what you click.

Don't assign individual permissions. Assign group permissions. The instinct is to think *Tony needs access to this thing to do his job.* The better frame is: *Tony's role is manager. Any manager needs this access to do the job. So I create a group called managers, assign the permission to that group, and put Tony in it.* When the next manager arrives, they go in the group and inherit everything. When Tony moves on, he comes out, and nothing breaks.

How you name those groups should follow the same conventions as everything else — consistent, intuitive, no mystery strings, no risky special characters. And the same restraint applies as with vaults: create the fewest, simplest groups that capture real, durable distinctions, in a way that scales. This is the foundation of a model built on [least privilege](/resources/glossary/least-privilege) — people get exactly the access their role requires, nothing more — which keeps your environment both more secure and far easier to reason about as you grow.

This connects directly to the identity-first thinking in the section above: groups and roles *are* the identity model in practice.

*The principle is worth understanding in depth — see [The Principle of Least Privilege](/resources/university/least-privilege) and [Directory Services](/resources/university/directory-services).*

## 9. Turn on email authentication on day one

Everyone should be doing [DMARC](/resources/glossary/dmarc). Full stop. And here's the thing that makes timing matter so much: if you start on day one, before you have any sprawl, you can put a 100% reject policy in place immediately and never have to run a monitoring project. Wait, and you buy yourself months of work.

Some background. In its most basic form, email can be manipulated, spoofed, and impersonated in all sorts of ways — anyone can send a message claiming to be from any address. The people who built the internet added tools to improve authenticity and cut down on the bad stuff, and all three live in DNS, which functions as a public ledger: a place only you control, where you publish your official instructions for the whole world to read.

[SPF](/resources/glossary/spf) is the first. It says *these are the mail servers I authorize to send on my behalf.* If you use Google Workspace, you authorize Google; you haven't authorized Microsoft. So when a message arrives pretending to be you but sent from Microsoft's servers — or from some bulk-spam server in Bulgaria — any recipient on the internet can see it doesn't match your published list, and the malicious message gets stopped in transit, before it ever reaches its target.

[DKIM](/resources/glossary/dkim) is the next level: a cryptographic watermark attached to every message you send. It's invisible in the text, stamped by your outgoing mail server, and it uses [asymmetric cryptography](/resources/glossary/asymmetric-cryptography) — the way most modern cryptography works. There's one key used to lock (sign) the message, which only you hold, and a different key used to unlock (verify) it, which you publish in DNS for everyone. A recipient tries to verify your message with the public key; if it lines up, it's authentic, and if it doesn't, they know it didn't really come from you. Every major email provider supports it.

DMARC ties the two together. It answers the question *if a message fails SPF and DKIM, what should I do with it?* By default the answer is nothing — recipients are left to their own devices. Everyone should instead have a DMARC policy: a single line in DNS that says *if it fails, don't accept it; it wasn't me; it's fraudulent.*

Set all of this up on your first day and everything you send finds its way to its recipients, every message you send looks unmistakably legitimate, and your mail stays out of spam filters because it reads as airtight. Wait ten years, and you'll have Constant Contact, SurveyMonkey, and a dozen other services all sending on your behalf without you ever having declared who's allowed — and now you can't just flip the switch. You have to monitor every outgoing message with a DMARC reporting service, figure out who's legitimately sending versus not, and refine your policy over months, at a cost of real money. The failure modes if you get it wrong are exactly the two you don't want: legitimate mail that never reaches the recipient, or someone successfully impersonating you. Deal with it early and it's nearly free; deal with it late and it's slow, costly, and risky — the house of cards from the very first section, made concrete.

*The full mechanics are in [DNS, SPF, DKIM, and DMARC](/resources/university/dns-email-authentication), and the logo-in-the-inbox follow-on is covered in [DNS and BIMI](/resources/university/dns-bimi). Standing up reliable DNS is part of our [Managed DNS & Domain Administration](/services/management/domain) work.*

## 10. Decide where data lives — and who owns it

You're going to generate data — documents, PDFs, the works — and it has to live somewhere. It should not just sit on your desktop, where forgetting your laptop in a cab means the data is simply gone. Your laptop should be ephemeral; you should never build your business around *well, I had a backup of my laptop.* Save your data somewhere that isn't only your machine — an on-premises file server or, in most cases, cloud storage.

But getting it off the desktop is only half of it. The part people most often get wrong is *whose* folder the file goes in. In Google terms, that's My Drive versus a Shared Drive; in Microsoft terms, [OneDrive](/resources/glossary/onedrive-sharepoint) versus SharePoint. The question to ask about every file is: is this owned by me, the individual, or by the corporation? Even personal drives sit under the corporate umbrella, but what matters is how permissions are structured — does *this person* own this, or does the department, the team, the company?

As much as possible, keep things in the Shared Drive / SharePoint context — what your platform calls a [team folder](/resources/glossary/team-folder) (in Dropbox it's literally a team folder versus a non-team folder). The reason is that turnover is inevitable, and you don't want to discover that the only person who can change permissions on a critical folder is someone who no longer works here. Don't put team data in a personal folder. Put it where the team, not an individual, owns it.

This is the same logic as the password manager from section three — a personal zone and a shared zone, with real thought about which things belong where — and it's the same least privilege thinking from section eight applied to files. These are nearly all no-cost decisions. The only real question is whether you have the patience to set it up correctly the first time, or whether you'll wait a few years and then pay a pile of money and a room full of consultants to untangle it. Far better to get it right at the start.

*The reasoning behind owning data at the right level is in [The Principle of Least Privilege](/resources/university/least-privilege). When you're designing where workloads and storage should live, that's our [Cloud Storage & Computing Solutions](/services/technology-consulting/cloud-storage-and-computing-solutions) work.*

## If you're a nonprofit, there's a lot of free software on the table

This deserves its own note, because the amount most nonprofits leave unclaimed is genuinely large — we've worked with hundred-plus-person organizations spending twenty, thirty, forty thousand dollars a year on software they could have had for free, simply because they signed up for an enterprise plan instead of the nonprofit one. Every major vendor has a program: free and steeply discounted licensing from Microsoft and Google, sales-tax-free and refurbished purchasing from Apple, credits from Amazon. And the single best first step is usually TechSoup, because once your nonprofit status is verified there, many other vendors will let you in on the strength of that alone.

*We've detailed each of these programs — TechSoup, Microsoft for Nonprofits, Google for Nonprofits, Apple, and the AWS/Azure credits — in [Free Resources → Technology Discounts for Nonprofits](/resources/free-resources). Start there.*

## Get a sanity check

The least technical piece of advice is also one of the most valuable: find advisors you trust — people you don't have to pay every day, but can turn to as you grow. We meet a lot of people who simply didn't know any of this, and a lot of others who had a great relationship with someone who then retired or moved away. Having sound counsel from someone who has done this before, someone whose judgment impressed you, is worth a great deal. Even if they're not your MSP, even if it's the co-founder's brother — get someone you can talk to about this. Don't try to be the only brain thinking about it.

Because in the end, there are many right ways to do most of what's above. The one wrong way is to ignore the problem entirely. The worst thing you can do is nothing.

*If a sanity check is what you're after, that's the core of what we do. [Start a conversation →](/contact)*`
