---
layout:             page
title:              Appearance
published:          true
date:               2021-11-20
modified:           2022-01-30
order:              /02/04
---
  
The Appearance properties group contains options related to the appearance of Smart Filter Pro. 

Let us have a look at these options one by one:  

## Border  
<div class="badge availability">All modes except Hierarchy</div>

**Default value:** On

This option, if enabled, draws a border outline for the input textbox or field area.  

<img src="images/appearance-border.png" width="600">  

## Border Color  
<div class="badge availability">All modes except Hierarchy</div>

This option defines the border color of the input textbox.  

<img src="images/appearance-border-color.png" width="600">

## Clear Button  
<div class="badge availability">Dropdown | Filter | Search mode</div>

**Default value:** On

This option, if enabled, displays a button inside every input control so as to clear all of the content/selected items in one go. This button is hidden and is visible only when you hover over the input box. 

<img src="images/appearance-clear.png" width="550">    

## Controls Color  
<div class="badge availability">All modes except Hierarchy</div>

This option defines the color of the interface controls of the visual, such as the dropdown arrow in Dropdown mode, the help button in Filter mode and so on.

<img src="images/appearance-controls-color.png" width="550">   


## Dropdown Back Color  
<div class="badge availability">Dropdown mode</div>

This option defines the background color of the dropdown list.  

<img src="images/appearance-dropdown-back-color.png" width="550">   

## Expand/Collapse Icon  
<div class="badge availability">Hierarchy mode</div>

**Default value:** Chevron

This option defines the appearance of the icon used for expanding/collapsing the nodes in a hierarchy tree. It provides three options to choose from:

- **Chevron**: This displays an arrow button for expanding/collapsing the nodes  

    <img src="images/appearance-expand-chevron.png" width="600">   

- **Plus/Minus**: This displays a plus/minus button for expanding/collapsing the nodes  

    <img src="images/appearance-expand-plus.png" width="600">   

- **Caret**: This displays a button in the form of small triangle for expanding/collapsing the nodes.

    <img src="images/appearance-expand-caret.png" width="600">   

## Filter Button   
<div class="badge availability">Filter | Search mode</div>

**Default value:** On

This option, if enabled, shows a button inside the input controls to apply the filter. In case this option is not enabled, the button is hidden and you can apply the filter by pressing the Enter key with Filter mode, or CTRL + Enter (Cmd + Enter on Mac) with Search mode.  

<img src="images/appearance-filter-button.png" width="550">  

## Font Family  

This option defines the font style of the filter items of the visual.  

<img src="images/appearance-font-family.png" width="550">    


## General Clear Button  
<div class="badge availability">Dropdown | Filter mode</div>

**Default value:** Off

