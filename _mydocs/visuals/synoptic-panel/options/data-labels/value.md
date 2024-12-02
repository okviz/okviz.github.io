---
layout:             page
title:              Value
published:          true
date:               2024-09-14
modified:           2024-12-01
order:              /synoptic-panel/options/data-labels/value
---
**Default value:** Off

With these options you can configure the number formatting of the data labels in Synoptic Panel.

## Display Unit

**Default value:** Auto

The unit of the value to display.

## Decimal Places

**Default value:** 0

The number of decimal places to display.

## Aggregation

**Default value**: (Auto Detect)

The aggregation method for the data point values. It must be exactly the same as the one used by the value column. This setting is required when you connect a column to 'Legend' or 'Map URLs' field wells, since the aggregation is made by the visual and not from Power BI.

> If you select `(Auto Detect)` the visual will try to detect the aggregation method automatically. This doesn't work for all cases, so it is recommended to verify the aggregation method and set it manually if necessary.