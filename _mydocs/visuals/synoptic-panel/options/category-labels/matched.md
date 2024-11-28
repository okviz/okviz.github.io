---
layout:             page
title:              Matched
published:          true
date:               2024-09-14
modified:           2024-11-12
order:              /synoptic-panel/options/category-labels/matched
---

This section provides options for configuring the category labels for matched areas. 

> Note that matched areas are the areas that are associated with a data point in the dataset. See [Data Binding](../../concepts/data-binding.md) for more information.

## Display Value

**Default value**: (Auto)

Defines what value to display for the matched elements. By selecting '(Custom)', it is possible to enter a custom value that can be subject to Power BI conditional formatting.

Available options:

- **(Auto)**: The visual will display the best value based on the data.

- **(Custom)**: The visual will display the custom value entered in the 'Custom Value' field.

- **Category Value**: The visual will display the category value.

- **Category Value (Path)**: In case you have expanded the hierarchy level through the specific drill control and have disabled the [Aggregate on Expand](../drill-behavior/aggregate-on-expand.md) option, the visual will display the full hierarchy path of the category, otherwise the category value (as above).  
See [Automatic Binding when Hierarchy is Expanded](../../concepts/data-binding.md#automatic-binding-when-hierarchy-is-expanded) for more information.

- **Title**: The visual will display the title of the matched element as defined in the SVG file.

- **Element Id**: The visual will display the element id of the matched element as defined in the SVG file.

## Custom Value

**Default value**: (Empty)

The custom value to display for the matched elements. This field is only available when the 'Display Value' option is set to '(Custom)'. 

You can use different placeholders to include specific fields from the data model or map: 

- `{category}` - the category value
- `{value}` - the data point value
- `{title}` - the title of the matched map area
- `{id}` - the element id of the matched map area
- `{path}` - the full hierarchy path of the category when the hierarchy is expanded, otherwise the category value

E.g.: `{category}\n({value})` will be rendered as:
```
Computers 
($123,456)
```

## Append Data Value

**Default value**: Off

When enabled, data point value is appended to the category label.

## Display Unit

**Default value:** Auto

The unit of the value to display. This option is only visible when the 'Include Data Label' option is On. 

## Decimal Places

**Default value:** 0

The number of decimal places to display. This option is only visible when the 'Include Data Label' option is On. 

## Color

**Default value**: #000000

The color of the category labels text.

## Outline

**Default value**: Off

When enabled, the category labels text is outlined.

## Outline Color

**Default value**: None

The color of the outline of the category labels text. When set to None, the outline color is automatically calculated based on the color of the text.

## Outline Transparency

**Default value**: 50%

The transparency of the outline of the category labels text. The value ranges from 0% (completely opaque) to 100% (completely transparent).

## Outline Width

**Default value**: 2

The width of the outline of the category labels text. The value ranges from 1 to 20.
