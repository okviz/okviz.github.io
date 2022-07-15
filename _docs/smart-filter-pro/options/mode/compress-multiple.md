---
layout:             page
title:              Compress Multiple
published:          true
date:               2021-12-15
modified:           2021-12-15
order:              /smart-filter-pro/options/mode/compress-multiple
toc:                false
internal:           compressMultiple, compressMultipleAfter
available:          Dropdown mode
version:            2.2.0
---
**Default value:** Off

This feature shows a single item in the input box instead of displaying multiple items for every filter applied in the input box. It works in Dropdown mode when two or more items of a field are selected. This displays a shorter compressed description of the field name along with the number of items selected in the input box. The selected items will be highlighted in the dropdown list.

<img src="images/compress-multiple-1.png" width="600">

For instance, if you select three items of the field ***Category***, then the input box will display ***Category (3)*** as the description, and the selected items will be visible and highlighted in the dropdown list. 


This feature can be useful if you have limited space, and you can choose to compress the height of the input box by keeping your selected keywords inside the dropdown list. 
  
## Min Items before Compressing

**Default value:** 1

This option allows you to set the number of selected filter items to be displayed in the input box before compressing the field as specified by the ***Compress Multiple*** option. 

<img src="images/compress-multiple-2.png" width="600">

For instance, let us say you set this value to 3, so until you select less than or equal to three items for filtering, those three selected items will be displayed in the input box which is the usual behavior.

<img src="images/compress-multiple-3.png" width="600">

As soon as you select more than three items for filtering, the field will be compressed and the input box will display a shorter compressed description of the field name along with the number of items selected. 
