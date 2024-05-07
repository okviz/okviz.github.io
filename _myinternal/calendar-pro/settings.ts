/**
 * Calendar Pro by OKVIZ
 *
 * Copyright (c) OKVIZ Corp. - https://okviz.com
 * All rights reserved.
 */

/**
 * This file contains the default settings and the conditional enumeration of the settings.
 * By understanding the structure of the settings, you can easily understand what are the conditional rules for each setting.
 */

//...stripped code...

// Enumerations as types
type FiscalEndYearMethod = "last"|"nearest";
type LeapRule = ""|"symmetry454"|"custom";
type MonthNumber = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"10"|"11"; // Ugly but can't use Array.from(Array(12).keys()) in a type
type Alignment = "left"|"center"|"right";
type VerticalAlignment = "top"|"middle"|"bottom";
type FontSizeCalc = "%"|"pt";
type FontStyle = ""|"bold"|"italic"|"bold+italic";
type TimeFormat = "h11"|"h23";
type GroupBy = ""|"auto"|Granularity;
type CalendarFilter = ""|"lastYear"|"firstYear"|"lastQuarter"|"firstQuarter"|"last24Months"|"last12Months"|"last6Months"|"lastMonth"|"firstMonth"|"last4Weeks"|"lastWeek"|"firstWeek"|"last30Days"|"lastDay"|"firstDay";
type ChartFilter = ""|"lastYear"|"firstYear";

export class VisualSettings {
    layout = new VisualSettingsLayout();
    gAxis = new VisualSettingsGAxis();
    hAxis = new VisualSettingsHAxis();
    wAxis = new VisualSettingsWAxis();
    wdAxis = new VisualSettingsWDAxis();
    yAxis = new VisualSettingsYAxis();
    calendar = new VisualSettingsCalendar();
    granularity = new VisualSettingsGranularity();
    cells = new VisualSettingsCells();
    labels = new VisualSettingsLabels();
    labelsMeasure = new VisualSettingsLabelsMeasure();
    events = new VisualSettingsEvents();
    holidays = new VisualSettingsHolidays();
    labelsEvents = new VisualSettingsLabelsEvents();
    legend = new VisualSettingsLegend();
    localization = new VisualSettingsLocalization();
    controls = new VisualSettingsControls();
    tooltips = new VisualSettingsTooltips();
    editor = new VisualSettingsEditor();
    data = new VisualSettingsData();
    about = new VisualSettingsAbout();
    internal = new VisualSettingsInternal();
}

// Appearance
export class VisualSettingsLayout {
    displayMode: CalendarMode = "calendar"; 
    fitMode: CalendarFitMode = "canvas";
    columns = 2;
    rows = 1;
    focusView = false;
    invertAxis = false;
    cellHeight: number = null;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "layout": [
                { name: "displayMode" },
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "columns", range: [1, 100] },
                    { name: "rows", range: [1, 100] },
                    { name: "cellHeight", range: [0, 1000] },
                    { name: "focusView", if: ()=>(settings.layout.rows > 1 || settings.layout.columns > 1) },
                ] },
                { if: ()=>(settings.layout.displayMode == "chart"), then: [
                    { name: "fitMode" },
                    { name: "cellHeight", if: ()=>(settings.layout.fitMode == "size"), range: [1, 1000] },
                    { name: "invertAxis" }
                ] }
            ]
        };
    }
}

// Group Title
export class VisualSettingsGAxis {
    show = true;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 15;
    minFontSize = 8;
    maxFontSize = 16;
    fontSize = 8;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null; // Host related
    alignment: Alignment = "center";
    formatDay = "auto";
    formatWeek = "auto";
    formatMonth = "auto";
    formatQuarter = "auto";
    formatYear = "auto";
    wordWrap = false;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "gAxis": [
                { name: "show" },
                { name: "alignment" },
                { name: "wordWrap" },
                { name: "fontFamily" },
                { name: "fontStyle" },
                { name: "fill" },
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "fontSizeCalc" },
                    { if: ()=>(settings.gAxis.fontSizeCalc == "%"), then: [
                        { name: "percentile" },
                        { name: "minFontSize", range: [0, 60] },
                        { name: "maxFontSize", range: [0, 60] }
                    ] },
                ] },
                { name: "fontSize", if: ()=>(settings.gAxis.fontSizeCalc == "pt" || settings.layout.displayMode == "chart") },
                { name: "formatDay" },
                { name: "formatWeek" },
                { name: "formatMonth" },
                { name: "formatQuarter" },
                { name: "formatYear" }
            ]
        };
    }
}

