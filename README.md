# HUWiki Personal – public website (English default / Danish toggle)

Published website: https://huwiki.måns.dk/  
Repository: https://github.com/maans/huwiki-site

## Languages

- **English is the default** for https://huwiki.måns.dk/ and all root pages.
- Click **DA** in the site header for the Danish equivalent at `/da/`.
- Click **EN** from a Danish page to return to the corresponding English page.
- Both EN and DA are present on all five pages, and each language's internal navigation stays in that language. No JavaScript, cookies, or browser storage is used to select a language: the URL itself preserves the selection.
- Older `/en/` URLs redirect to their new default English counterparts.
- **The HUWiki Personal application is still only in Danish**. The website's English interface is separate from the application interface.

## Deploy to GitHub Pages

Upload the **contents** of this ZIP into the **root** of the public repository `maans/huwiki-site` on branch `main`. Replace `index.html` and other previously uploaded files. Keep `da/`, `en/`, `styles.css`, `.nojekyll`, and `CNAME` at their supplied paths.

GitHub Pages → Settings → Pages → Deploy from a branch → `main` / `(root)`.

The `CNAME` file already contains `huwiki.xn--mns-ula.dk`. Your DNS CNAME at one.com for `huwiki` should keep pointing to `maans.github.io`; do not change other DNS records.

## Quick testing

- https://huwiki.måns.dk/ → English homepage
- https://huwiki.måns.dk/da/ → Danish homepage
- https://huwiki.måns.dk/licenses.html → English licenses
- https://huwiki.måns.dk/da/licenses.html → Danish licenses
- Check EN ⇄ DA on `about.html`, `privacy.html`, and `terms.html` too.
- All pages link to the existing HUWiki Personal Apps Script deployment without changing it.

## IMPORTANT: Google OAuth/third-party licenses

The site is suitable for presenting HUWiki but **the privacy policy and terms remain marked as drafts** until HUWiki Personal's live OAuth scopes, Google Drive storage/sharing, logging/retention, optional AI services and other integrations have been verified. Do not submit draft legal pages as final documents to Google.

The website links to TiddlyWiki and Eric Shulman's TiddlyTools, with third-party license caveats. It does not redistribute HUWiki Personal source code, TiddlyTools modifications, Grok TiddlyWiki, OAuth secrets, or user data. Before any separate HUWiki source release, verify the actual versions and third-party notices/licenses.

## Name clarification

The name **HUWiki** originates from the author's school wiki project. Wikipedia uses the technical code `huwiki` for its Hungarian-language edition, but the HUWiki Personal project is completely independent of Wikimedia and Wikipedia. The website states this on the About pages in English and Danish. This is a clarification of project identity, not a legal trademark clearance.
