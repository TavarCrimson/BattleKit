# Agent Guide

## Architecture
- Next.js app in `/app`
- UI components in `/components`
- API routes in `/app/api`

## Conventions
- TypeScript strict.
- Keep PRs small (< 300 changed lines).
- Add/modify tests for any changed behavior in `__tests__`.
- Write clear PR descriptions; link the Issue.

## Environment
- Do not commit `.env*` files.
- If new env vars are required, document them in `README.md` and add them in Vercel Project Settings.

## Commands
- Test: `npm test`
- Build: `npm run build`
- Dev: `npm run dev`

## Definition of Done
- CI green (tests pass).
- Vercel Preview deploy loads without console errors.
- README updated if there are user-visible changes.
