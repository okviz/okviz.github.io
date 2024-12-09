---
layout:             page
title:              Changelog
published:          true
date:               2022-07-17
modified:           2024-11-28
order:              /calendar-pro/{99}
toc_h_max:            2
---
This page contains a quick summary of versions and notable changes of Calendar Pro.  
Smart Filter Pro uses **Power BI Custom Visuals API v5.9.1**.

## v1.0.7.0
**Released:** 2024-11-27

**Fixed:**
- Fix holidays time zone issue.

## v1.0.6.0
**Released:** 2024-11-02

**Added:**
- Add [Time Zone option](options/calendar/timezone.md) to deal with Power BI automation that run at UTC time zone.
- New license management system - ready to support OKVIZ licensing.

**Fixed:**
- Fix holidays time zone issue.
- Fixed "Today/Current *PERIOD*" not showing in the "Jump" menu in some cases.

## v1.0.5.5
**Released:** 2024-06-02

**Fixed:**
- Quarters year in labels
- Fix data color when no color rule is applied ([#14](https://github.com/okviz/calendar-pro-issues/issues/14))
- Fix events labels formatting ([#17](https://github.com/okviz/calendar-pro-issues/issues/17))
- Fix year axis alignment ([#18](https://github.com/okviz/calendar-pro-issues/issues/18))

## v1.0.5.4
**Released:** 2024-03-02

**Fixed:**
- Custom culture code for number formatting

## v1.0.5.3
**Released:** 2024-01-15

**Added:**
- Option to hide today cell color

**Fixed:**
- Color rule problems with field conditions

## v1.0.5.2
**Released:** 2023-12-30

**Fixed:**
- Weird layout on Power BI mobile app. - [Issue #12](https://github.com/okviz/calendar-pro-issues/issues/12)

## v1.0.5.1
**Released:** 2023-12-11

**Fixed:**
- License validation when a previous license was not valid.

**Changed:**
- Support API 5.4.0

## v1.0.4
**Released:** 2023-03-22

**Changed:**
- Support API 5.1.0

**Added:**
- [Default to Today](options/calendar/default-today.md) option.

**Fixed:**
- Missing last week when a single calendar is displayed on the screen and the number of weeks in the first month of the interval is less than 5 weeks.

## v1.0.3
**Released:** 2022-09-15

**Added:**
- A wizard dialog when the visual contains no data.
- [Extend Today Color](options/cells/extend-today-color.md) option.
- Support API 4.7.0
- License info in About
- Support for preview versions
- US and CA states holidays

**Changed:**
- Improve ***Change Layout*** menu.
- Improve current period in ***Jump*** menu.

**Fixed:**
- Holidays position when no events visible.
- User font sizes ignoring.
- Layout overlapping with small sizes.
- Next/prev page controls disappearing in some circumstances.
- Lint errors.

## v1.0.0
**Released:** 2022-07-03

Initial public release.