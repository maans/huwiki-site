# HUWikiOAuthLab — OAuth architecture and CASA review notes
**Prepared:** 10 November 2026  
**Purpose:** Source-grounded technical appendix for a request that Google reconsider or clarify the annual ADA-CASA AL1 requirement. **Not an exemption certificate, security audit, or confirmation that CASA can be avoided.**

## Examined sources
- User-supplied archive: `HUWiki-OAuthLab-v0316-test2(1).zip`, 155 files, dated 10 November 2026.
- Relevant Apps Script files: `app/appsscript.json`, `app/Code.js`, `app/GoogleApiCompat.js`, `app/PrivateVault.js`, `app/OAuthSiteAccess.js`, `app/OAuthCommunityTemplates.js`, `app/MusicOfflineAssets.js`, and import/export modules.
- The developer's email of 7 November 2026 to Google's Third-Party Data Safety Team describes two Apps Script clients within Google Cloud project `777009364810 / huwikioauthlab`. The separate Full Drive client is **not** contained in the examined archive and must be checked independently.

## Verified standard-client manifest
The archive's `app/appsscript.json` specifies:
- Google Apps Script V8 web app
- `executeAs: USER_ACCESSING`; `access: ANYONE`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/script.external_request`
- `https://www.googleapis.com/auth/script.send_mail`
- `https://www.googleapis.com/auth/calendar.readonly`
- `https://www.googleapis.com/auth/forms`

According to the submitted developer correspondence, the separate Full Drive client uses `auth/drive`, `calendar.readonly`, `script.send_mail` and `script.external_request`. This statement describes the submitted architecture, **not independent verification of that client's live manifest**.

## Data flow summary
| Flow | Source and destination | User data / credentials | Evidence |
| --- | --- | --- | --- |
| Wiki file operations, Drive permissions, exports | Apps Script → Google's Drive REST API (`www.googleapis.com`) | Google OAuth bearer token and relevant files/metadata; operations constrained by the accessing account | `Code.js`, `GoogleApiCompat.js`, `AVEdition.js`, `SlideshowExports.js`, `SlideshowImport.js` |
| Native Google Workspace operations | Apps Script → Google Drive, Docs, Sheets, Forms, Calendar | Data needed for the user-selected function | `GoogleApiCompat.js`, `Code.js`, `ShopEdition.js`, `SurveyEdition.js` |
| Site and Community public-file reads | Apps Script → `drive.google.com/uc` or Drive APIs | Public or link-shared publication IDs, files and optional resource keys; no OAuth bearer header in the public download requests examined | `OAuthSiteAccess.js`, `OAuthCommunityTemplates.js` |
| TiddlyWiki and calendar software | Apps Script → `tiddlywiki.com`, `tiddlytools.com` | Retrieval of public source resources; no Google OAuth bearer header in the reviewed calls | `Code.js` |
| Optional music/offline dependencies | Apps Script → `cdn.jsdelivr.net`, `raw.githubusercontent.com`, `codeload.github.com` | Requests for fixed/versioned public files; reviewed code validates bytes and/or digest for selected assets | `MusicOfflineAssets.js` |
| Optional cloud AI | Apps Script → `api.openai.com` or `api.anthropic.com` | User-selected prompts, tiddler context and images using the user's provider API key; **not** a Google OAuth bearer token | `PrivateVault.js` |
| User-configured local AI | User's browser → local model server | User-selected prompts/context; transport depends on local configuration | `Wiki.html`, AI Edition |
| Optional interactive maps | Browser → map tile/script providers | Network/request metadata may be visible to map services | `HUEditions.js` |

The AI request handler in `PrivateVault.js` contains no Drive API request and does not send the Google OAuth bearer token to a cloud AI provider. However, tiddler content selected by a user may **originate from Drive**, so it is inaccurate to say that no Drive-origin data can ever be transferred to an AI provider.

Gemini API request code is present but the current OAuth edition rejects the Gemini provider via `huVaultCheckProviderAudience_`.

## Protection mechanisms documented in the revised policy
- Google's OAuth authorisation and Drive permissions; per-user execution as `USER_ACCESSING`
- HTTPS for the Google-hosted app, Google REST APIs and the supported cloud AI API endpoints
- Wiki files stored in Google Drive; AI credentials stored in per-user Apps Script properties rather than shared wiki tiddlers
- Separate Google-managed script properties for selected publication metadata and temporary cache/browser-storage mechanisms
- User controls for sharing, deletion, revocation, independent publication and export
- Explicit distinction between public-resource downloads, authenticated Google API calls and user-initiated AI requests

**Not claimed:** end-to-end encryption, a fully audited security posture, unrestricted exemption from CASA, or that Google's management of Apps Script infrastructure eliminates the developer's responsibilities.

## Outstanding verification before writing Google
1. Obtain and inspect the deployed **Full Drive client's** current `appsscript.json`, source and outbound calls. The standard-client archive alone cannot establish its full data flow.
2. Verify that the deployed production version matches the examined archive (this ZIP is labelled `test2`).
3. Confirm the published privacy-policy URL and in-app disclosure visible before requesting access.
4. If asking Google to reconsider CASA, request a decision on the precise meaning of "accessing restricted data from or through a third-party server" for a `USER_ACCESSING` Apps Script web app. Do not assert an exemption in advance.
5. Confirm any additional technical control before making new security claims (for example cryptographic handling of API keys, log redaction and access to script properties).

## Official sources
- [Google: Restricted scope verification](https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification)
- [Google: Workspace user data and developer policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy)
- [Google: App privacy policy requirements](https://support.google.com/cloud/answer/13806988?hl=en)
- [Google: Security assessment](https://support.google.com/cloud/answer/13465431?hl=en)

**Workflow boundary:** This document does not change the Apps Script code or deployment, Google Cloud Console, OAuth scopes, or the Google verification request. No CASA service has been ordered.
