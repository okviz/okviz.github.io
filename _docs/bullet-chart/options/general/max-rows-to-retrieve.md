---
layout:             page
title:              Max Rows To Retrieve
published:          true
date:               2022-07-07
modified:   	    2022-08-17
order:              /bullet-chart/options/general/max-rows-to-retrieve
internal:           maxRows
---

**Defaul value:** All rows

This option allows you to specify how many rows the visual should retrieve. Please note that **retrieving more than 30,000 rows may slow down the entire report**. Leave empty to retrieve (almost) all rows.

> It is not guaranteed to retrieve all the data available in the underlying dataset - in fact, there are some [limits set by Power BI](https://docs.microsoft.com/en-us/power-bi/developer/visuals/fetch-more-data#known-limitations-of-fetchmoredata) that cannot be exceeded: 
- Dataview total row count is limited to **1,048,576 rows**.
- Memory size is limited to **100 MB**.