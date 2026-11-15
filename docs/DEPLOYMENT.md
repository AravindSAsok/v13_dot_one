# Deployment

## Target

- Repository: https://github.com/AravindSAsok/v13_dot_one
- Branch: `main`
- Expected GitHub Pages URL: https://aravindsasok.github.io/v13_dot_one/

## Workflow

The `.github/workflows/deploy.yml` workflow installs dependencies with Yarn Classic, runs `yarn build --prefix-paths`, configures Pages, uploads the `public/` directory, and deploys the Pages artifact.

## Repository settings

The repository owner has enabled GitHub Pages and selected GitHub Actions as the deployment source. The workflow declares `pages: write` and `id-token: write` permissions.

## Status

The previous workflow build passed, but its Pages configuration step failed before the site was enabled. A retry was started after Pages was enabled. The current implementation's latest workflow must complete both build and deploy jobs, and the live URL must be opened and checked, before deployment is marked successful.
