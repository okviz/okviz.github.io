---
layout:             page
title:              Empty when no Selection
published:          true
date:               2021-12-14
modified:           2021-12-15
order:              /02/03/99/empty-when-no-selection
internal:           defaultNoFilter
available:          Dropdown | Filter | Search mode
version:            2.2.4
---
**Default value:** Off

This option, if enabled, applies an empty filter to the report if no user selection is set for filter in Smart Filter Pro. It works with textual/date/numeric fields. 
 
<img src="images/empty-filter.png" width="700">

<todo assign="twinkle">Retake the screenshot: we need a single screenshot split into two screens, one before and the other after applying the option.</todo>

In above example, you see that an empty filter is applied to the report as there is no item specified for filtering in the input text box.

> The empty filter is actually a special filter that, when applied to the report, ***almost certainly*** produces no results. With some datasets, in fact, you may see unexpected results – here are the real values the filter assumes based on the type of the parent field:
- **Text:** _@£$%
- **Number:** 9007199254740991
- **Date:** 1901-01-01
