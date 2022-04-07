---
layout:             page
title:              Common Errors
menu_title:         Errors
published:          true
date:               2021-12-17
modified:           2021-12-28
order:              /02/98
---
Here are the most common errors you can run into with Power BI and Smart Filter Pro:

- **We can't display this visual because a measure is used in cross highlighting. Please remove the measure or cross highlight.**  
    It happens when you enable ***Consolidate Fields*** and change the logical operator to ***OR***. Unfortunately, Power BI doesn't support filtering of different fields in OR.

- **The visual is no longer available. Please contact your administrator for details.**  
    It happens when you share a report containing Smart Filter Pro coming from the Organizational Store outside your organization. If you plan to share pbix, include Smart Filter Pro directly from a file. See [Installation](../general/installation) for more information.


> Other errors are listed here: [Troubleshooting tile errors](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-troubleshooting-tile-errors)


<todo assign="daniele">TODO</todo>
