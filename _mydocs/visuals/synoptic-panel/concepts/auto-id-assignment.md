---
layout:             page
title:              Auto Id Assignment
published:          true
date:               2025-01-13
modified:           2025-01-29
order:              /synoptic-panel/concepts/auto-id-assignment
---

<todo> Add a screencast showing the auto-id assignment process. </todo>

In Synoptic Panel, each area within an [SVG](./../concepts/maps/svg-format.md) map must be uniquely identified to ensure proper [Data Binding](./../concepts/data-binding.md) and interactivity. During the map validation process, all elements are assigned a status, and unique [`id`](./../concepts/maps/svg-format.md#id-attribute) attributes are required for identification. To facilitate this, Synoptic Panel implements an ***auto-assignment process*** for IDs:

1. Existing `id`

    If an SVG element already has an `id` attribute, Synoptic Panel retains it ensuring the element remains identifiable. It is recommended that the `id` be pre-assigned to the map before it is loaded to avoid any issues.

2. Duplicate `id`

    If an SVG element has a duplicate `id` (i.e., multiple elements share the same `id`), Synoptic Panel will still function as expected, but this is not an ideal scenario. While the visual will continue to work, internally, a suffix will be appended to the duplicate `id` to make it unique (e.g., "my_area" might become "my_area_okviz_2"). In some case, this could lead to unexpected behaviors.

2.	Missing `id`

    For SVG elements without an `id` attribute, Synoptic Panel automatically assigns one and the `data-okviz-auto-id` attribute is also added to the element. The assigned `ìd` follows a specific convention based on the shape of the element, such as `rect`, `path`, `circle`, etc., combined with a sequential number (e.g., `rect1`, `circle2`). This ensures every area is uniquely identifiable within the map. Elements without and `id` will be considered as decorations and will not be interactive in the visual, unless [manually bound to a data point](./../concepts/data-binding.md#manual-binding).