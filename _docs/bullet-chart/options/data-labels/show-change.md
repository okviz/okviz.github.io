---
layout:             page
title:              Show Change
published:          true
date:               2022-08-17
modified:   	    2023-02-01
order:              /bullet-chart/options/data-labels/show-change
internal:           showChange
related:
    - change-decimal-places.md
    - change-value-type.md
---

**Defaul value:** Don't Show

This option is visible only if there is at least one measure connected to the ***Comparison Value*** field or the ***Targets*** field. This option allows to show the value change in the main value (connected to the ***Value*** field) relative to the Comparison Value, a Target or a Target for variance in the data labels. It provides six options:

- **Don't Show:** Percent change is not shown.

- **Comparison Value:** Value change calculated relative to the Comparison value.

<img src="images/perc-change-over-comparison.png" width="700">

- **Closest Achieved Target:** Calculated value change compared to the value of the closest target achieved.

<img src="images/perc-change-over-comparison.png" width="700">

- **Next Target:** Calculated value change from the following target value.

- **Lowest Target:** Calculated value change from target value with lower value.

- **Highest Target:** Calculated value change from target value with higher value.

- **Target for Variance:** Calculated value change from target for variance.

<todo>Screenshot</todo>