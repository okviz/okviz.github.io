---
layout:             page
title:              Matching
published:          true
date:               2021-12-16
modified:           2021-12-17
toc:                false
order:              /smart-filter-pro/options/mode/matching
internal:           searchCondition
available:          Search mode
---
**Default value:** Interactive

This option allows you to define how the search is performed with the Search mode.

> To learn how search works and the full syntax you can use, see: [How to Search in Search Mode](search.md#how-to-search)

You can choose between: 
- [Exact Match](#exact-match)
- [Contains/Wildcards](#contains/wildcards)
- [Interactive](#interactive)

This feature is similar to the [Default Condition for Text](default-text-condition.md) of Filter mode, but introduces fundamental differences. 

## Exact Match

Let us say you want to filter with the Audio category. If you type `audio` and the Matching value is chosen as ***Exact match***, then the results will be filtered displaying category that is exactly equal to ***audio***.

> Note that the search is always case insensitive.

<img src="images/matching-1.png" width="700">

## Contains/Wildcards

If you choose ***Contains/wildcards*** as the Matching value, then you can specify any keyword to have items containing that keyword, or even wildcards can be applied explicitly.

<img src="images/matching-2.png" width="700">

For instance, in the above example where the keyword `audio` is specified in the search box, you will see all the categories containing ***audio***, including the category ***Music, Movies, and Audio Books***. 

## Interactive

If you choose ***Interactive*** as matching method, a toggle is displayed in the search box to switch from one mode to another even in [Reading view](https://docs.microsoft.com/en-us/power-bi/consumer/end-user-reading-view#reading-view). This means that not only the report designer can change the matching but also the end users.  
Moreover, the toggle shows a hover tooltip with a summary of the syntax you can use in both modes.

<img src="images/matching-3.png" width="600">