// Axis: Hour
export class VisualSettingsHAxis {
    show = false;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 80;
    minFontSize = 5;
    maxFontSize = 10;
    fontSize = 7;
    fontFamily= defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null; // Host related
    format = "auto";
    alignment: Alignment = "left";

    enumerate(settings: VisualSettings, hasTime: boolean): SettingDefinitions<VisualSettings> {   
        return (hasTime ? {
            "hAxis": [
                { if: ()=>(hasTime), then: [
                    { name: "show" },
                    { name: "alignment" },
                    { name: "fontFamily" },
                    { name: "fontStyle" },
                    { name: "fill" },
                    { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                        { name: "fontSizeCalc" },
                        { if: ()=>(settings.hAxis.fontSizeCalc == "%"), then: [
                            { name: "percentile" },
                            { name: "minFontSize", range: [0, 60] },
                            { name: "maxFontSize", range: [0, 60] }
                        ] },
                    ] },
                    { name: "fontSize", if: ()=>(settings.wAxis.fontSizeCalc == "pt" || settings.layout.displayMode == "chart") },
                    { name: "format" }
                ] }
            ],
        } : {})
    }
}

// Axis: Week 
export class VisualSettingsWAxis {
    show = false;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 50;
    minFontSize = 5;
    maxFontSize = 10;
    fontSize = 7;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null; // Host related
    format = "auto";
    alignment: Alignment = "left"

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "wAxis": [
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "show" },
                    { name: "alignment" },
                    { name: "fontFamily" },
                    { name: "fontStyle" },
                    { name: "fill" },
                    { name: "fontSizeCalc" },
                    { if: ()=>(settings.wAxis.fontSizeCalc == "%"), then: [
                        { name: "percentile" },
                        { name: "minFontSize", range: [0, 60] },
                        { name: "maxFontSize", range: [0, 60] }
                    ] },
                    { name: "fontSize", if: ()=>(settings.wAxis.fontSizeCalc == "pt") },
                    { name: "format" }
                ] }
            ],
        };
    }
}

// Axis: Weekday
export class VisualSettingsWDAxis {
    show = true;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 40;
    minFontSize = 6;
    maxFontSize = 14;
    fontSize = 8;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null; // Host related
    weekendFill: Fill = {solid: { color: "#f44336" }};
    format = "short";
    alignment: Alignment = "left";

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "wdAxis": [
                { name: "show" },
                { name: "alignment" },
                { name: "fontFamily" },
                { name: "fontStyle" },
                { name: "fill" },
                { name: "weekendFill" },
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "fontSizeCalc"},
                    { if: ()=>(settings.wdAxis.fontSizeCalc == "%"), then: [
                        { name: "percentile" },
                        { name: "minFontSize", range: [0, 60] },
                        { name: "maxFontSize", range: [0, 60] }
                    ] },
                ] },
                { name: "fontSize", if: ()=>(settings.wdAxis.fontSizeCalc == "pt" || settings.layout.displayMode == "chart") },
                { name: "format" }
            ],
        };
    }
}

// Axis: Year
export class VisualSettingsYAxis {
    show = true;
    fontSize = 8;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null; // Host related
    format = "numeric";
    alignment: Alignment = "center";
    rotate = true;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "yAxis": [
                { if: ()=>(settings.layout.displayMode == "chart"), then: [
                    { name: "show" },
                    { name: "alignment" },
                    { name: "fontFamily" },
                    { name: "fontStyle" },
                    { name: "fill" },
                    { name: "fontSize" },
                    { name: "format" },
                    { name: "rotate" }
                ] }
            ],
        };
    }
}

// Calendar Setup
export class VisualSettingsCalendar {
    system: `${CalendarSystem}` = "gregorian";
    leapRule: LeapRule = "symmetry454";
    leapYears = 5;
    leapStart = "";
    leapAppend: MonthNumber = "11";
    monthStartDay = 1;
    yearStartMonth = "0";
    monthEndDay = null;
    yearEndMonth: MonthNumber = "11";
    yearEndWeekday = ""; // Read-only
    yearEndWeekdayMethod: FiscalEndYearMethod = "last";
    weekStart: string = null; // Host related
    workDays: string = null; // Host related
    startYear = "";
    endYear = "";
    startHour = 0;
    endHour = 23;
    timeFormat: TimeFormat = "h23";
    filter: CalendarFilter = "";
    filterChart: ChartFilter = "";
    completeYears = true;
    defaultToday = false;

