---
layout:             page
title:              Report Themes
menu_title:         Themes
published:          true
date:               2021-11-20
modified:           2022-07-16
order:              /smart-filter-pro/features/themes
version:            2.0.6
---

Power BI Report Themes is a feature that allows you to apply multiple settings to a report at the same time and share them via a single JSON file. Check out this page for more information: [Report Themes with Custom Visuals](../../features/themes.md)

Assuming you are setting up a custom JSON theme file ([as described here](https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-report-themes#setting-theme-colors)), the customizable properties of Smart Filter Pro are:

- [Items back color](../options/appearance/index.md#items-back-color) is defined by the first element of the **dataColors** list
- [Dropdown back color](../options/appearance/index.md#dropdown-back-color) is defined by the **background** property
- [Border color](../options/appearance/index.md#border-color) is defined by the **backgroundLight** property
- [Labels font color](../options/labels/index.md) is defined by the **foregroundLight** property
- [Node text color](../options/appearance/index.md#node-text-color) is defined by the **foreground** property