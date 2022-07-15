---
layout:         page
title:          Data labels
published:      true
date:           2022-07-07
modified:   	2022-07-14
order:          /3/data-labels
---

**Default value:** Off

<todo> Define how default value are displayed when related to 'show' sections' option </todo>

When enabled, this options' section displays data labels and allows to edit their appearance.

## Font family

**Default value:** Segoe UI

This option specifies the font used to display the data labels

## Text size

**Default value:** 9px

Defines the size of the font used to display the data labels

## Color

Specifies the color of the text for the data labels

## Display unit

**Default value:** Auto

This option defines the display unit for the data labels – in Thousands, Millions, Billions,etc.  

> Use *Auto* to display the most relevant display unit for each value depending on how big the number is.   

## Value decimal places

**Default value:** Auto

This option defines the number of decimal places for the value of data labels. 

> Use *Auto* to display the most relevant decimal places for each value depending on the total number of decimal places each value has.

## Position 

**Default Value:** Auto

> This is a **Premium option**. More information about premium options can be found here: [Premium](../../general/premium.md)

Allows to specify the position of data labels relative to the bars. The following positioning options are available:

- **Auto:** if there is enough space at the end of the bar, data label is placed outside the bar, otherwise it is placed inside-end. 

    <img src="../images/.png" width="400">

- **Inside end:** the label is placed inside, at the end of the bar. If the bar is not large enough to contain the label it will not be displayed 

    <img src="../images/.png" width="400">

- **Outside end:** the bar size is reduced to allow the label to be displayed outside.

    <img src="../images/.png" width="400">

- **Inside-center:** the label is placed in the middle of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="../images/.png" width="400">

- **Inside-base:** the label is placed inside, at the base of the bar. If the bar is not large enough to contain the label it will not be displayed.

    <img src="../images/.png" width="400">

## Overflow

**Default Value:** On

When active, this option will always keep data labels visible regardless of the size of the bars. If set to **Off** instead automatically hides the data labels when they are wider than the bars.

<todo> Add 2 screenshots, with and without overflow </todo>




    

