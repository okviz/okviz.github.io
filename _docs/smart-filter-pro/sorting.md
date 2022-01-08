---
layout:             page
title:              Sorting
published:          true
date:               2021-11-20
modified:           2022-01-08
order:              /02/07
version:            2.1.1
---

The *Sorting* properties group allows you to choose how to sort the items of the field used for filtering in Smart Filter Pro. The *Sorting* properties group is not available for the Search mode.  It offers two sorting methods to choose from: *Default*, and *Custom*. 

The *Default* method is the one used by most Power BI visuals. You click on the visual header ellipsis button and choose a field/measure to sort by in ascending or descending order.   

<img src="images/SortingDeafult1.png" width="850">   

However, this method doesn’t work well when you have multiple fields or have values, because built-in sorting allows to choose a single field as the sort column. Let us say you have 2 fields: Category & Sales. You want to sort the category in ascending order and the sales in descending order. This is not possible with the default sorting, thus the *Custom* sorting method comes in. The *Custom* method allows to define a different sort order for each field.   

This property can be well illustrated by selecting the Observer mode. Suppose you have Category as the input category field, and Sales Amount is selected as *Values* in Smart Filter Pro.   

<img src="images/Sorting2.png" width="650">   

Now if you choose the *Custom* sort method, then you will get a list of sort options to choose from:  

<img src="images/Sorting3.png" width="700">   

<img src="images/Sorting4.png" width="700">  

*Sort ascending*, and *Sort descending* will alphabetically sort the categories. Whereas, *Sort by value ascending*, and *Sort by value descending* will sort the categories according to their values – sales metrics in this case.   

For instance, let us say you select *Sort descending*, then the categories in the input box will be displayed in descending order alphabetically.    

<img src="images/Sorting5.png" width="650">   

If *Sort by value descending* is chosen, then the categories in the input box will be displayed in descending order of their sales. 

<img src="images/Sorting6.png" width="700">    

In case there is more than one field in Smart Filter Pro, then the *Custom* sort method even allows to choose a different sort order for different fields. For instance, suppose you have Brand and Category as the input fields, and Sales Amount is selected as *Values* in Smart Filter Pro. Now if you wish to sort the Brand field alphabetically in ascending order, and the Category field by value in ascending order, then you can choose the *Custom* sort method, and required sort order for each field from the field dropdowns.  

<img src="images/Sorting7.png" width="750">  

As you see in the example above, *Custom* sort method has been chosen, and the field Brand is sorted alphabetically in ascending order, whereas the field Category is sorted by value in ascending order.



<todo assign="daniele">Differences between builtin and custom sorting</todo>