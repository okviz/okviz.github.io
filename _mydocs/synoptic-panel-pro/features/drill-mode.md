---
layout:             page
title:              Drill Mode
published:          true
date:               2024-05-10
modified:           2024-05-12
order:              /synoptic-panel-pro/features/drill-mode
next_reading:       true
---

The Drill Mode is a feature of Power BI that allows you to navigate through the data hierarchy of a visual. When the Drill Mode is enabled, Power BI provides a set of controls that allow you to drill down or up in the data hierarchy. See more in the [official documentation](https://learn.microsoft.com/en-us/power-bi/consumer/end-user-drill).

In Synoptic Panel Pro, Drill Mode offers a unique capability to interact with different maps at once. This feature allows users to start from an overarching map and drill down to more intricate details or switch between various map layers to display different aspects of the bound data. This feature is particularly useful when you have complex data structures or when you want to provide different perspectives on the same map. 

> Drill Mode also allows you to override the usual [data volume limitations](../concepts/limitations.md) of Power BI visuals, that occur when you try to display too many data points in a single visual.

<todo>Screencast</todo>

## How to Enable Drill Mode

Drill Mode can be enabled in Synoptic Panel Pro by adding more than a column to the ***Categories*** data role. In fact, the visual will display only a column at a time, and you can switch between them using the drill controls.

> Note that the Drill Mode is available only if your data satisfies some specific requirements. Refer to [Drill Mode Requirements](https://learn.microsoft.com/en-us/power-bi/consumer/end-user-drill#drill-mode-requirements) for more information.

<todo>Screenshot</todo>

## How to Use Drill Mode

When the Drill Mode is enabled, you will see a set of controls in the visual headear that allow you to navigate through the data hierarchy.

<todo>Screenshot</todo>

- **Drill Up**: Click on the first button to move to the previous level of the data hierarchy. This action will display the previous column in the ***Categories*** data role. If you are already at the top level, this button will be disabled.

- **Drill Down One Field**: Click on the second button activate the drill down mode. You can then click on a map area to move to the next level of the data hierarchy but limited to the data point bound to the clicked area.

<todo>Example</todo>
<todo>Screenshot</todo>




Learn more on the [official documentation](https://learn.microsoft.com/en-us/power-bi/consumer/end-user-drill).


## How to Setup Maps on Different Levels

When you enable Drill Mode, you can bind different columns to the ***Categories*** data role to display different maps at different levels. This way, you can create a hierarchy of maps that represent different aspects of the same data.