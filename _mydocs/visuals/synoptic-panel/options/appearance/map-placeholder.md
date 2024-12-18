---
layout:             page
title:              Map Placeholder
published:          true
date:               2024-12-18
modified:           2024-12-18
order:              /synoptic-panel/options/appearance/map-placeholder
---
**Default value:** On

This option allows you to configure the placeholder image that is displayed when there are no maps for the current level or selection in Synoptic Panel.

## Placeholder Type

**Default value:** (Auto)

The type placeholder to show.

Available options:
- **(Auto)**: A grid will be shown when in Editing View and a text and a background image when in Reading View.
- **Grid**: A grid will be shown.
- **Image & Text**: A text and a background image will be shown.

## Grid Columns

**Default value:** 4

The number of columns in the grid.

## Grid Rows

**Default value:** 3

The number of rows in the grid.

## Image Type

**Default value:** Geographical

The type of image to show, when the placeholder is `Image & Text` or `(Auto)` in Reading View.

Available options:
- **Geographical**
- **Human Body**
- **...other built-in images**
- **(Custom)**: A custom image will be shown.
- **(None)**: No image will be shown.

## Image URL

**Default value:** (Empty)

The URL of the custom image to show, when the placeholder is `(Custom)` in Reading View.

## Text

**Default value:** No map set at this level

The text to show, when the placeholder is `Image & Text` or `(Auto)` in Reading View.

You can use some placeholders to include dynamic fields: 

- `{category}` - the first category value
- `{path}` - the drill path of the level

## Font

**Default value:** Segoe UI, 12pt

The font and style of the placeholder text.

## Color

**Default value:** {% include color value="#878787" %}

The color of the placeholder text.