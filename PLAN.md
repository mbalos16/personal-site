# Site Improvement Plan

Based on recruiter feedback to strengthen the data-industry positioning of the site.

---

## Step 1 — Swap nav tab order (all pages)

**Files:** `index.html`, `projects.html`, `python.html`, `resume.html`

Change the navbar order from:
`About Me | UX Design | Data Science | Resume`

To:
`About Me | Data Science | UX Design | Resume`

---

## Step 2 — Move EXpatDATA to first card in UX Design

**File:** `projects.html`

EXpatDATA is currently card #5. Move it to position #1 — it's the most data-relevant design project (survey research, data analysis) and should be the first thing someone sees when they click into the UX Design tab.

---

## Step 3 — Rewrite Data Science project descriptions

**File:** `python.html`

Rewrite each description to lead with outcome/benefit + tech, not process. Current descriptions read academically.

| Project | Direction |
|---|---|
| **Ryanair Timecapsule** | Lead with the data engineering angle: reverse-engineered API, daily collection, open-source release |
| **RAG Educational Assistant** | Lead with the outcome: 364h of video made instantly queryable, benchmarked vs. humans |
| **Datathon** | Already decent — make the 1st place more prominent, keep AUC front and centre |
| **Manifold HyperConnections** | De-emphasise academic framing; focus on what the implementation challenge was |

---

## Step 4 — Strengthen the About Me intro

**File:** `index.html`

Add one sentence that signals industry readiness — something about handling messy real-world data: scraping, SQL, cleaning client inputs, building pipelines. Current intro reads like a researcher profile (NLP, CV, LeetCode). The new sentence should make it clear she's comfortable in the dirty-data end of the pipeline too.

> Draft the wording with the user before implementing.

---

## Step 5 — Add visuals to the Data Science page

**File:** `python.html`  
**Dependency:** user must provide image files first.

The `python.html` page is entirely text. The UX Design page uses image cards and looks much richer. Add one figure per main project:

| Project | Suggested visual |
|---|---|
| Datathon | AUC curve, confusion matrix, or EDA plot |
| RAG Educational Assistant | Screenshot of the app UI or the leaderboard |
| Ryanair Timecapsule | Sample price chart output |
| CON(e)VOLUTION | Benchmark comparison table or chart |

The HTML structure (cards matching the UX Design layout) can be prepared ahead of time. Images go in `/img/` and will be dropped in once available.