    enumerate(settings: VisualSettings, hasTime: boolean): SettingDefinitions<VisualSettings> {
        return {
            "calendar": [
                { name: "system" },
                { name: "workDays" },
                { name: "weekStart" },
                { if: ()=>(settings.calendar.system == Calendars.CalendarSystem.Fiscal), then: [
                    { name: "yearEndWeekday", value: lastDayOfWeekStr(parseInt(settings.calendar.weekStart), getDateLocale(settings.localization))  },
                    { name: "yearEndWeekdayMethod" }
                ] },
                { name: "yearStartMonth", if: ()=>(
                    settings.calendar.system == Calendars.CalendarSystem.Week445 || 
                    settings.calendar.system == Calendars.CalendarSystem.Week454 ||
                    settings.calendar.system == Calendars.CalendarSystem.Week544 ||
                    settings.calendar.system == Calendars.CalendarSystem.Fiscal
                ) },
                { if: ()=>(settings.calendar.system == Calendars.CalendarSystem.Custom), then: [
                    { name: "startYear"},
                    { name: "yearStartMonth" },
                    { name: "monthStartDay", range: [1, 31]  },
                    { name: "endYear" },
                    { name: "yearEndMonth" },
                    { name: "monthEndDay", range: [1, 31] }
                ] },
                { if: ()=>(settings.calendar.system != Calendars.CalendarSystem.Custom), then: [
                    { name: "startYear" },
                    { name: "endYear" },
                    //{ name: "timeFormat" },
                ] },
                { if: ()=>(
                    settings.calendar.system == Calendars.CalendarSystem.Week445 || 
                    settings.calendar.system == Calendars.CalendarSystem.Week454 ||
                    settings.calendar.system == Calendars.CalendarSystem.Week544
                ), then: [
                    { name: "leapRule" },
                    { if: ()=>(settings.calendar.leapRule == "custom"), then: [
                        { name: "leapAppend" },
                        { name: "leapYears", range: [1, 50] },
                        { name: "leapStart" }
                        
                    ] }
                ] },
                { name: "completeYears", if: ()=>(settings.layout.displayMode == "calendar") },
                { if: ()=>(hasTime), then: [
                    { name: "startHour", range: [0, 23] },
                    { name: "endHour", range: [0, 23] }
                ] },
                { name: "filter", if: ()=>(settings.layout.displayMode == "calendar") },
                { name: "filterChart", if: ()=>(settings.layout.displayMode == "chart") },
                { name: "defaultToday" }
            ],
        };
    }
}

// Calendar Granularity
export class VisualSettingsGranularity {
    granularity: Granularity = "day";
    group: GroupBy = "auto";
    allGranularities = true;
    years = true;
    quarters = true;
    months = true;
    weeks = true;
    days = true;
    hours = true;
    zoomMode = false;

    // Internal
    hourGroup: GroupBy = "day";
    dayGroup: GroupBy = "month";
    weekGroup: GroupBy = "month";
    monthGroup: GroupBy = "quarter";
    quarterGroup: GroupBy = "year";
    yearGroup: GroupBy = "";

    enumerate(settings: VisualSettings, hasTime: boolean): SettingDefinitions<VisualSettings> {
        return {
            "granularity": [
                { name: "granularity" },
                { name: "group" },
                { name: "allGranularities" },
                { if: ()=>(!settings.granularity.allGranularities), then: [
                    { name: "hours", if: ()=>(hasTime) },
                    { name: "days" },
                    { name: "weeks" },
                    { name: "months" },
                    { name: "quarters" },
                    { name: "years" },
                ] },
            ]
        };
    }
}

