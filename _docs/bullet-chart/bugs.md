---
layout:         page
title:          Bugs
published:      false
date:           2022-07-07
modified:   	2022-07-11
order:          
---

## Value axis

**Display unit**

Property display unit not working. To reproduce, try changing display unit with Sales amount as Value field

<img src="images/bugs-value-axis-display-unit.png" width="500">

**Display unit**

Start from negative number with negative measure not working properly

Step to reproduce in ContosoWithNegative:

 1. Add NegativeSalesAmount to Value
 2. Add Product Category to Category
 3. Set the Axis value Start option to -5,-6,-7.....

<img src="images/bugs-value-axis-start-with-negative.png" width="500">

## Data label

**Position**

Position auto is blocking visual rendering in horizontal orientation. 

Step to reproduce in ContosoWithNegative:

    1. Set Orientation to Horizontal
    2. Set Category Value show: On
    3. Set Data Label show: On
    4. Set Data label Position: Auto

<img src="images/bugs-data-label-position-auto-horizontal.png" width="500">
