---
layout:             page
title:              What are Maps?
published:          true
date:               2024-05-10
modified:           2024-05-11
order:              /synoptic-panel-pro/concepts/01
---

In the context of Synoptic Panel Pro, the term "map" extends beyond traditional geographical boundaries. Here, a map is any image that can be utilized to visualize and represent data dynamically. These are not limited to standard maps of regions or countries; they can include a variety of other visual representations such as floor plans, city layouts, machine schematics, or anatomical diagrams of the human body.

<todo>Screenshot of plane layout or human body</todo>

Each map is comprised of distinct areas, each of which can be linked to specific data points. This allows for dynamic data representation within the map, where each element (or shape) can be highlighted, colored, or labeled in response to the underlying data. 

See more about the [data binding process](../data-binding.md) here.

## Supported Map Formats

Here are the supported map formats for Synoptic Panel Pro:

### SVG Format

Synoptic Panel Pro supports and **can only render maps in SVG format**. SVG is a vector image format that provides a flexible and scalable way to represent images. SVG files can be created using various design tools, such as *Adobe Illustrator*, *Inkscape*, or online graphic editors.

For more technical details on this format and the custom attributes supported by Synoptic Panel Pro, see [SVG Format](svg-format.md).

### JSVG Format

By using Synoptic Panel Pro's [My Storage](../../features/maps-location/my-storage.md) feature, you may notice that the maps are stored on our servers in a custom format called JSVG (JSON SVG). This format is a JSON representation of the SVG file, which incapsulate the original SVG file and includes the data binding configuration for each area.

> The JSVG format is used internally by Synoptic Panel Pro. It is not intended to be edited manually, but it can be exported and imported for backup or sharing purposes.

### Other Formats

You can use other image formats as a base for your maps, but you will need to convert them to SVG format before using them. Here are some common approaches to convert images for use in Synoptic Panel Pro:

- **Bitmap images (PNG, JPG, etc.)**  
    You can convert bitmap images by tracing them into vector images through professional design software like *Adobe Illustrator* or *Inkscape*. Note that since this process does not always produce perfect results, it's recommended to use high-quality images with clear boundaries.

    We also provide a free online tool called [Synoptic Designer](https://synoptic.design/) specifically designed for this use, but please note that it is more of a proof of concept than a full-featured tool.

    > In the future, we plan to provide a more advanced tool for converting bitmaps to SVG directly within Power BI. If you are interested in this feature, please let us know by [contacting us](mailto:info@oviz.com?subject=Synoptic Panel Pro Integrated Bitmap Editor).

- **CAD drawings (DXF, DWG, etc.)**  
    You need a CAD software to convert them to SVG, such as *AutoCAD* or *DraftSight*.
    > Note that due to the complexity of CAD drawings, the conversion process may require manual adjustments to ensure the resulting SVG file is suitable for use in Synoptic Panel Pro. OKVIZ does not provide support for this conversion process.

- **Visio diagrams (VSD, VSDX, etc.)**  
    You need *Microsoft Visio* to convert them to SVG. See [Visio Docs](https://support.microsoft.com/en-us/office/save-a-visio-diagram-as-a-graphic-or-image-file-94c892d1-523c-4073-882d-c8ee2ff65d18).

- **GIS data (Shapefile, GeoJSON, etc.)**  
    You need a GIS software to convert them to SVG, such as *QGIS* or *ArcGIS*.

- **Other vector formats (PDF, EPS, AI, etc.)**  
    You need a vector design software to convert them to SVG, such as *Adobe Illustrator*.

