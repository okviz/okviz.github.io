---
layout:             page
title:              Matched
published:          true
date:               2024-09-14
modified:           2024-09-14
order:              /synoptic-panel/options/areas/matched
---

Define the appearance of the matched areas in the visual. Matched areas are the areas that are associated with a data point in the dataset. See [Data Binding](../../concepts/data-binding.md) for more information.

## Show All Colors

**Default value**: Off

Allow to assign a color to each matched area in the visual. If disabled, the visual will use the a single color for all matched areas.

## Color

**Default value**: Custom

Select a single color to use for matched areas background. 

Available options:

- **Original**: Use the color defined in the SVG file.
- **Greyscale**: Use a greyscale color.
- **Custom**: Use the color defined below.
- **(Hidden)**: Hide the areas.


## Custom Color

**Default value**: first color of *dataColors* of [Report Theme](../../features/themes.md)

Select the color to use for matched areas background when the *Color* option is set to *Custom*.

## Transparency

**Default value**: 0%

The transparency of the matched areas. The value ranges from 0% (completely opaque) to 100% (completely transparent).