// Cell Appearance
export class VisualSettingsCells {
    blankFill: Fill = null;
    fill: Fill = null;
    weekendFill: Fill = null;
    showToday = true;
    todayFill: Fill = {solid: { color: "#D64550" }};
    extendTodayFill = false;
    selectedFill: Fill = {solid: { color: "#FAE99F" }};
    border = true;
    groupBorder = true;
    borderSize = 1;
    borderFill: Fill = null; // Host related
    borderCollapse = true;
    cellSpacing = 1;
    radius = 2;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "cells": [
                { name: "blankFill" },
                { name: "fill" },
                { name: "weekendFill" },
                { name: "showToday" },
                { if: ()=>(settings.cells.showToday), then: [
                    { name: "todayFill" },
                    { name: "extendTodayFill" }
                ] },
                { name: "selectedFill" },
                { name: "border" },
                { if: ()=>(settings.cells.border), then: [
                    { name: "borderSize", range: [1, 10] },
                    { name: "borderFill" },
                    { name: "borderCollapse" },
                    { name: "groupBorder", if: ()=>(settings.layout.displayMode == "chart" && settings.cells.borderCollapse) },
                    { if: ()=>(!settings.cells.borderCollapse), then: [
                        { name: "cellSpacing", range: [1, 100] },
                        { name: "radius", range: [0, 100] },
                    ] }
                ] },
                
            ],
        };
    }
}

// Cell Label
export class VisualSettingsLabels {
    show = true;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 45;
    minFontSize = 8;
    maxFontSize = 18;
    fontSize = 8;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null;
    weekendFill: Fill = null;
    todayFill: Fill = null;
    alignment: Alignment = "left";
    verticalAlignment: VerticalAlignment = "top";
    formatHour = "auto";
    formatDay = "auto";
    formatWeek = "auto";
    formatMonth = "auto";
    formatQuarter = "auto";
    formatYear = "auto";

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "labels": [
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "show" }, 
                    { name: "alignment" },
                    { name: "verticalAlignment" },
                    { name: "fontFamily" },
                    { name: "fontStyle" },
                    { name: "fill" },
                    { name: "weekendFill" },
                    { name: "todayFill" },
                    { name: "fontSizeCalc" },
                    { if: ()=>(settings.labels.fontSizeCalc == "%"), then: [
                        { name: "percentile" },
                        { name: "minFontSize", range: [0, 60] },
                        { name: "maxFontSize", range: [0, 60] }
                    ] },
                    { name: "fontSize", if: ()=>(settings.labels.fontSizeCalc == "pt") },
                    { name: "formatHour" },
                    { name: "formatDay" },
                    { name: "formatWeek" },
                    { name: "formatMonth" },
                    { name: "formatQuarter" },
                    { name: "formatYear" }
                ] },
            ],
        };
    }
}

// Cell Value
export class VisualSettingsLabelsMeasure {
    show = true;
    showBlank = false;
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 65;
    minFontSize = 8;
    maxFontSize = 18;
    fontSize = 8;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    fill: Fill = null;
    alignment: Alignment = "center";
    verticalAlignment: VerticalAlignment = "middle";
    unit = 0;
    precision = 0;

    enumerate(settings: VisualSettings, hasMeasure: boolean): SettingDefinitions<VisualSettings> {
        return {
            "labelsMeasure": [
                { if: ()=>(settings.layout.displayMode == "calendar" && hasMeasure), then: [
                    { name: "show" }, 
                    { name: "alignment" },
                    { name: "verticalAlignment" },
                    { name: "fontFamily" },
                    { name: "fontStyle" },
                    { name: "fill" },
                    { name: "fontSizeCalc" },
                    { if: ()=>(settings.labelsMeasure.fontSizeCalc == "%"), then: [
                        { name: "percentile" },
                        { name: "minFontSize", range: [0, 60] },
                        { name: "maxFontSize", range: [0, 60] }
                    ] },
                    { name: "fontSize", if: ()=>(settings.labelsMeasure.fontSizeCalc == "pt") },
                    { name: "unit" },
                    { name: "precision", range: [0, 15] },
                    { name: "showBlank" }, 
                ] },
            ],
        };
    }
}

// Events
export class VisualSettingsEvents {
    show = true;
    join = true;
    showLabels = true;
    fill: Fill = {solid: { color: "#FD625E" }};
    dataFill: DataBoundSetting<Fill> = null; // Data bound
    aggregate = true;
    showTime = true;
    addToLegend = true;
    addToTooltips = true;

    enumerate(settings: VisualSettings, hasTime: boolean): SettingDefinitions<VisualSettings> {
        return {
            "events": [
                { name: "show" },
                { if: ()=>(settings.layout.displayMode == "calendar" /*&& eventsCount > 1*/), then: [
                    { name: "aggregate" },
                    { name: "dataFill", dataBound: true, if: ()=>(!settings.events.aggregate) }
                ] },  
                { name: "fill", if: ()=>(settings.layout.displayMode == "chart" || (settings.events.aggregate /*|| eventsCount <= 1*/)) },
                { name: "join" },
                { name: "showTime", if: ()=>(hasTime)  },
                { name: "showLabels" },
                { name: "addToTooltips" },
                { name: "addToLegend" }
            ],
        };
    }
}

