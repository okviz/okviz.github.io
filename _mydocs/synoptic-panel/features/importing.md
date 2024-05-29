---
layout:             page
title:              Importing Multiple Maps
menu_title:         Importing Maps
published:          true
date:               2024-05-26
modified:           2024-05-29
order:              /synoptic-panel/features/importing
---

Synoptic Panel allows you to import multiple maps at once. This feature is particularly useful when you have hundreds of maps to import and you want to save time.

**Note that this feature is available only with remote maps;** you won't be able to import multiple local maps at once.

## How to Import Multiple Maps

To import multiple maps into Synoptic Panel, follow these steps:

1. Add the visual to your report as specified in the [Getting Started](../get-started/index.md) section.

2. Click ***+ Add Map*** and select the ***Import URLs*** element.

    <img src="images/import-urls.png" width="200">

    If you have already loaded a map, you can click the ***+ Add*** button in the Map Editor dialog.

3. Select the JSON file containing the list of maps you want to import (see below).

## Import File Specifications

To automatically import multiple maps in Synoptic Panel, you need to provide a JSON file containing a list of map URLs, plus some additional information for each file. The JSON must have the following structure:

```json
[
    {
        "url": "https://example.com/map1.svg",
        "name": "Map 1",
        "mapSelector": "Store1",
        "drillPath": ["Category"]
    },
    {
        "url": "https://example.com/map2.svg",
        "name": "Map 2",
        "mapSelector": "Store2",
        "drillPath": ["Category", "Sector"]
    },
    ... // Other maps
]
```

Here is a description of the fields:

- **url**: The URL of the map file.
- **name**: *(Optional)* The name of the map. This is the name that will be displayed in the visual. If not provided, the name of the file will be used.
- **mapSelector**: *(Optional)* The value of the column bound as map selector. This is the column that will be used to switch between the maps. See more in the [Filtering Maps](../features/filtering-maps.md) section.
- **drillPath**: *(Optional)* This is an array of values used to build the **Drill Path**, which represent the drill level of the visual. This is a useful way to quickly assign different maps to different levels, but requires to know the exact values of the drill path components. See how the drill path is built in the [Drill Mode](/drill-mode.md#the-drill-path) section.
 If not provided, each imported URL will be assigned to the current drill level.

    > Note the Drill Path is displayed as a breadcrumb in the visual header. To define the `drillPath` value for the import file, you need to concatenate the single elements of the breadcrumb in the same order as they appear in the visual.  
    E.g. `Category > Sector` becomes `["Category", "Sector"]`.