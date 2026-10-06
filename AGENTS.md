# Nodics Agora Electronics Frontend Contract

`nodics.agora.electronics` is an independent Electronics storefront app. It owns
only the executable React experience for the Electronics domain.

## AI tool entry path

Read this file, the README, and the nearest source/test contract before changing
files. The renderer contract required by this reusable storefront template lives
inside this app so the repository remains self-contained.

## Change rules

- Electronics-specific UX belongs in this repository.
- Template renderer contracts required at runtime belong in this repository.
- Backend business logic belongs in `nodics.ai`.
- Electronics reference data belongs in the `agora.electronics` Kickoff module.
- Do not add Apparel or Telco renderer files to this app.
- Do not commit generated output, media caches, logs, database files, or local
  runtime artifacts.

Frontend startup is independent of backend health. Keep unavailable/retry UI and
frontend tests in this application. Backend API acceptance must never start or
test this frontend. Container deployment is owned by [docker/README.md](docker/README.md).

## Documentation placement

Keep frontend setup, implementation, renderer, customization and verification
guidance in the root README or the nearest existing source, package, test or
Docker README. Do not create a separate frontend `docs/` tree or standalone
product/workflow guides. Keep AGENTS files focused on agent instructions and
preserve code-level JSDoc and focused tests.

Detailed business journeys, administrator guides, backend configuration and
CMS-importable documentation belong to their backend documentation owners.
Link to that canonical content rather than copying it here. Before retiring or
moving guidance, preserve its technical detail and update all references;
historical test statements are not current acceptance evidence.
