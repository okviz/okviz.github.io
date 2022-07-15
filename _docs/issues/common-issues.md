---
layout:             page
title:              Common Issues
published:          true
date:               2021-12-17
modified:           2022-07-14
toc:                false
order:              /03/01
---
Here are some of the most common errors you can run into with Power BI and custom visuals:

- ### We can't display this visual because a measure is used in cross highlighting. Please remove the measure or cross highlight.
    **Smart Filter Pro**: This happens when you enable [Consolidate Fields](../smart-filter-pro/options/mode/consolidate-fields.md) and change the logical operator to ***OR***. Unfortunately, Power BI doesn't support filtering of different fields in OR.

- ### The visual is no longer available. Please contact your administrator for details.
    This happens when you share a report containing a custom visual stored in the Org Store outside your organization. If you plan to share a report file, include any custom visuals directly from a file. See [Installation](../get-started/installation.md) for more information.  

    <img src="images/visual-no-longer-available.png" width="500">

    This error also occurs if you remove a custom visual from the Org Store. This usually happens when you want to update a visual to a new version but **instead of changing the package file, you delete the old entry and create a new one.** In this case, even though the internal ID of the visual is the same, Power BI cannot recognize which visual it was and shows the error. Unfortunately, visuals in this state can only be deleted from your reports - you can't switch them to a different visual type like you normally would. For more information on how to properly update  custom visuals, see [Updating](../get-started/updating.md).

- ### Too many "Field" values. Not displaying all data. Filter the data or choose another field.
    This error occurs when the field bound to the visual contains too many rows or exceeds the capacity of the visual. In fact, custom visuals are capable of getting max 1,000,000 rows with ***incremental loading*** enabled and 30,000 without it. Since not all our visuals use this advanced technique, you may see this message. 

    <img src="images/too-many-values.png" width="700">
    
    Refer to the documentation of the visual to see if incremental loading is supported.
    

<todo>TODO</todo>

> More errors are available here: [Troubleshooting tile errors](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-troubleshooting-tile-errors)

