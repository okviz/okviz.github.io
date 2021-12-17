---
layout:             page
title:              Filter Mode
menu_title:         Filter
published:          true
date:               2021-12-09
modified:           2021-12-16
order:              /02/03/02
toc_max:            3
internal:           filter
---
The Filter mode in Smart Filter Pro allows advanced data queries by defining conditions using wildcards, comparison, and logical operators. The filter conditions – one or more – are written with a simple syntax giving instant results. One can search for specific date intervals, for numbers smaller or greater than others, for strings within a piece of text, and so on. 

<img src="images/filter-mode-1.png" width="650">

By allowing advanced search conditions for filtering, the Filter mode helps refine your search and eliminate any restrictions on which elements in a column to filter. For instance, the filter semantic that can be applied to the dates allows the user to specify complex rules in filtering dates that are not possible to define using the default slicers.

The Filter mode is very useful when you are dealing with huge datasets, and loading all data in memory can be very expensive. The other modes (except [Search mode](search), which is similar to Filter mode) loads all the data in memory, so it can be slow in certain conditions. On the other hand this mode uses [a different approach that helps boost performance](#performance-boost) and load large datasets faster than ever.


## How to Search

Unlike the Dropdown mode, which only allows simple exact match queries, Filter mode supports advanced and powerful queries that you can you use to slice your data in a unique way.

The syntax available differs depending on the type of the field to the visual, so here are the options for each type:

### Text

The syntax for querying text fields includes rules for the most common uses, but keep in mind that the **search is always case insensitive**, this means that you can write keywords in any case and the matching algorithm won't rely on that.
           
- #### Containing
    You can perform a ***Containing*** search without using any special characters if the [Default Condition for Text](default-text-condition) is set to ***Contains***, otherwise you can use the wildcard characters ***\**** and ***?*** to define the part of the string you don't know or which can be anything. 

    The character ***\**** is used to define an unknow string of any length.   
    The character ***?*** defines a single unknown character.

    > You can use as many wildcards as you like and in any position with one exception: you can't put a wildcard at the beginning of a string if there isn't the same character also at the end - in other words, the ***Ends with*** search is not supported.

    For example:
    - `audio` returns all values containing ***audio*** if the default condition for text is ***Contains***, otherwise returns all values equal to ***audio*** (see [Exact matching](#exact-matching)).
    - `*audio*` returns all values containing ***audio***.
    - `aud*` returns all values starting with ***aud***.
    - `*udio` **is not supported** and won't return any results.
    - `a??io` returns values starting with ***a***, followed by two characters and ending with ***io***.

    <todo>Take a screenshot</todo>
- #### Exact matching
    You can perform a ***Exact match*** search without using any special characters if the [Default Condition for Text](default-text-condition) is set to ***Equal to***, otherwise you need to enclose your keyword in double quotes.

    For example:
    - `audio` returns all values equal to ***audio*** if the default condition for text is ***Equal to***, otherwise returns all values containing ***audio*** (see [Containing](#containing)).
    - `"audio"` returns all values equal to ***audio***.

    <todo>Take a screenshot</todo>

- #### Not containing/Not matching

   You can exclude a particular value from the results by prefixing the character ***!*** to your keyword.  
   You can combine this with the other rules to create an advanced query.

    > The NOT condition is quite limited - **you cannot add more than 20 keywords with NOT** in the same query.

   For example: 
   - `!audio` returns all values except those that include ***audio*** if the [Default Condition for Text](default-text-condition) option is ***Contains***, otherwise returns all values the ones equal to ***audio***.
   - `!*audio*` returns all values except those that include ***audio***.
   - `!aud*` returns all values except those starting with ***aud***.
   
   <todo>Take a screenshot</todo>


### Dates

<todo>TODO</todo>

### Numbers

<todo>TODO</todo>

> The syntax provided here is also available for the Search mode. Learn more about the [differences between Filter and Search modes](search#differences-between-search-and-filter-modes).

## Performance Boost

One of the main advantages of the Filter mode is the performance boost it offers. The Dropdown, Observer, and Hierarchy modes load all the items in memory, regardless of the filters applied by the user. **The Filter mode is faster as it doesn't load the values at all, but only applies a filter to the report.** 

> In Dropdown, Observer, and Hierarchy modes, data is loaded incrementally when the visual is rendered and whenever a filter is applied to the report from any other visual. This means that clicking on any chart to slice the data in the report reactivates the process and could take many seconds to complete, depending on the amount of rows in the column.

The performance boost is more evident when we use a high cardinality column – a column that displays multiple distinct values – for filtering data. For instance, let us say you use the Dropdown mode and select ***Order Number*** – a high cardinality column – from the ***Sales*** table. 

<todo>Take a screenshot of the example</todo>

When you start typing order numbers in the textbox, the order numbers do not appear as immediately as they would for a column which is not a high cardinality column – ***Product Category***, for example.  Thus, the result set loading time is longer in Dropdown mode.

Moreover, loading many items in the visual increases the memory consumed, potentially creating performance issues for other applications running on the same machine. While in Filter mode, the values are not loaded at all; a filter is applied to the report so that the data that does not fit the filter rule is not loaded at all. In these conditions, the user experience is better with the Filter mode as it uses less system memory. 

## No Data Limits

Another benefit of Filter mode is that there are no limits on the volume of the dataset it can filter, because it doesn't load data into memory and therefore the common [limits set by Power BI](https://docs.microsoft.com/en-us/power-bi/developer/visuals/fetch-more-data#known-limitations-of-fetchmoredata) don't apply here. The other modes (except Search mode), on the other hand, cannot load more than **1,048,576 rows** and cannot exceed more than **100 MB of memory**.


## Options

On selecting the Filter mode, the options available are:
- [Consolidate Fields](consolidate-fields)
- [Default Condition for Text](default-text-condition)
- [Empty when no Selection](empty-when-no-selection)
- [Keywords Operator](keywords-operator)
- [Single Selection](single-selection)
- [Split Pasted Text by](split-pasted-text)