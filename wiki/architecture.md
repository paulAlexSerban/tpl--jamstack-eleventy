# Proposed Architecture

## Goal
- Jamstack solution, composed of
  - headless CMS
  - static site generator
  - continuous deployment system

## Characteristics
### Front-end

- template system
- SCSS
- load data from external API
- generate static HTML
- multilingual

### Back-end
- CMS
- usable by the customer
- generate restful API
- well written, hackable, customizable
- multilingual
- assets hosted in an external place like AWS S3

### Hosting
- low cost
- reliable
- deployable from a CI/CD system

## Tools and services
- Front-end: 11ty.
- Backend: Strapi.
- Deploy orchestrator: Gitlab.
- Hosting the frontend: Firebase.
- Hosting the backend: Heroku.
- Hosting the images: Cloudinary.

- from the front-end, with mock data.
- once the front-end is ready, we’ll model the back-end from the mock data.