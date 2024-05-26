---
layout:             page
title:              Get Started
published:          true
date:               2024-05-10
modified:           2024-05-10
order:              /synoptic-panel-pro/01

---
In this section, you will learn how to install and use Synoptic Panel Pro in a Power BI report. This is a quick guide to get you started; for more detailed information, refer to the [Concepts](../concepts/index) and [Features](../features/index) sections.

## Installation

1. Open a new report on Power BI Desktop or [Power BI Service](https://app.powerbi.com).

2. Import the visual into your report:
            
    - For **beta users**:
        - Follow the instructions in the email that you have received from OKVIZ.

    - In case you have purchased a license directly **from OKVIZ:**
        - Import the visual file (.pbiviz) that you have received by email as [explained here](../../get-started/installation#from-a-file).
    
    - In case you have purchased a license **from AppSource**:
        - Import the visual by searching for *"Synoptic Panel Pro"* or *"okviz"* in the AppSource marketplace, as [explained here](../../get-started/installation#from-appsource).


3. Drag and drop the visual on the report canvas.

    <todo>Icon screenshot</todo>

## Load a Map

4. Before you can use the visual, you need to bind at least a column to the ***Categories*** data role.

    <todo>Binding screencast</todo>

5. After you doing so, you will see a simple grid containing a few records from the column you have just bound. This is a non-fully functional placeholder that will be replaced by the actual map once you have configured it ([what are maps?](../concepts/maps/index)). To proceed, click on the ***+ Add Map*** button.

    <todo>Screenshot</todo>

6. You can choose the map from [different locations](../features/maps-location/index.md). For this time, click on ***Browse*** to select an SVG image from your local computer.

    <todo>Screenshot</todo>

    > Don't have a map yet? Download a sample one from our [maps repo on Github](https://github.com/okviz/synoptic-panel-maps).

7. Once you have selected a map, click the ***Done*** button to close the dialog and see the map in the visual.

8. At this point, some areas of the map may be highlighted in different colors. This happens when  automatic binding is applied. **Automatic binding** is a feature that tries to match the `id` of the map elements with the values of the column you have bound to the ***Categories*** data role. If the matching is successful, the areas become interactive, can be colored, and can display labels and tooltips. If the match is not successful, the areas are colored by default with a grayscale color (but you can choose to use the original color if you wish).

    See more in the [Data Binding](../concepts/data-binding.md) section.

    <todo>Screenshot</todo>

## Adjust the Binding

If the automatic binding is not working as expected, you can adjust it manually. To do so, click on the pencil button in the visual toolbar to open the **Map Editor**.

<todo>Screenshot</todo>

Through the Map Editor, you can change the automatic binding settings of every shape of the map, choosing to force the binding to a specific value or to disable it. Also, you can add additional data to the map, such as area titles and map metadata.

See more in the [Map Editor](../features/map-editor.md) section.

## Add Values

The main purpose of Synoptic Panel Pro is to visualize data on the map. To do so, you need to bind one or more measures to the visual:

- Bind a measure to the ***Value*** data role to color the areas of the map based on that measure or to display its values as labels over the areas.

    <todo>Screenshot</todo>

- Bind one or more measures to the ***Tooltips*** data role to display them as tooltips when hovering over the map areas.

    <todo>Screenshot</todo>

- Bind additional measures to the ***Color Rules*** data role to define a different field for advanced map coloring. See more in the [Color Rules](../features/color-rules.md) section.

## Next Steps

Now that you have a working visual you can start customizing it and exploring the advanced features of Synoptic Panel Pro. For example, you can:

- Customize the visual appearance by changing the colors, the fonts, or the position and visibility of labels. See more in the [Options](../options/index) section.

- Add multiple levels to your visual to create a browsable hierarchy of maps. See more in the [Drill Mode](../features/drill-mode.md) section.

- Connect the maps to a specific measure to create a dynamic map that changes based on the actual report filter. See more in the [Filtering Maps](../features/filtering-maps.md) section.

- And much more!