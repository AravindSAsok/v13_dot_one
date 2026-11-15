# Deployment

## Target

- Repository: https://github.com/AravindSAsok/v13_dot_one
- Branch: `main`
- GitHub Pages URL: https://aravindsasok.github.io/v13_dot_one/

## Workflow

The `.github/workflows/deploy.yml` workflow builds the Gatsby site with `yarn build --prefix-paths`, uploads `public/` as a Pages artifact and deploys it with the GitHub Pages deployment action.

## Repository settings

In GitHub, open **Settings → Pages** and ensure the build and deployment source is **GitHub Actions**. The workflow requires the Pages and ID-token permissions declared in the YAML.

## Verification

A successful Git push is not equivalent to a successful deployment. Confirm the workflow's build and deploy jobs, then open the live URL and verify navigation and static assets. Record actual results in `QA_REPORT.md`.
