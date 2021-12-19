---
layout:             page
title:              Dropdown Mode
menu_title:         Dropdown
published:          true
date:               2021-12-09
modified:           2021-12-14
order:              /02/03/01
internal:           dropdown
---
The Dropdown mode in Smart Filter Pro allows you to select items for filtering data by scrolling down a list, or by typing a few keywords and refining your search with an auto-complete list.

<img src="images/dropdown-mode.png" width="650">
 
## Incremental Loading

The Dropdown mode populates the drop-down list using a tecnique called ***Incremental Loading*** – it doesn't load all data at once, but requests small blocks of values (5000) at a time, completing the list incrementally. This means that, with a large volume of data, this process may take several seconds during which some values are not available for queries.  

> Keep in mind that you can limit the [number of rows to retrieve](max-rows) with a specific option.

> Note that the **Incremental Loading is restarted on each report update** (for example, when changing filters, clicking on any chart/slicer, or changing the active report page), so a large column may slow down the entire report.  

For this reason, the **Dropdown mode is not recommended with fields greater than 30,000 rows**. For larger datasets, the [Filter mode](filter) is better, as it doesn't load values into memory, but just apply filters on demand.


## How to Search

<todo>Explain how search works in this mode (no wildcards support, case insensitive) - Mention that the "Contains" vs "Start with" match is affected by the Autocomplete option.</todo>


## Options

On selecting the Dropdown mode, the options available are:
- [Autocomplete](autocomplete)
- [Compress Multiple](compress-multiple)
- [Cross Filtering](cross-filtering)
- [Empty when no Selection](empty-when-no-selection)
- [Max Items in Dropdown](max-items-in-dropdown)
- [Max Rows to Retrieve](max-rows)
- [Max Selectable Items](max-selectable-items)
- [Single Selection](single-selection)
- [Split Pasted Text by](split-pasted-text)