---
layout:             page
title:              Importing Maps
published:          true
date:               2024-05-26
modified:           2025-01-22
order:              /synoptic-panel/features/importing
---


You can import various type of maps in Synoptic Panel. Depending on map type, the import process — whether for a single map or multiple maps — may vary slightly. However, in each case, the procedure is straightforward. Below is a detailed description of the process.

## Before Importing

First of all, connect the visual to the report if you have not done so already. Refer to the [Getting Started](../get-started/index.md) section for detailed instructions. Then connect a field to the [Category](./../fields/categories.md) field well. This is essential because each map is linked to a specific column (or hierarchical level) identifier, referred to as the [Drill Path](./../features/drill-mode.md#the-drill-path). 

There are different ways to load maps into the Synoptic Panel visual, depending on the current condition of the visual:

- **The visual has no maps connected or there are no maps connected to the current drill path**. You can directly click the ***Add Map*** button within the visual and choose the type of map you want to import. 
When **no maps are connected**, the ***Add Map*** button is located at the center of the visual. However, if **no maps are connected to the current drill path**, the button is positioned in the top-left corner. Once the maps are loaded, the [Map Editor](../features/map-editor.md) will open automatically.

- **The current drill path already has a map connected**. You need to click on ***pencil icon*** in the visual [Toolbar](./toolbar.md), which will open the [Map Editor](../features/map-editor.md) In the Map Editor, you can click the ***+ Add*** button and choose the type of map you want to import. 

## Import Local Maps

If you have not yet connected the visual to your report, you can read how to start [Before Importing](./importing.md#before-importing).

To import local map(s) into Synoptic Panel, follow these steps:

1. Click ***+ Add Map*** and select the ***Local Map*** element.

    <img src="images/import-local.png" width="250">

    If you have already loaded a map, you can click the ***+ Add*** button in the Map Editor dialog or drag and drop the files directly into the [Map List](../features/map-editor.md#map-list).

2. Select one or more files from your local machine.

<todo>Screen cast of adding local maps from map editor in both way</todo>

Always keep in mind that **Local maps** are stored within the Power BI report file, meaning they are only accessible in the report where they were imported. Additionally, they are subject to [Size Limitations](#size-limitations).

>> Note that [Synoptic Panel with free license](../versions/index.md) has a limit of 1 local map per visual.

## Import a Remote Map

If you have not yet connected the visual to your report, you can read how to start [Before Importing](./importing.md#before-importing).

To import a remote map into Synoptic Panel, follow these steps:

1.  Click ***+ Add Map*** and select the ***Remote Map*** element.

    <img src="images/import-remote.png" width="250">

    If you have already loaded a map, you can click the ***+ Add*** button in the Map Editor dialog.

2. Enter the URL of the map and click ***Ok***.

For adding multiple URLs, refer to the next [Import Remote Maps from a JSON File](#import-remote-maps-from-a-json-file) section.


<todo>Screen cast of adding remote maps from map editor in both way</todo>

It is important to note that the URL must point directly to the SVG file and be **publicly accessible from the client**. This means the file should be hosted on a server that allows direct access without authentication or other restrictions. Additionally, popular cloud storage services like Google Drive, Dropbox, and OneDrive cannot be used due to Cross-Origin Resource Sharing (CORS) restrictions, which prevent the visual from accessing files hosted on external platforms.

>> Note that [Synoptic Panel Lite](../versions/index.md) does not support this feature.

## Import Remote Maps from a JSON File

>> Note that [Synoptic Panel Lite](../versions/index.md) does not support this feature.

If you have not yet connected the visual to your report, you can read how to start [Before Importing](./importing.md#before-importing).

To import multiple remote maps into Synoptic Panel, follow these steps:

1. Click ***+ Add Map*** and select the ***Import URLs*** element.

    <img src="images/import-from-json.png" width="250">

    If you have already loaded a map, you can click the ***+ Add*** button in the Map Editor dialog.

3. Select the JSON file containing the list of maps you want to import (see below).

<todo>Screen cast of adding remote maps from map editor in both way</todo>

### Import File Specifications

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

<todo>Provide a sample JSON file with links to our Github repo base on Synoptic Panel tour</todo>

##  Import My Storage Maps

If you have not yet connected the visual to your report, you can read how to start [Before Importing](./importing.md#before-importing).

To import map from [My Storage](./../features/my-storage.md) into Synoptic Panel, follow these steps:

1.  Click ***+ Add Map*** and select the ***My Storage Map*** element.

    <img src="images/import-my-storage.png" width="250">    

    If you have already loaded a map, you can click the ***+ Add*** button in the Map Editor dialog.

2. Select one or more maps available from your storage map list.

3. Click ***Add Selected*** to import the map(s) into the visual.

>> Note that only [Synoptic Panel with OKVIZ license](../versions/index.md) supports this feature.

## Replace Map(s)

<todo> </todo>

## Size Limitations

To avoid performance issues, there are some limitations on the size of the map(s) that can be imported into Synoptic Panel:

- The **maximum size of a map** is 10 MB.

- The **maximum total size of all local maps** is 20 MB.

- When importing multiple files from local machine, the **total size of all files must not exceed 20 MB**.

If some of the above limits are exceeded, the visual will display an error message and the map will not be loaded. If your map is too large, see the [Best Practices](../concepts/best-practices.md) section for tips on how to optimize your map.