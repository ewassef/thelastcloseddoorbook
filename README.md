# The Last Closed Door

Marketing site for *The Last Closed Door* by Eddie Wassef. Next.js, exported as a
static site and served from GitHub Pages.

Live: **https://thelastcloseddoor.com**

## Development

```bash
npm install
npm run dev
```

```bash
npm run lint
```

```bash
npm run build
```

`npm run build` writes the static export to `out/`. Preview it with any static
server, e.g. `npx serve out`.

## Content

Everything editable lives in two files, so copy changes don't mean touching JSX:

| File | Holds |
| --- | --- |
| `app/site.ts` | Section toggles, launch status, retailer rows, blog cards, book-club questions, outbound links |
| `app/speaking-data.ts` | Talks, topics and past events (a committed snapshot of Sessionize) |

Notable switches in `app/site.ts`:

- **`BUY_STATUS`** — `"Coming soon"` → `"Pre-order"` → `"Available now"`. Drives
  the badge on every retailer row and the "Where to buy" headline. Add a `url`
  to a `RETAILERS` entry and that row becomes a real outbound link.
- **`SHOW_PRAISE`** — off, because `PRAISE` is empty. Fill `PRAISE` with
  attributed quotes and flip it to `true`; the nav picks the section up
  automatically.
- **`SHOW_SPEAKING`** — on, backed by real Sessionize data.

### Mailing list

GitHub Pages is static, so the signup form needs an external handler
(Buttondown, ConvertKit, Formspree, a Cloudflare Worker — anything that accepts
`POST {"email": "..."}`).

Until one is configured the panel deliberately shows follow links instead of an
input, rather than collecting addresses nothing will ever read. To switch the
form on, add a **repository variable** named `NEXT_PUBLIC_SIGNUP_ENDPOINT` under
*Settings → Secrets and variables → Actions → Variables*. The deploy workflow
passes it through at build time.

### Sessionize

Sessionize has no public speaker API and blocks cross-origin reads, so
`app/speaking-data.ts` is a hand-refreshed snapshot. Update the `updated` field
when you refresh it — the speaking section prints that date.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`, and
can be run manually from the Actions tab. No `out/` directory is committed.

One-time setup in the repository: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

## Domains

GitHub Pages allows exactly one custom domain per repository — the value in
`public/CNAME`. That is **thelastcloseddoor.com**;
**thelastcloseddoorbook.com** has to be handled as a redirect at the DNS or
registrar level.

### thelastcloseddoor.com (canonical, served by Pages)

At the DNS provider for `thelastcloseddoor.com`:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `ewassef.github.io.` |

Then in **Settings → Pages**, set the custom domain to `thelastcloseddoor.com`
and tick **Enforce HTTPS** once the certificate is issued (usually a few minutes
after DNS propagates).

### thelastcloseddoorbook.com (redirect)

Point it at the canonical domain rather than at Pages. Pick whichever your setup
supports:

- **Registrar URL forwarding** — most registrars offer a permanent (301)
  forward. Target `https://thelastcloseddoor.com`, forwarding both the apex and
  `www`, with path forwarding on.
- **Cloudflare** — proxy the domain and add a Redirect Rule:
  `https://thelastcloseddoor.com${http.request.uri.path}`, status 301, preserving
  the query string.

Do **not** add a second `CNAME` file or point `thelastcloseddoorbook.com`'s DNS
at the Pages IPs: Pages will serve it as an unrecognised host, and adding it as
the custom domain would take the canonical domain offline.

## Assets

`public/images/` — cover, hero art (cropped from the cover artwork), author
photo, and the 1200×630 Open Graph card. Regenerate the OG image from the hero
if the artwork changes.
