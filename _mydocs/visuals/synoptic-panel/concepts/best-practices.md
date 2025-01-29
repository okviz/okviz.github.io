---
layout:             page
title:              Best Practices
published:          true
date:               2024-10-02
modified:           2025-01-29
order:              /synoptic-panel/concepts/best-practices
next_reading:       true
draft:              true
---

<todo> Add screenshot </todo>

By adhering to these best practices, you will improve both the functionality and performance of your maps within Synoptic Panel, leading to a better user experience and easier data management.

## Building SVGs for Synoptic Panel

To ensure your [SVG](./../concepts/maps/svg-format.md) maps work seamlessly with Synoptic Panel and maintain optimal performance, follow these best practices:

1. **Avoid Bitmap Images**

    Preferably, do not include bitmap images in your SVG. If necessary, optimize bitmap images to reduce file size. Use external compression tools to minimize the embedded bitmap in your map or reduce the [Image Quality](../options/advanced-options/performance.md#image-quality) setting in the visual options before importing the SVG. 


2. **Reduce Complexity and Size**

	- Element Count: large and complex SVGs, especially those containing thousands of elements, can negatively affect rendering speed and performance in Synoptic Panel.

	- Simplify Shapes: To reduce complexity, simplify paths and remove unnecessary elements like extra nodes or detailed gradients.

	- Split Complex Maps: If your SVG is too complex or has a large file size due to an excessive number of elements, consider splitting the image into two or more separate maps. When splitting the map, organize your dataset accordingly.

3. **Simplify Grouping and Avoid Overlapping Areas**

	- Minimize Nested Levels: if your SVG contains elements nested across multiple levels, aim to reduce the number of levels as much as possible. Simplifying the structure helps improve performance and reduces potential issues with data binding and interaction.

	- Avoid Overlapping Areas: overlapping elements should be avoided, since may hinder user interaction, making it difficult to select and work with specific areas.

    - Group Data Binding Considerations: when a group of elements is bound to a data point all child elements of that group will inherit the same data binding value. For further details on how group bindings work, refer to the Data Binding Section.

4. **Ids Assignment**

    - Always assign valid [`id`](./../concepts/maps/svg-format.md#id-attribute) to each area in your SVG map before importing it. This is crucial for proper data binding and interaction in Synoptic Panel.

    - Avoid Duplicate Ids: ensure that each `id` is unique within the SVG file to prevent conflicts and unexpected behavior. If you have multiple elements that should be linked to the same data point, see 
    how to [bind multiple areas to the same data point](./../concepts/data-binding.md#linking-multiple-areas-to-the-same-data-point]

	- Maintain Consistent Ids: when updating or replacing an SVG map, ensure that the `id` attributes of existing areas remain consistent to preserve the data binding. Note that the [Auto Id Assignment](./../features/auto-id-assignement.md) process could affect both the uniqueness and consistency of IDs, potentially resulting in unexpected behavior if the map is replaced or modified.

## Performance & Limits

Structuring the data effectively, you can ensure smoother performance and a more efficient use of Synoptic Panel’s capabilities.

1. **Row Limits and Performance** 

    Synoptic Panel supports **Incremental Loading** to handle large datasets, but keep in mind that retrieving more than 30,000 rows may slow down the entire report. To ensure optimal performance, it is advisable to filter and reduce the number of rows as much as possible.

2. **Power BI Limits**

    It is important to note that retrieving all available data is not guaranteed due to certain Power BI limitations: 
    - The total row count is capped at 1,048,576 rows.
    - The memory size for visual data is restricted to 100 MB.

3. **Organize Data for Large Maps**

    When working with large or complex maps, organize your data effectively:
    - Categories and Hierarchy: Assign different categories to distinct map sections or use hierarchical drill paths to divide the data logically.
    - Filter Data: Ensure that only relevant data points are retrieved for each map to minimize load times and maintain responsiveness.

4. **Data Labels Limit**

    Synoptic Panel allows you to define the [Max Label To Show](./../options/advanced-options/performance.md#max-labels-to-show) on the map. The default limit is 1,000 labels, because displaying too many labels may negatively impact rendering performance, so it is recommended to stay within this limit or test progressively by increasing the limit while monitoring the visual’s responsiveness. Alternatively, you can use the [Label Designer](./../features/label-designer.md) tool to selectively display the most important labels and hide the less critical ones.


## Map Management

When organizing your maps, it is essential to consider their impact on report performance. ***Local Maps*** are stored within the Power BI report file, which means they consume memory and are subject to [Size Limitations](./../features/importing.md#size-limitations). 

That is why generally recommended to avoid using too many Local Maps as this can significantly slow down the report and affect its overall responsiveness. Instead, you should leverage [Remote Maps](./../features/importing.md#import-a-remote-map) or [My Storage Maps](./../features/importing.md#import-my-storage-maps) to reduce the memory load on the report file.

If you are using [My Storage](./../features/my-storage.md), always follow the best practices for [Security](./../security/my-storage.md) to ensure that your maps are stored and accessed securely.