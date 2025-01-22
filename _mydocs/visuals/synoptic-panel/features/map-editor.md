---
layout:             page
title:              Map Editor
published:          true
date:               2024-05-10
modified:           2025-01-22
order:              /synoptic-panel/features/map-editor
next_reading:       true
---

The built-in Map Editor is a powerful feature of Synoptic Panel visual that allow you to manage, preview and edit maps interactively, without leaving the visual. Each section is described in detail below.

To start using Map Editor, it is essential to have at least one map loaded into visual.
When [Importing Maps](./importing.md) directly from visual by click on the **Add Map** button, the Map Editor will be automatically opened and the first map loaded previewed.

<todo>Add Map button screenshot</todo>

If you already have a map loaded in the visual, you can open the Map Editor by clicking on the **pencil icon** in the visual [Toolbar](./toolbar.md).

<todo>Add pencil icon screenshot</todo>

>> **IMPORTANT** Map Editor is available only in the ***Edit Mode***. If you are in ***View Mode***, you need to switch to **Edit Mode*** to access the Map Editor. Moreover, it is not available if you are using the [Map URLs](./fields/map-urls.md) field well.

The interface is designed for intuitive navigation and interaction, with two main sections: the ***Map List*** on the left and the ***Map Preview*** on the right.

<todo>Add map editor first view screenshot, highlight map list and preview box</todo>

## Map List

This pane displays a list of maps currently loaded in the visual and connected to the current [Drill Path](./../concepts/drill-paths.md) shown at the top of the panel (e.g., “Category” in the provided example). To see and manage all maps connected to the visual in other Drill Paths you can use the [Map Manager](./map-manager.md).

**Map**

<todo>Single map screenshot with numbered elements</todo>

Each element in the list includes:
- Drag Icon: allows you to reorder the maps by dragging and dropping them.
- Map Location Icon: indicates the location (**Local**, **Remote** or **MyStorage**) of the map file.
- Map Title: displays the name of the map.
- Map Menu Icon: allows to open the map context menu to perform action for the selected map.

**Additional Features**

<todo>Screencast -> Flow: one map is already there, add one via button, another one via dragging, reorder, show the map selector dropdown with updated order, then delete all maps</todo>

- Add New Map(s): Enables you to upload new map files either by clicking the **Add** button or by dragging and dropping files directly into the list pane (only for **Local Maps**).
- Delete All: deletes all maps from the list in one action, by clicking the delete icon in the bottom left.
- Reordering: maps in the list can be rearranged easily by dragging them using the map Drag Icon. 

    > Note that the order of the maps in the list will determine the order in which they are displayed in the map dropdown list in the visual.

## Map Preview

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

**Edit Button** (Top-Right)

It provides access to the editing tool. See how to [Edit Map](edit-map.md) for more information.