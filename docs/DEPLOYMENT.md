# Deployment

## Target

GitHub Pages project site: `https://aravindsasok.github.io/v13_dot_one/`

Repository: `AravindSAsok/v13_dot_one`  
Branch: `main`  
Workflow: `.github/workflows/pages.yml`

## Configure

1. Open repository Settings → Pages.
2. Select **GitHub Actions** as the build and deployment source if it is not already selected.
3. Ensure GitHub Actions is permitted for the repository.
4. Push to `main` or run the workflow manually.
5. Wait for the `Deploy` job to finish successfully.

## Verify

Check the home page, `/case-studies/`, CSS, JavaScript, favicon, sitemap and robots file. Confirm all paths resolve beneath `/v13_dot_one/`.

## Rollback

Revert the relevant v13.1 commit and redeploy. The original `v13` repository and URL remain independent. Promotion to the primary portfolio URL is a separate release decision.
