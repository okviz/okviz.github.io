---
layout:         page
title:          Category axis
published:      false
date:           2022-07-07
modified:   	2022-07-12
order:          /3/category
---

**Default value:** On

When enabled, this options' section displays category axis labels and allows to edit their appearance.

<img src="../images/category-axis-show.png" width="400">

If set to **Off**, this options' section hides the category axis and disables the related display options.

<img src="../images/category-axis-show-off.png" width="400">

## Text 

**Default value:** Auto

<img src="../images/category-axis-text.png" width="400">

This option is only visible when no measures are connected to the **Category** field and there is only one measure connected to the **Value** field.

<img src="../images/category-axis-text-empty-category-one-value.png" width="400">

***Auto*** means that the category name displayed will be the same as the name of the measures connected to the **Value** field.

<img src="../images/category-axis-text-auto-demo.png" width="400">

When edited, the text option allow a custom name to be assigned to the axis label.

<img src="../images/category-axis-text-demo.png" width="400">

## Show entire text

**Default value:** On

If enabled, this option automatically enlarges the category axis to display the entire labels text. Labels will be displayed according to the **Orientation** of the visual:

- **Horizontal**

    <img src="../images/category-axis-show-entire-text-horizontal.png" width="400">

- **Vertical**

    <img src="../images/category-axis-show-entire-text-vertical.png" width="400">

If it is inactive, labels' size will adapt to the category axis available space, with slightly different behavior depending on the visual's **Orientation**:

- **Horizontal:**  Label text could be truncated with ellipsis, according to the available axis space. Labels' orientation always remains horizontal.

    <img src="../images/category-axis-show-entire-text-off-h.png" width="400">   

- **Vertical:** Label text could be truncated with ellipsis, according to the available axis space. Label orientation could be horizontal or at a 35-degree angle, depending on the height and width set for the visual.

    <todo> Add 90-degree label orientation with truncate text screenshoot </todo> 

    <img src="../images/category-axis-show-entire-text-off-v-0deg.png" width="400">

    <img src="../images/category-axis-show-entire-text-off-v-35deg.png" width="400">

## Font family

**Default value:** Segoe UI

This option specifies the font used to display the category labels

## Text size

**Default value:** 9px

Defines the size of the font used to display the category labels

## Color

Specifies the color of the text for the category labels
