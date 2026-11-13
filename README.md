# Raga 0 Rhythms

A responsive, static website for Carnatic and fusion music performances at concerts, weddings, birthdays, and other events.

## Run locally

Open `index.html` in a browser. The site uses plain HTML, CSS, and JavaScript; no build step or dependencies are required.

## Contact enquiries

The contact form validates its fields and opens a pre-filled email in the visitor's default mail app. It does not send mail from a server. For automatic delivery without a visitor's email app, connect a form service or a server-side email provider.

## YouTube videos

The video cards currently link to YouTube searches for Carnatic concerts and Carnatic fusion. Replace those URLs in `index.html` with the band's own video or channel links when available.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and set the source to **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
3. Keep the root-level `CNAME` file in the published branch. It sets the Pages custom domain to `ragarhythms.com`.
4. At the domain's DNS provider, point the apex domain to GitHub Pages with these A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Optionally add the corresponding AAAA records from GitHub's current Pages documentation.
5. To support `www`, add a CNAME record for `www` pointing to `<your-github-username>.github.io`, then add `www.ragarhythms.com` as a custom domain in Pages if you want it to redirect to the apex.
6. After DNS has propagated, enable **Enforce HTTPS** in **Settings → Pages**.

GitHub Pages and DNS settings must be enabled in the GitHub repository and domain registrar; the files in this repository cannot configure those external services by themselves.
