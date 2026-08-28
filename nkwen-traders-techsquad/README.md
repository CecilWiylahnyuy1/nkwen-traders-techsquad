The project: "Nkwen Traders Goes Digital"
A 7-person cross-track team builds a small static website for a fictional Cameroonian retail chain, deployed live on Amazon S3. Team = 4 Software Engineering fellows + 1 Data Science + 1 Cloud Engineering + 1 Cybersecurity.

The site itself (4 pages, no backend):

Home page - introducing the bussiness
Catalog page — pulls products dynamically from a products.json file (not hardcoded)
About page — fictional brand story
Contact page — front-end only form, no real backend

The 4 Software Engineering roles:

Site Architect — builds the HTML skeleton for all 4 pages + shared header/nav/footer
Catalog Builder — fetches products.json and renders it on the catalog page with JS (fetch() + .map()/DOM manipulation)
Design & Interaction Lead — mobile-first responsive CSS (Flexbox/Grid) + one genuine interactive feature (not just :hover)
Integration Lead — merges everyone's branches, resolves conflicts, does cross-device QA

Process:

Kickoff meeting (45–60 min) to assign roles, agree on a repo name (nkwen-traders-[teamname]), and pick a "creative angle" for the brand (specialty, color palette, one signature feature, a short backstory)
GitHub Flow: branch → commit → push → PR → 1 review minimum → merge → delete branch
Repo structure is fixed: frontend/, data/, deployment/, security/
Timeline: Kickoff (Days 1–3) → Parallel Build (4–9) → Integration (10–12) → Deploy (13–15) → Launch/Retro (16)