This option, if enabled, displays a button to clear the contents of all input fields at the same time. This makes more sense when there are multiple fields connected to the visual, and you do not want to click on individual [clear buttons](#clear-button) in each input box to empty it. This button is visible only when you hover over the extreme right end of the visual.  

<img src="images/appearance-general-clear.png" width="550">   

## Help Button  
<div class="badge availability">Filter mode</div>

**Default value:** On

This option, if enabled, shows a button inside the input box to display a tooltip containing the available [query syntax](mode/filter#how-to-search) as per the field of the input box. The button is hidden and is visible only when you hover over the input box.  

<img src="images/appearance-help-button.png" width="550">    


## Horizontal
<div class="badge availability">Dropdown | Observer mode</div>

**Default value:** Off

This option defines the arrangement of the input controls when multiple fields are connected to the visual. If enabled, the controls are aligned horizontally, otherwise each control is positionated below the others.

<img src="images/appearance-horizontal-on-dropdown.png" width="600">   

<img src="images/appearance-horizontal-on-observermode.png" width="600"> 

## Input Back Color  
<div class="badge availability">All modes except Hierarchy</div>

This option defines the background color of the input textbox.    

<img src="images/appearance-input-back-color.png" width="550">  

The input back color has been purposely changed from white to dark grey for clear illustration.  

## Input Color  
<div class="badge availability">All modes except Hierarchy</div>

This option defines the font color of the input textbox. The color of the filter items is defined by a [different option](#items-text-color).  

<img src="images/appearance-input-color.png" width="550">    

## Items Back Color  
<div class="badge availability">Dropdown | Filter | Observer mode</div>

This option defines the background color of the filter elements in the visual.   

<img src="images/appearance-item-back-color.png" width="550">    

## Items Text Color  
<div class="badge availability">Dropdown | Filter | Observer mode</div>

This option defines the font color of the filter elements in the visual.   

<img src="images/appearance-fore-color.png" width="550">   

## Max Item Width  
<div class="badge availability">Dropdown | Filter | Observer mode</div>

**Default value:** 0

This option is used to set the maximum width of each filter items. 

<img src="images/appearance-max-width.png" width="550">   

> Set ***Max Item Width*** to 0 to automatically use all the required space.   

## Min Input Lines  
<div class="badge availability">Dropdown | Filter mode</div>

**Default value:** 1

This option is used to set the minimum height of the input textbox.

As you select multiple elements, the height of the visual automatically increases to accommodate the selection. Setting a value greater than 1 here forces the visual to be a specific number of lines tall. For example, if the elements you select span 2 lines and you put 3 as a minimum, the visual height will be 3 lines. However, if the elements span 4 lines, the height of the visual will be 4 lines.

<todo assign="daniele">Retake two screenshot spanning 2 and 4 lines.</todo>

> Set ***Min Input Lines*** to 0 to automatically fill the height of the visual.   

## Node Arrow Color  
<div class="badge availability">Hierarchy mode</div>

This option defines the color of the arrow icon used to expand/collapse the hierarchy tree nodes.  

<img src="images/appearance-node-arrow.png" width="550">  

## Node Checkbox Color  
<div class="badge availability">Hierarchy mode</div>

This option defines the checkbox color of the tree node items.   

<img src="images/appearance-node-checkbox.png" width="550">    


## Node Text Color  
<div class="badge availability">Hierarchy mode</div>

This option defines the font color of the tree node items.   

<img src="images/appearance-node-color.png" width="550">    

## Node Text Color (Hover)
<div class="badge availability">Hierarchy mode</div>

This option defines the font color of the tree node items on hover.  

<img src="images/appearance-node-hover-color.png" width="550">    

## Stepped Layout Indentation  
<div class="badge availability">Hierarchy mode</div>

**Default value:** 10

This option is used to choose the value for indentation where the subnodes are indented in a progression underneath the parent node in a hierarchy tree.  

For instance, if you choose this value to be a very low number say 3, then the subcategories in the visual dropdown will be placed almost right under the parent category.  

<img src="images/appearance-stepped-layout.png" width="550">   

## Text Size  

This option defines the font size of the items.  

<img src="images/appearance-text-size.png" width="550">   

## Tooltips  

<div class="badge availability">All modes except Search</div>

**Default value:** On

Enable this option to display additional information in the tooltips of each filter item of the visual.

<img src="images/appearance-tooltips.png" width="550">    

You can enrich the content of the toolips by connecting different measures to the ***Tooltips*** field of the visual.

<img src="images/appearance-tooltips2.png" width="550"> 

> For more information, see this article: [Customize tooltips in Power BI](https://docs.microsoft.com/en-us/power-bi/create-reports/desktop-custom-tooltips)

   

## Tree Controls  
<div class="badge availability">Hierarchy mode</div>

**Default value:** On

This option is used to show a toolbar with controls to expand/collapse the nodes, and clear the current selection in a tree. This toolbar is visible only on hover.  

<img src="images/appearance-tree-controls.png" width="550">   

For instance, let us say you have the fields ***Category*** and ***Subcategory***, and all of the parent categories are collapsed in the visual. Now if you wish to display all the subcategories of each parent category, then you can use the expand button to expand all the parent nodes in one go.    

<img src="images/appearance-tree-controls2.png" width="550">    

Similarly, if you wish to collapse all the nodes in one go, then you can use the ***Collapse all*** button to display only the parent categories.  

<img src="images/appearance-tree-controls3.png" width="550">    

The last button on the the right is used for clearing all the selections.

<img src="images/appearance-tree-controls4.png" width="550">   

## Word Wrap  
<div class="badge availability">Dropdown | Filter | Observer mode</div>

**Default value:** Off

The option allows you to break long words and wrap them in multiple lines. It is a word processing function that automatically transfers a word for which there is not enough space from the end of one line of text to the beginning of the next.

<img src="images/appearance-word-wrap.png" width="550">   

<img src="images/appearance-word-wrap2.png" width="550">   

## Word Wrap (Hierarchy)
<div class="badge availability">Hierarchy mode</div>

**Default value:** Truncate

The word-wrap option in Hierarchy mode allows you to choose how to display long node names in two ways:    

- **Truncate**: This truncates node names to keep them on one line and add the ellipsis at the end.   

    <img src="images/appearance-wordwrap-truncate-hierarchy-mode.png" width="450">  

- **Wrap**: This breaks node names across multiple lines in case the width of the visual is less than their length.  

    <img src="images/appearance-wordwrap-wrap-hierarchy-mode.png" width="450">   