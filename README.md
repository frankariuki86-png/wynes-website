# wynes-website

Wynes Technical Training Institute website built with React, Tailwind CSS, Framer Motion, and React Router DOM.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact form email setup

The contact form sends enquiries to `wynestti@gmail.com` through a Vercel serverless function.

Set these environment variables in Vercel before deploying:

- `GMAIL_USER` - the Gmail address used to send mail
- `GMAIL_APP_PASSWORD` - an app password for that Gmail account

The same values can be added locally in a `.env` file if you want to test the mail flow in a Node-compatible environment.