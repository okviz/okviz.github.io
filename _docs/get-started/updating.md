---
layout:             page
title:              Updating Visuals
menu_title:         Updating
published:          true
date:               2021-12-21
modified:           2022-07-15
order:              /01/02
---
Updating our visuals is an essential part of our committment. This is the only way to fix bugs and take advantage of the latest features of Power BI.  
From a user's perspective, updating a visual to a new version is a simple operation, but it requires different steps based on how our visuals have been installed.

## From a File

The procedure to update a local visual file is identical to the one you follow during the installation:

1.	Open a report with Power BI Desktop or from the Power BI service.
2.	Select the ellipsis from the bottom of the ***Visualizations*** pane and choose ***Import a visual from a file*** from the dropdown menu.

    <img src="images/installation-file-1.png" width="300">

3.	From the Open File dialog box, select the .pbiviz file to import and then select ***Open***. At this point the visual will be updated. You can check this by right-clicking on the visual in the ***Visualizations*** pane and choosing ***About***.

    <img src="images/visual-about.png" width="250"> 
    <img src="images/visual-version.png" width="400">


## From the AppSource

After installing a visual from the AppSource, you don't need to do anything to use the latest version of our visuals. In fact, each new version is automatically downloaded and updated in every report that uses that visual.

This behavior is straightforth and time-saving, but since **it does not show any notification when a new version has been downloaded in your reports and you have no control over it** (you can't downgrade for example), you may run into problems if there is a regression in the visual's code or sudden changes in the report layout.

## From the Org Store

When a new version of a custom visual already installed in the Org Store is released, a Power BI admin can automatically **update all the reports using that visual throughout the organization**.
To update an existing visual in the Org Store:

1.	Log into your Power BI account and navigate to ***Admin portal***.

    <img src="images/installation-org-1.png" width="500">

2.	In the ***Organization visuals*** tab, select the custom visual to upgrade and click on the gear icon (***Settings***).

    <img src="images/updating-org-1.png" width="600">

3.	Click ***Browse*** and choose the new version of the custom visual that will be uploaded to the Org Store. Press ***Update*** to save.

    <img src="images/updating-org-2.png" width="350">