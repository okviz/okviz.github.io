---
layout:             page
title:              Changelog
published:          true
date:               2022-07-15
modified:           2022-08-08
order:              /bullet-chart/{99}
toc_max:            2
---
This page contains a quick summary of versions and notable changes of Bullet Chart.  
Bullet Chart uses **Power BI Custom Visuals API v4.7.0** - compatible with Power BI Desktop July 2022 and later versions.

## v2.3.0.0
**Released:** 2022-08-08

**Changed:**
- Support API 4.7.0
- Remove default tooltips labels
- Disable extending last state by default
- Disable premium features on environments unsupported by licensing system

**Fixed:**
- Gridline options disappering
- Default target markers
- (Blank) category values
- Null values behavior
- Hidden targets behavior
- Border radius option display
- Tooltips & labels format ([Issue #8](https://github.com/okviz/bullet-chart-issues/issues/8))
- Extend last state display
- Labels clipping with position ***Outside end***

**Added:**
- Premium wizard screen
- Border opacity option to data labels and bullet shape
- License info in About

## v2.2.9.5

**Fixed:** 2022-08-10
- Licensing system issue with valid licenses

## v2.2.9.4
**Released:** 2022-08-03

**Fixed:**
- Bars disappearing with categories and data labels on ([Issue #6](https://github.com/okviz/bullet-chart-issues/issues/6))
- Axis display unit

## v2.2.9.2
**Released:** 2022-07-20

**Changed:**
- Complete refactor
- Support AS licensing system

## v2.2.8
**Released:** 2020-05-23

**Fixed:**
- Manage NaN values

**Changed:**
- Increase the max data to 30K

## v2.2.7
**Released:** 2020-05-09

**Fixed:**
- Bug #124 - Wrong target assignment when the same fields are assigned to different roles
- Console errors when the visual is too small
- Hide change over target label when there is a division by 0

## v2.2.6
**Released:** 2020-04-01

**Fixed:**
- Wrong states when the first is 0
- Accessibility module

## v2.2.5
**Released:** 2020-03-05

**Fixed:**
- Label vertical alignment on IE/Edge (legacy)
- Tooltips culture

## v2.2.4
**Released:** 2020-02-18

**Changed:**
- Icon

## v2.2.3
**Released:** 2019-08-19

**Fixed:**
- Axis height
- Legend for main value
- IE11 rendering issue

## v2.2.0
**Released:** 2019-08-19

**Fixed:**
- Removed targets from tooltips when the marker is hidden
- Issue in states
- Better label positioning in vertical mode

**Added:**
- Support for Drillthrough
- Support for Power BI Themes
- Support for Report Tooltips
- Support for CTRL multiselect
- Option to define target markers thickness
- Option to display percentage change over the closest target
- Customizable tolerance for bar coloring
- Option to stop the conditions applying after the first match
- Comparison operator for each target
- Multiple measures
- Tooltips formatting

## v2.1.6
**Released:** 2018-03-23

**Fixed:**
- Negative axis truncation
- Legend issue

**Removed:**
- Internal telemetry system

## v2.1.5
**Released:** 2017-12-09

**Added:**
- Target markers can be hidden
- Multiple tooltips support
- Labels formatting options

**Fixed:**
- Highlight interaction with target
- Vertical orientation issues with labels

## v2.1.4
**Released:** 2017-06-20

**Fixed:**
- Security issue

## v2.1.3
**Released:** 2017-04-03

**Fixed:**
- iOS rendering issue

## v2.1.2
**Released:** 2017-03-28

**Added:**
- Legend

**Fixed:**
- Missing highlight value in tooltips and other small issues
- Wrong labels when drilling down
- Wrong data labels placement
- Number formatting issue

## v2.1.1 
**Released:** 2016-12-24

**Fixed:**
- Blank data issue

## Previous Versions

Untracked changes.