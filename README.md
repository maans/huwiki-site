# HUWiki Personal

**A collaborative TiddlyWiki environment built with Google Apps Script and Google Drive.**

[**Open HUWiki Personal ↗**](https://script.google.com/macros/s/AKfycbzlcVcUF81ULiVeDSssq5kqJ9J5rodNCeEj_kl5ED-7lt3mF5Pwp-rE21wONejh4FqdEg/exec) · [Website](https://huwiki.måns.dk/) · [Dansk beskrivelse](#kort-på-dansk)

> **Preview release:** The HUWiki Personal application currently has a **Danish-language interface**. The website is available in English (default) and Danish. HUWiki is evolving, and access to the app may be limited while Google OAuth verification is in progress.

## What is HUWiki?

[TiddlyWiki](https://tiddlywiki.com/) is a remarkably flexible, non-linear notebook: small pieces of information (*tiddlers*) can be linked, tagged, rearranged and presented in many different ways. HUWiki explores what happens when that flexibility is combined with **Google Drive storage, collaboration and a collection of specialised wiki editions**.

The project began as an attempt to make TiddlyWiki useful for teachers, students and colleagues at [Himmerlands Efterskole](https://himmerlandsefterskole.dk/) in Denmark. **HUWiki Personal** is the corresponding experiment for people using their own Google accounts.

It is an independent, non-commercial project by **Måns Mårtensson**, a teacher and long-time TiddlyWiki user. It is developed with assistance from large language models, particularly for programming and testing.

**HUWiki Personal is free to use and will always remain free.** No paid editions, subscriptions, or commercial versions will be offered. Its ongoing preview status concerns features and availability, not the price.

## What can it do?

At its core, HUWiki is intended to let people:

- **Create and manage wikis** based on TiddlyWiki, with a range of starting points, themes and specialised *Editions*.
- **Write, link and organise information** using TiddlyWiki's tiddlers, tags, fields, filters and transclusion.
- **Save and synchronise wiki content through Google Drive** rather than having to manage a separate single HTML file for every edit.
- **Share a wiki with other Google-account users**, allowing invited editors to work on the same wiki and associated files. Access is governed by Google permissions.
- **Work with media and supporting files**, stored alongside a wiki where its edition supports them.
- **Explore extensions and publishing workflows** so the same content can serve different purposes: a personal knowledge base, teaching resource, collaborative reference, presentation or public read-only site.

### Extensions and experiments

HUWiki also includes, or is actively developing, features such as:

| Area | Aim |
| --- | --- |
| **Wiki Editions and plugins** | Install or start with different tools and layouts for different kinds of work. |
| **PasteUp and visual content** | Arrange visual compositions and link them to wiki content. |
| **Calendar and time tools** | Present dated information inside a wiki. |
| **Slideshows and presentations** | Turn selected tiddlers into a navigable presentation. |
| **Import / “Instant Wiki”** | Turn documents or tabular material into editable wiki content. |
| **Studio, library and publishing** | Develop and share reusable packages, and publish selected content as separate websites. |

**These are areas of active development, not a promise that every feature is finished or available in every build.** The Personal preview and the school edition do not necessarily contain the same components.

## How it works

HUWiki Personal is a **Google Apps Script web application**. Google sign-in provides an identity; Google Drive is used for wiki data and shared files. Each wiki remains a TiddlyWiki-based environment, with additional HUWiki integration for storage, sharing and editions.

The **school edition** is restricted to the school's Workspace environment. **Personal** is being developed for ordinary Google accounts; the present preview may still require explicit OAuth test access. It is **not yet a released Google Workspace Marketplace product**.

[Try the current Personal preview](https://script.google.com/macros/s/AKfycbzlcVcUF81ULiVeDSssq5kqJ9J5rodNCeEj_kl5ED-7lt3mF5Pwp-rE21wONejh4FqdEg/exec).

## TiddlyWiki, contributors and licenses

HUWiki builds on the work of others. In particular:

- **[TiddlyWiki](https://tiddlywiki.com/)** was created by **Jeremy Ruston** and developed by its community. The TiddlyWiki core is available under the **[BSD 3-Clause License](https://tiddlywiki.com/static/License.html)**. [Source code](https://github.com/TiddlyWiki/TiddlyWiki5).
- **[TiddlyTools](https://tiddlytools.com/)** by **Eric Shulman** has informed HUWiki and provided components that have been adapted in parts of the project. Original credits, source references, modification notices and the **applicable license of each component** must remain with those components. Not all TiddlyTools components have the same redistribution terms.
- **Other plugins, themes and libraries** may use their own licenses; those licenses remain in force independently of any future license for original HUWiki code.

**HUWiki is not an official TiddlyWiki or TiddlyTools product, and these credits do not imply endorsement.** Nor is HUWiki affiliated with Wikipedia or Wikimedia; `huwiki` is also used as a technical identifier for the Hungarian-language Wikipedia, but refers here to an independent Danish school-born project.

### Is HUWiki open source?

**The intention is to publish HUWiki's own source code**, but the full application source is **not distributed in this repository yet**. Before such a release, we will check the precise versions of included third-party components and preserve all required notices and license terms. A single license for original HUWiki code cannot override the licenses of bundled components.

This repository contains **only the public information website** for HUWiki Personal, not its Apps Script application, private wiki data or bundled plugin source. See the site's [credits and licenses](https://huwiki.måns.dk/licenses.html) for more information.

## Privacy, development and next steps

HUWiki Personal is still in preview. Priorities include broader access for Google users, clearer documentation, English localisation, further development of editions and a reviewed source-code release.

The [privacy](https://huwiki.måns.dk/privacy.html) and [terms](https://huwiki.måns.dk/terms.html) pages are **drafts pending a review of the deployed app's actual Google OAuth permissions, storage, sharing and optional integrations**. They should not yet be treated as final statements for an OAuth-verification submission.

For questions about HUWiki, contact [humamamm@gmail.com](mailto:humamamm@gmail.com).

---

## Kort på dansk

**HUWiki Personal er en samarbejdsudgave af TiddlyWiki, bygget med Google Apps Script og Google Drev.** Ideen er at gøre det lettere at oprette, organisere, gemme og dele wikier – både alene og sammen med andre.

Projektet begyndte som en skolewiki til Himmerlands Efterskole. Personal er en udgave under udvikling til almindelige Google-konti. Programmet er **indtil videre på dansk**, mens hjemmesiden findes på både engelsk og dansk. **HUWiki Personal er gratis og vil altid forblive gratis. Der kommer ingen betalingsudgaver, abonnementer eller kommercielle versioner.**

Med HUWiki arbejder vi blandt andet på fælles redigering og synkronisering, adgang via Google-deling, skabeloner og plugins, billeder og andre filer samt funktioner til kalender, visuelt indhold, præsentationer, import og publicering. **Ikke alle funktioner er færdige eller tilgængelige i alle udgaver.**

HUWiki bygger på [TiddlyWiki](https://tiddlywiki.com/) (Jeremy Ruston og fællesskabet) og anvender blandt andet tilpassede komponenter fra [Eric Shulmans TiddlyTools](https://tiddlytools.com/). Deres respektive licenser og krediteringer skal bevares. Målet er senere at udgive HUWikis egen kode som open source, når de indbyggede komponenter er endeligt kontrolleret.

**[Åbn HUWiki Personal](https://script.google.com/macros/s/AKfycbzlcVcUF81ULiVeDSssq5kqJ9J5rodNCeEj_kl5ED-7lt3mF5Pwp-rE21wONejh4FqdEg/exec)** · **[Hjemmeside på dansk](https://huwiki.måns.dk/da/)**

<details>
<summary>Website maintenance and GitHub Pages deployment</summary>

This public site is hosted from the `main` branch of [maans/huwiki-site](https://github.com/maans/huwiki-site) using GitHub Pages. The site's English pages are at the repository root, and Danish pages are under `da/`. Language selection uses links rather than cookies. The `CNAME` file points to `huwiki.xn--mns-ula.dk`; DNS is configured separately at the domain provider. Upload the *contents* of the release archive to the repository root, preserving paths. The HUWiki Personal Apps Script app is deployed separately and is not modified by updates to this site.

</details>