// Events Appearance
export class VisualSettingsLabelsEvents {
    displayMode: "label"|"counter"|"badge" = "label";
    unit = 0;
    precision = 0;
    fill: Fill = null;
    selectedFill: Fill = {solid: { color: "#FAE99F" }};
    fontSizeCalc: FontSizeCalc = "%";
    percentile = 30;
    minFontSize = 8;
    maxFontSize = 18;
    fontSize = 9;
    fontFamily = defaultNumberFont;
    fontStyle: FontStyle = "";
    wordWrap = false;
    alignment: Alignment = "left";
    badgeAutoSize = true;
    badgeSize = 5;
    radius = 2;
    border = false;
    borderSize = 1;
    borderFill: Fill = null; // Host related 

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "labelsEvents": [
                { if: ()=>(settings.layout.displayMode == "calendar" && ((settings.events.show && settings.events.showLabels) || (settings.holidays.show && settings.holidays.showLabels))), then: [
                    { name: "displayMode" },
                    { if: ()=>(settings.labelsEvents.displayMode == "label"), then: [
                        { name: "unit" },
                        { name: "precision", range: [0, 15] },
                        { name: "wordWrap" },
                        { name: "alignment" },
                    ] },
                    { if: ()=>(settings.labelsEvents.displayMode == "label" || settings.labelsEvents.displayMode == "counter"), then: [
                        { name: "fontFamily" },
                        { name: "fontStyle" },
                        { name: "fill" },
                        { name: "selectedFill", if: ()=>(settings.labelsEvents.displayMode == "label") },
                        { name: "fontSizeCalc" },
                        { if: ()=>(settings.labelsEvents.fontSizeCalc == "%"), then: [
                            { name: "percentile" },
                            { name: "minFontSize", range: [0, 60] },
                            { name: "maxFontSize", range: [0, 60] }
                        ] },
                        { name: "fontSize", if: ()=>(settings.labelsEvents.fontSizeCalc == "pt") },
                        { name: "radius", range: [0, 100] },
                        { name: "border" },
                        { if: ()=>(settings.labelsEvents.border), then: [
                            { name: "borderSize", range: [1, 10] },
                            { name: "borderFill" },
                        ] },
                    ] },
                    { if: ()=>(settings.labelsEvents.displayMode == "badge"), then: [
                        { name: "badgeAutoSize" },
                        { name: "badgeSize", range: [1, 100], if: ()=>(!settings.labelsEvents.badgeAutoSize) }
                    ] }
                 ] }
            ],
        };
    }
}

// Holidays
export class VisualSettingsHolidays {
    show = false;
    country1 = "";
    country2 = "";
    country3 = "";
    native = true;
    showOnDaysOnly = false;
    showAll = true;
    showPublic = true;
    showBank = true;
    showSchool = true;
    showObservance = true;
    showOptional = true;
    addToLegend = true;
    addToTooltips = true;
    showLabels = true;
    fill: Fill = {solid: { color: "#A66999" }};
    showLabelFlag = false;
    cellFill: Fill = null;
    labelFill: Fill = null;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "holidays": [
                { name: "show" },
                { name: "country1" },
                { name: "country2" },
                { name: "country3" },
                { name: "native" },
                { name: "showAll" },
                { if: ()=>(!settings.holidays.showAll), then:[
                    { name: "showPublic" },
                    { name: "showBank" },
                    { name: "showSchool" },
                    { name: "showObservance" },
                    { name: "showOptional" }
                ] },
                { name: "fill" }, 
                { name: "cellFill" },
                { name: "labelFill", if: ()=>(settings.layout.displayMode == "calendar") },
                { name: "showLabels" },
                { if: ()=>(settings.holidays.showLabels), then: [
                    { name: "showLabelFlag",  }, 
                    { name: "showOnDaysOnly" },
                ] },
                { name: "addToTooltips" },
                { name: "addToLegend" }
            ],
        };
    }
}

