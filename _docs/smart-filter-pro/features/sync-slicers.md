---
layout:             page
title:              Sync Slicers
published:          true
date:               2021-11-20
modified:           2022-01-30
order:              /smart-filter-pro/features/sync-slicers
version:            2.0.2
---

***Sync Slicers*** is a feature of Power BI that allows you to apply the filter of a visual slicer placed on a single page to other pages of the same report. Smart Filter Pro is a slicer and supports this feature as well. 

To use ***Sync Slicers*** with Smart Filter Pro, you can follow these steps:

1. Show the ***Sync Slicers*** pane:
    - In Power BI Desktop click on the ***View*** ribbon, then select ***Sync slicers***.
    - In Power BI Service, click on the ***View*** menu, then enable the ***Sync slicers pane***.

2. Select the visual on the canvas and set the options in the ***Sync Slicers*** pane to obtain the result you want.

    <img src="images/sync-slicers-1.png" width="850">   

The two columns in the pane are: 

- **Synchronization**: This allows you to choose the pages where to apply the filter of the slicer. 

- **Visibility**: This allows you to choose where to place the slicer visual. This means that if you manually draw the visual on a single page, you can duplicate it on different pages automatically by using this option.

For instance, suppose that you have a report with three pages; one page contains Smart Filter Pro with the category ***Computers*** selected and you want to replicate this filter on the other pages too. To do so, you just need to select both the columns on every line of the ***Sync Slicers*** pane and the filter will be spread across the report.

<img src="images/sync-slicers-2.png" width="850">   

> Find more information on this feature here: [Slicers in Power BI](https://docs.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers#sync-and-use-slicers-on-other-pages)