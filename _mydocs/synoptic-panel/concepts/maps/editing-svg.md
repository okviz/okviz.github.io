---
layout:             page
title:              Editing SVG Files
published:          true
date:               2024-05-26
modified:           2024-05-26
order:              /synoptic-panel/concepts/maps/02
next_reading:       true
---

SVG files can be edited using various tools, such as graphic design software or text editors. This page provides an overview of the different methods to edit SVG files for use in Synoptic Panel.

## Editing with a Graphics Editor

SVG files can be created using graphics editors, such as *Adobe Illustrator* or *Inkscape*. These tools allow you to create complex shapes, paths, and groups, and to apply styles and effects to the elements of the map.

When creating an SVG file for use in Synoptic Panel, it is important to follow some guidelines to ensure that the map is correctly rendered and that the areas can be linked to the data points:

- **Layer names must be unique**: Each layer in the SVG file must have a unique name. This name is used to identify the layer in the Synoptic Panel visual, indeed it is the `id` attribute of the element. If you don't use unique names, the editor will automatically rename the layers to make them unique under the hood and it could lead to unexpected results. 

    <figure>
        <img src="images/illustrator-layers-panel.png" width="250">
        <figcaption>Adobe Illustrator layers panel</figcaption>
    </figure>
    
    > If you are using the same name because you want to link multiple areas to the same data point, you can use the `data-okviz-strong` attribute or the [Map Editor](../../features/map-editor.md). Otherwise, you can group the elements and assign the desired name to the group.

- **Keep layer names**: When you save the SVG file, make sure that the layer names are kept. This recommendation is relevant when you export optimized SVG files from tools like *Adobe Illustrator*, which may remove the layer names or rename them to reduce the file size.

- **Save styles as inline**: When saving the SVG file, make sure that the styles are saved as inline styles and not as classes. This is important to ensure that the visual settings are correctly applied to the elements of the map.

    <figure>
        <img src="images/illustrator-svg-export-settings.png" width="450">
        <figcaption>Adobe Illustrator SVG export settings</figcaption>
    </figure>

- **Avoid setting custom attributes before using a graphics editor**: Usually, the [custom attributes](svg-format.md#custom-attributes) supported by Synoptic Panel are not kept when you open and save the SVG file in a third-party graphics editor. For this reason, it is recommended to use the visual interface of Synoptic Panel to set these attributes when is possible. When this is not possible, you need to manually add the attributes later with a text editor (see below).


## Editing with a Text Editor

Since SVG files are very similar to HTML, you can edit them with any text editor such as *Visual Studio Code* or *Notepad*. This is useful when you need to make small adjustments to the SVG file to enable advanced Synoptic Panel features.

Textual editing is **necessary** when you want to:

- Forcing the binding of an element of your map to a specific data point, regardless of its id. See more on [Data Binding](../data-binding.md).
- Link an area to a remote map, so to enable users to switch between different maps with drill-down actions. [Drill Mode](../../features/drill-mode.md) is required.
- Enable the [Autofetch mode](../../features/drill-mode.md#autofetch-mode).
- Define the [data labels placeholders](../../features/data-labels.md).
- Add a custom style to an element (font family, size, etc.), bypassing the visual settings, and other advanced features. See more on [Custom Attributes](svg-format.md#custom-attributes).