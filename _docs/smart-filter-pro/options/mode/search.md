---
layout:             page
title:              Search Mode
menu_title:         Search
published:          true
date:               2021-12-09
modified:           2021-12-16
order:              /02/03/03
internal:           search
version:            2.1.6
---
Search mode is the simplified version of the [Filter mode](filter.md). This working mode is faster and easier to use. It allows entering or pasting a long list of values and dynamic searching without sacrificing the overall performance. The Search mode allows to apply filters even automatically on typing.

<img src="images/search-mode.png" width="600">

The Search mode supports multiple fields, like the other modes, but only allows you to search for one field at a time. In case you connect multiple fields, a drop-down menu appears at the top of the visual from which you can select the field to search for.

<img src="images/search-mode-manycategories.png" width="550">


## How to Search

The search is performed in the same way and with the [same syntax available in Filter mode](filter.md#how-to-search), with the difference that the syntax here can be limited to a simplified version using the option [Matching](search-matching.md), consisting of a case-insensitive exact match search.

## Differences between Search and Filter Modes

The Search and Filter modes share the same filter engine, the same query syntax and both allow you to change the logical operators/matching behavior either statically or interactively - the main differences concern the user interface. 

The unique features of the Search mode are:

- Makes it easy to enter **multi-line text** easier thanks to its large text area.
- Supports **pasting of thousands of values** simultaneously without sacrificing overall performance.
- **Does not transform the entered text into keywords** that you can only remove, but leaves it as is allowing for quick editing.
- Can **search as you type**, speeding up the whole process (see [Search on Event](search-on-event.md)).

## Options

On selecting the Search mode, the options available are:
- [Empty when no Selection](empty-when-no-selection.md)
- [Matching](search-matching.md)
- [Keywords Operator](keywords-operator.md)
- [Search on Paste](search-on-event.md#search-on-paste)
- [Search on Typing](search-on-event.md#search-on-typing)
- [Split Text by](split-text.md)