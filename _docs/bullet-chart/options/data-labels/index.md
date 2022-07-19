---
layout:         page
title:          Data Labels
published:      true
date:           2022-07-07
modified:   	2022-07-14
order:          /bullet-chart/options/data-labels
---

**Default value:** Off

When enabled, this options' section displays data labels and allows to edit their appearance.

## Font Family

**Default value:** Segoe UI

This option specifies the font used to display the data labels.

<img src="images/data-labels-font-family.png" width="700">

## Text Size

**Default value:** 9px

Defines the size of the font used to display the data labels.

<img src="images/data-labels-text-size.png" width="700">

## Color

Specifies the color of the text for the data labels.

<img src="images/data-labels-color.png" width="700">

## Display Unit

**Default value:** Auto

This option defines the display unit for the data labels – in Thousands, Millions, Billions,etc.  

> Use *Auto* to display the most relevant display unit for each value depending on how big the number is.   

## Value Decimal Places

**Default value:** Auto

This option defines the number of decimal places for the value of data labels. 

> Use *Auto* to display the most relevant decimal places for each value depending on the total number of decimal places each value has.

## Position

**Default Value:** Auto

> This is a **Premium option**. More information about premium options can be found here: [Premium](general/premium.md)

Allows to specify the position of data labels relative to the bars. The following positioning options are available:

- **Auto:** if there is enough space at the end of the bar, data label is placed outside the bar, otherwise it is placed inside-end. 

    <img src="images/data-labels-position-auto.png" width="700">

- **Inside end:** the label is placed inside, at the end of the bar. If the bar is not large enough to contain the label it will not be displayed 

    <img src="images/data-labels-position-inside-end.png" width="700">

- **Outside end:** the bar size is reduced to allow the label to be displayed outside.

    <img src="images/data-labels-position-outside-end.png" width="700">

- **Inside-center:** the label is placed in the middle of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="images/data-labels-position-inside-center.png" width="700">

- **Inside-base:** the label is placed inside, at the base of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="images/data-labels-position-inside-base.png" width="700">

## Overflow

**Default Value:** On

> This is a **Premium option**. More information about premium options can be found here: [Premium](general/premium.md)

When active, this option will always keep data labels visible regardless of the size of the bars. If set to **Off** instead automatically hides the data labels when they are wider than the bars.

<todo> Add 2 screenshots, with and without overflow </todo>

## Background

**Default Value:** Off

> This is a **Premium option**. More information about premium options can be found here: [Premium](general/premium.md)

This option adds a background to data labels.

<img src="images/data-labels-background.png" width="700">


## Background Color

This option is only visible if **Background** is enabled. It allows to choose a color for data labels' background.

<img src="images/data-labels-background-color.png" width="700">

## Background Opacity

**Default Value:** 50

This option is only visible if **Background** is enabled. It Defines the background opacity value of data labels.

<img src="images/data-labels-background-opacity.png" width="700">  

## Border

**Default Value:** Off

> This is a **Premium option**. More information about premium options can be found here: [Premium](general/premium.md)

This options adds a border to data labels.

<img src="images/data-labels-border.png" width="700">  

## Border Stroke

**Default Value:** 1

This option is only visible if **Border** is enabled. It defines the border stroke width.

<img src="images/data-labels-border-stroke.png" width="700"> 

## Border Style

**Default value:** Solid

This option is only visible if **Border** is enabled. It defines the style of the border line. It provides three options to choose from:

- **Dashed:**  Line made up of short strokes with breaks in between.

    <img src="images/data-labels-border-style-dashed.png" width="700">   

- **Solid:** Solid line without breaks.

    <img src="images/data-labels-border-style-solid.png" width="700">   

- **Dotted:** Line made up of dots with breaks in between.

    <img src="images/data-labels-border-style-dotted.png" width="700">

## Line Density 

**Default value:** 40

This option is only visible when **Border style** is set to ***Dashed*** or ***Dotted***. It defines the distance between dashes/dots of the border line: the smaller the value, the greater the distance.

<img src="images/data-labels-line-density.png" width="700">

## Corner Radius

**Default value:** 0px

Allows to define the data labels' curve on the corners. 

<img src="images/data-labels-corner-radius.png" width="700">