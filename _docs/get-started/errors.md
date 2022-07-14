---
layout:             page
title:              Common Errors
published:          true
date:               2021-12-17
modified:           2022-07-14
order:              /smart-filter-pro/{970}
---
Here are some of the most common errors you can run into with Power BI and custom visuals:

- **We can't display this visual because a measure is used in cross highlighting. Please remove the measure or cross highlight.**  
    Related to **Smart Filter Pro**: this happens when you enable [Consolidate Fields](../smart-filter-pro/options/mode/consolidate-fields.md) and change the logical operator to ***OR***. Unfortunately, Power BI doesn't support filtering of different fields in OR.

- **The visual is no longer available. Please contact your administrator for details.**  
    This happens when you share a report containing a custom visual stored in the Organizational Store outside your organization. If you plan to share a report file, include any custom visuals directly from a file. See [Installation](installation.md) for more information.  

    <todo>Screenshot</todo>

    This error also occurs if you remove a custom visual from the Organizational Store. This usually happens when you want to update a visual to a new version but **instead of changing the package file, you delete the old entry and create a new one.** In this case, even though the internal ID of the visual is the same, Power BI cannot recognize which visual it was and shows the error. Unfortunately, visuals in this state can only be deleted from your reports - you can't switch them to a different visual type like you normally would. For more information on how to properly update  custom visuals, see [Updating](updating.md).

<todo>TODO</todo>

> More errors are available here: [Troubleshooting tile errors](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-troubleshooting-tile-errors)

