---
layout:             page
title:              Max Rows to Retrieve
published:          true
date:               2021-12-14
modified:           2021-12-14
order:              /02/03/99/max-rows-to-retrieve
toc:                false
internal:           maxIncremental
available:          Dropdown | Hierarchy mode
---
**Default value:** 5000

This option allows you to set the number of rows that the visual can retrieve from the dataset. 

<img src="images/max-rows.png" width="700">

Set to 0 to retrieve all the data available to the visual.

> Note that it is not guaranteed to retrieve all the data available in the underlying dataset - in fact, there are some [limits set by Power BI](https://docs.microsoft.com/en-us/power-bi/developer/visuals/fetch-more-data#known-limitations-of-fetchmoredata) that cannot be exceeded: 
- Dataview total row count is limited to **1,048,576 rows**.
- Memory size is limited to **100 MB**.


<h2>How is performance affected by this setting?</h2>

Retrieving more than **30,000 rows** may slow down the entire report, because the Dropdown mode loads all data in memory. If you have a larger column it is recommended to use the [Filter mode](filter). 

See more: 
- [Incremental Loading in Dropdown mode](dropdown#incremental-loading)
- [Performance Boost in Filter Mode](filter#performance-boost)