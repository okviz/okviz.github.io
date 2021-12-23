---
layout:             page
title:              Split Pasted Text by
menu_title:         Split Pasted Text
published:          true
date:               2021-12-15
modified:           2021-12-15
order:              /02/03/99/split-pasted-text
toc:                false
internal:           delimiterForPasting
available:          Dropdown | Filter mode
---
**Default value:** Space

Smart Filter Pro supports pasting text from other applications like Excel, Word or simple text editors.

This option allows you to choose a special character which can be used as separator to split the pasted text into multiple keywords. It is more relevant in case multiple items are to be selected for filtering one or more fields, and can save effort on typing.

For instance, let us say you have a report with Smart Filter Pro connected to a sales category field and want to see the sales of a list of categories that you have stored in a comma-separated string (CSV), like this:

`desktops, televisions, laptops, monitors, movie DVD`

In order to quickly apply the filter, you can copy the string, choose ***Comma*** as the character used by the ***Split pasted text by*** option, and right click/Paste (or Ctrl+V or Cmd+V on Mac) in Smart Filter Pro. This will apply filter with these categories showing the desired result. 

<img src="images/split-pasted-text.png" width="850">

> Note that if the values extracted from the pasted string are not available in the dataset, they are simply stripped off - this means that only the matching values are actually pasted into the visual.

Other than ***Comma***, the characters you can use as separators are ***Space***, ***Semicolon***, ***Vertical bar***, ***Carriage return***. You can disable this feature by selecting ***Don't split***. 

## Pasting from Excel

To paste values from an Excel worksheet you need to choose ***Carriage return*** as delimiter character.

<todo assign="twinkle">Pasting from Excel is the most requested feature among end-users. We need a detailed example with an Excel worksheet.</todo>