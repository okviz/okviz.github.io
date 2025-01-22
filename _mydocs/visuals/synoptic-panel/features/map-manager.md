---
layout:             page
title:              Map Manager
published:          true
date:               2024-05-11
modified:           2025-05-22
order:              /synoptic-panel/features/map-manager
next_reading:       true
---

<todo> Add screenshot of the Maps Manager </todo>

The Maps Manager provides an overview of **all the maps connected to the visual** and their associated [Drill Paths](./drill-mode.md#the-drill-path) It is a powerful tool to manage maps efficiently and offers functionality for organizing, previewing, and editing connections between maps and drill paths.

The Maps Manager interface is visually similar to the [Map Editor](./map-editor.md) and is divided into two main sections:

**Drill Path Tree** (Left pane)

This pane displays a hierarchical view of all Drill Paths as the top-level items. Under each drill path, you will find all maps connected to it.

- The tree structure is expandable, and each drill path and map is associated with a checkbox.
- Checkboxes allow users to perform bulk actions, such as deleting multiple maps or moving maps between drill paths.
- All maps can be previewed by clicking on the map element in the tree.

**Map Preview** (Right pane)

This section provides useful information and a visual preview of the currently selected map.
The map is displayed in the center of the pane while in the corners you can find some useful information and tools.

**Main Detail** (Top-Left)

Here are displayed the following key details (in order from top to bottom):
- Map Title: the name of the map currently in preview.
- Map Source: the source of the selected map, which varies depending on the type of map:
	- For local maps, the source displays the file name that originated the map (e.g. my-file.svg).
	- For remote maps, the source shows the URL where the map is hosted.
	- For MyStorage maps, the source displays the map’s unique ID in the storage system.
- Map Author (if available): Displays the author of the map.

**Additional Information** (Bottom-Left)

Below the preview, the following information is displayed:
- Last Modified Date: the date and time the map was last updated.
- File Size: the size of the map file (only for **Local** maps).

**Refresh Button** (Bottom-Right, if available)

For remote maps, a Refresh Icon may appear, allowing you to reload the map to ensure it is up to date.

**Exclusions**

[Child Maps](child-maps.md), that are children of specific areas in a parent map, are not displayed in the Maps Manager.