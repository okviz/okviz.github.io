---
layout:             page
title:              Pan & Zoom
published:          true
date:               2024-09-14
modified:           2024-09-14
order:              /synoptic-panel/options/advanced-options/pan-zoom
---

This section controls the behavior of the pan and zoom feature.

## Lock Pan

**Default**: Off

When enabled, the pan is locked and cannot be changed by the user.

## Lock Zoom

**Default**: Off

When enabled, the zoom is locked and cannot be changed by the user.

## Zoom Sensitivity

**Default**: 0.5

The sensitivity of the zoom. A higher value will make the zoom faster, while a lower value will make it slower.

## Base Map Zoom

**Default**: 100%

Defines the base zoom for the area of the map. Increasing the value will make the map larger and could hide some areas, decreasing it will make the map smaller.

## Zoom On Element Fit

**Default**: 80%

Defines the percentage of the visual area to consider when zooming on single element (also applies to auto-zoomed elements).

## Auto Pan Mode

**Default**: On

When enabled, the map can be always dragged by clicking and dragging the mouse. If disabled, the map can only be dragged when switching to the pan mode.

## Auto Zoom Mode

**Default**: (Disabled)

Automatically adjust the zoom level and scroll position to fit all matched elements in the visual area. When is *Single Data Point*, the automatic zoom is applied only if there is a single data point in the underlying data, otherwise it is always applied.

Available options:

- **Disabled**: No automatic zoom is applied.
- **Single Data Point**: Automatic zoom is applied only if there is a single data point in the underlying data.
- **All Data Points**: Automatic zoom is always applied.