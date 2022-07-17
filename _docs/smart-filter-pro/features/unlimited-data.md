---
layout:             page
title:              (Almost) Unlimited Data
menu_title:         Unlimited Data
published:          true
date:               2022-07-16
modified:           2022-07-17
order:              /smart-filter-pro/features/unlimited-data
---

Power BI custom visuals are limited in several ways compared to core visuals. One of these limitations affects the amount of data that visuals can receive from the underlying dataset. Custom visuals can retrieve max 30,000 rows by default, but with an incremental load technique, up to 1,000,000 rows can be downloaded.  
Smart Filter Pro implements incremental loading with ***Dropdown, Observer, and Hierarchy modes***.

> Incremental loading can affect report perfomance when there are too many rows to fetch. **With fields larger than 50,000 rows it is recommended to switch to Filter mode**.

For ***Filter and Serch modes***, however, there is not need to implement the above tecnique, as they don't load data at all but run  queries on demand, bypassing any row limits set by Power BI.

For more information:

- [Incremental Loading in Dropdown Mode](../options/mode/dropdown.md#incremental-loading)
- [No Data Limits in Filter Mode](../options/mode/filter.md#no-data-limits)