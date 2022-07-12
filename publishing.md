---
layout:     page-no-nav
title:      Visual Publishing
published:  true
toc:        false
date:       2022-07-12
modified:   2022-07-12
sitemap:    false
---

This document contains the steps to follow in order to publish a new Power BI visual or update an existing one.

## Making changes

- If you are fixing small bugs, some regressions or making some change requested by the Microsoft Review Team:

    1. Change the **revision** version number of the visual (E.g. if the last version was **1.0.0.0** the new one will be **1.0.0.1**) in:
        - ***pbiviz.json***
        - ***visual.ts*** (usually in the `initMeta()` method)

- If you are creating a new full version: 

    1. Change the **minor or major**  version number of the visual (E.g. if the last version was **1.0.0.0** the new one will be **1.0.1.0**) in:
        - ***pbiviz.json***
        - ***visual.ts*** (usually in the `initMeta()` method)

    2. Create a new branch name with the new version number **without the revision number** (E.g. if the new version number is **1.0.1.0**, the new branch will be **1.0.1**)   


## Publishing

1. Build the visual package (PBIVIZ) via `pbiviz package`
2. Move the package to the `archive` folder
3. Update the sample visual report located in the `archive` folder:
    1. Open the sample file (usually it is named **VisualName-tour.pbix**)
    2. Activate the ***Developer Mode*** in Power BI Desktop
    3. Import the new visual package in the report
    4. Save and close

4. Commit the latest changes to the repo

5. Create a new branch called **certification** (lowercase) based in the current one (this is required only if the visual must be certified by Microsoft). **If the certification branch already exists, delete it and recreate it.**

6. Send the PBIVIZ and PBIX files to Microsoft through the [Microsoft Partner Center](https://partner.microsoft.com/en-us/dashboard/commercial-marketplace/overview).

7. Create a private version of the visual:
    1. Open ***pbiviz.json***
    2. Change `visual.displayName` by adding the visual version number (E.g. **Visual Name by OKVIZ 1.0.0**)
    3. Change `visual.guid` by adding the visual version number (E.g. **COMPLEX_GUID_1.0.0**)
    4. Change `assets.icon` with a specific version icon (if available)
    5. Build the package
    6. **IMPORTANT:** Revert the changes made in steps 2-3-4

8. Publish the private version on the Org Store