// Legend
export class VisualSettingsLegend {
    show = false;
    position = LegendPosition.Bottom;
    showTitle = false;
    titleText = "";
    labelColor: Fill = null; // Host related
    fontFamily = defaultTextFont;
    fontSize = 8;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "legend": [
                { name: "show" },
                { name: "position" },
                { name: "showTitle" },
                { name: "titleText", if: ()=>(settings.legend.showTitle) },
                { name: "labelColor" },
                { name: "fontFamily" },
                { name: "fontSize" }
            ],
        };
    }
}

// Localization
export class VisualSettingsLocalization {
    auto = true;
    userLocale: string = null;
    numberLocale = "en-US";

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "localization": [
                { name: "auto" },
                { name: "userLocale", if: ()=>(!settings.localization.auto) },
                { name: "numberLocale" }
            ],
        };
    }
}

// Toolbar
export class VisualSettingsControls {
    show = true;
    autoHide = false;
    alignment: Alignment = "center";
    prevNextStepControls = false;
    prevNextPageControls = true;
    firstLastPageControls = false;
    jumpControls = true;
    granularityControls = true;
    granularityZoom = true;
    labels = true;
    groupingControls = true;
    focusViewControl = true;
    focusOnZoom = false;
    tableEditControl = true;
    clear = false;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "controls": [
                { name: "show" },
                { name: "autoHide" },
                { name: "alignment" },
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "prevNextStepControls" },
                    { name: "prevNextPageControls" },
                    { name: "firstLastPageControls" },
                    { name: "jumpControls" }
                ] },
                { name: "groupingControls" },
                { name: "granularityControls" },
                { name: "granularityZoom", if: ()=>(settings.controls.granularityControls) },
                { if: ()=>(settings.layout.displayMode == "calendar"), then: [
                    { name: "focusViewControl" },
                    { name: "focusOnZoom", if: ()=>(settings.controls.granularityControls) },
                    { name: "tableEditControl"}
                ] },
                { name: "labels" },
                { name: "clear" }
            ],
        };
    }
}

// Tooltips
export class VisualSettingsTooltips {
    show = true;
    unit = 0;
    precision = null;
    showBlank = false;
    maxTooltipItems = 8;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "tooltips": [
                { name: "show" },
                { name: "unit" },
                { name: "precision", range: [0, 15] },
                { name: "showBlank" },
                { name: "maxTooltipItems", range: [0, 20] },
            ],
        };
    }
}

// Advanced Editor
export class VisualSettingsEditor {
    hide = false;
    pin = false;

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "editor": [
                { name: "hide" },
                { name: "pin", if: ()=>!settings.editor.hide}
            ],
        };
    }
}

// Data
export class VisualSettingsData {
    maxData = null;
    aggregate: DataAggregationType = "sum";

    enumerate(settings: VisualSettings): SettingDefinitions<VisualSettings> {
        return {
            "data": [
                { name: "maxData", range: [0, 1000000] },
                { name: "aggregate" },
            ],
        };
    }
}

// About
export class VisualSettingsAbout {
    name = ""; // Read-only
    version = ""; // Read-only
    license = ""; // Read-only
    diagnostics = false;

    enumerate(settings: VisualSettings, meta: VisualMeta, licenseStatus: string): SettingDefinitions<VisualSettings> {
        return {
            "about": [
                { name: "name", value: meta.displayName },
                { name: "version", value: meta.versionDisplayName },
                { name: "license", value: licenseStatus  },
                { name: "diagnostics" }
            ]
        };
    }
}

// Internal
export class VisualSettingsInternal {
    lastIntervals: Interval[] = null;
    zoomedInterval: Interval = null;
    //templates = null;
    colorRules: Rule[] = [{
        id: "default",
        displayName: "{field}",
        automatic: true,
        locked: {
            delete: true,
            mode: true, 
            displayName: true,
            property: true, 
            colorScale: {
                field: true
            }
        },
        enabled: true,
        stop: false,
        legend: false,
        property: "cellFill",
        mode: "colorScale",
        conditions: null,
        colorScales: {
            field: { role: "value" },
            blank: "ignore",
            blankColor: "#e6e6e6",
            type: ColorScaleType.Linear,
            advanced: false,
            scalesByLevel: {
                default: {
                    max: {
                        mode: ConditionMode.Percentage,
                        color: "#3EB449"
                    },
                    min: {
                        mode: ConditionMode.Percentage,
                        color: "#E5F3E6"
                    },
                    center: {
                        mode: ConditionMode.Percentage,
                        color: null
                    },
                    topColor: null,
                    bottomColor: null
                }   
            }
        }
    }];

    // No enumeration!
}

//...stripped code...