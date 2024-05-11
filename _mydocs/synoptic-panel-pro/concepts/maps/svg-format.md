---
layout:             page
title:              SVG Format
published:          true
date:               2024-05-10
modified:           2024-05-11
order:              /synoptic-panel-pro/concepts/maps/svg-format
next_reading:       true
---
The SVG (Scalable Vector Graphics) format is a widely used format for vector graphics. It is a text-based format that describes the paths of the shapes in the image. The SVG format is supported by all modern browsers and is the format used by Synoptic Panel Pro to render the maps. [Learn more about SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

## Editing SVG Files

Since SVG files are very similar to HTML, you can edit them with Any area text editor such as *Visual Studio Code* or *Notepad*. This is useful when you need to make small adjustments to the SVG file to enable specific Synoptic Panel Pro features. For more complex changes, you should use a vector graphics editor like *Adobe Illustrator* or *Inkscape*.

```xml
<!-- A sample SVG with a circle shape -->
<svg>
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```
<svg height="120" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

There are cases when you will need to edit the SVG file directly, such as when you want to:
- Link an element of your map to a specific data point. This can be done by setting the `id` attribute of a SVG element to the target datapoint value. See more on [Data Binding](../data-binding.md).
- Add a custom attribute to change the behavior of the map or unlock additional features in Synoptic Panel Pro.

> Note that any features that can be set by editing the SVG file directly can also be set in the Synoptic Panel Pro user interface. However, using custom attributes can save time and avoid errors, and is especially useful when you using [remote maps](../../features/maps-location/remote.md) or generating maps programmatically.

In the example below, `data-okviz-svg-title` is a custom attribute used to define the title of the map as it will appear in Synoptic Panel Pro.

```xml
<!-- A sample SVG with a custom attribute -->
<svg data-okviz-svg-title="My Awesome Circle">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

<img src="images/svg-title-attribute.png" width="600">


## Attributes Reference

Here is a list of relevant attributes for Synoptic Panel Pro:

<style>
table td:first-of-type code { /* Attribute */
    white-space: nowrap;
}
table th:nth-of-type(2) { /* Target */
    width: 110px
}
</style>

|Attribute                  |Target                 |Description|
|---                        |---                    |---|
|`id` *                      |Any shape or group     |*(String)* The unique identifier of the element. This attribute can be used to [automatically bind the element to a datapoint](../data-binding.md).  |
|`data-okviz-unbound`       |Any shape or group     |*(Boolean)* Excludes the element from the [Data Binding](../data-binding.md).|
|`data-okviz-strong`        |Any shape or group     |*(String)* Forces the element to bind to a specific datapoint, regardless of its id. See [Data Binding](../data-binding.md).|
|`data-okviz-category-label`|Any shape or group     |*(String)* It is used to designate the element to display the datapoint name when [category labels](../../options/category-labels/index) are enabled. The value of the attribute must match the datapoint following the same rules as the `id`. |
|`data-okviz-value-label`   |Any shape or group     |*(String)* It is used to designate the element to display the datapoint value when [data labels](../../options/data-labels/index) are enabled. The value of the attribute must match the datapoint following the same rules as the `id`.|
|`title`                    |Any area               |*(String)* The tooltip of the element. Note that is used only if the element is an [area](#areas).|
|`data-okviz-target-url`    |Any area               |*(String)* It must contain the URL of a remote SVG map. With this attribute you can automatically load a different remote map when drilling down on the area. More on the [Drill Mode](../drill-mode.md) section.|
|`data-okviz-svg-title`     |`<svg>`                |*(String)* It is used to define the title of the map as it will appear in Synoptic Panel Pro.|
|`data-okviz-svg-author`    |`<svg>`                |*(String)* It is used to show the map author name in the visual.|
|`data-okviz-svg-copyright` |`<svg>`                |*(String)* It is used to show the map copyright in the visual.|
|`data-okviz-autofetch`     |`<svg>`                |*(Boolean)* Enables the [autofetch mode](../data-binding.md#autofetch).|
|`data-okviz-map-selector`  |`<svg>`                |*(String)* Defines a [map selector](../../features/filtering-maps.md) for the current map.|

> **Important notes** on the `id` attribute:
- The `id` must be a valid XML ID, which means it must start with a letter or underscore (`_`), followed by letters, digits, hyphens, underscores, colons, and periods. Spaces are also allowed, but not recommended.
- The value of the `id` must be unique within the SVG file, as defined by the SVG specification. If you have multiple elements with the same `id`, all the elements will be linked to the same data point. Although this could be useful in some cases, it is generally recommended to use unique `id` values for each element and to use the `data-okviz-strong` attribute (or the [Map Editor](../../features/map-editor.md)) to force the binding to a specific data point.
- Datapoint matching can be configured to be more or less strict (e.g. case insensitive) with a [specific setting](../../options/advanced-settings/data-binding-mode.md). This means that, with proper configuration, the `id` does not have to match the datapoint exactly, but it must be close enough to be considered a match.

### Shapes

Shapes are the basic elements of an SVG file. They can be used to define [areas](#areas) in the map. These elements include `<circle>`, `<ellipse>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, or `<rect>`.

### Groups

Groups are used to group multiple shapes together. They can be used to define [areas](#areas) in the map. The `<g>` element is used to create groups.

### Areas

In Synoptic Panel Pro, an area is a shape or group of shapes that has been linked to a specific data point. You can "transform" an SVG element into an area by setting the element `id`, set the `data-okviz-strong` attribute, or assign the element to a datapoint through the [Map Editor](../../features/map-editor.md). Areas can be highlighted, colored, or labeled based on the underlying data, allowing interactivity and drill-down capabilities. This concept is further explained in the [Data Binding](../data-binding.md) section.