---
layout:             page
title:              Bug Report
published:          true
date:               2021-12-03
modified:           2022-08-08
order:              /03/02
toc:                false
---

To report a bug with OKVIZ visuals, please follow the directions below:

1. Check if your issue already exists in the ***Issues page*** of the dedicated [repository](#issues-pages).

2. If you don't find anything relevant, insert a new issue including as much details as possible.

3. Include a sample report (***.pbix*** file) that reproduces the issue. If your report contains private data or you cannot share it publicly for any reason, please recreate it with dummy data. 
If you are not able to upload the sample file to Github, please send it to [support@okviz.com](mailto:support@okviz.com) with a **reference to the issue number**.

### Diagnostic Data

In some cases, when, for example, you cannot share reports with us and cannot reproduce the problem locally with dummy data, we may ask you to send us visual diagnostic data. 

1. Open your report with [Power BI service](https://app.powerbi.com)

2. Click the ***About*** settings section of the visual and activate the ***Diagnostics*** toggle.

    <img src="images/diagnostics.png" width="200">

3. Open the browser console panel - With Chrome you can just press Ctrl + Shift + J (Cmd + Option + J on Mac);  alternatively, you can use the top right menu in the browser window, select the option ***More Tools***, then ***Developer Tools*** and click the ***Console*** tab.

4. Be sure to clear all filters from the console by clicking the drop-down menu next to the filter input box.

    <img src="images/filter-console.png" width="300">

5. Right-click on the empty space of the console panel and choose **Save as...**

    <img src="images/save-console.png" width="650">

6. Take a screenshot of the console and send it to us along with the file you just saved on your system.

> **IMPORTANT**: We cannot guarantee bug fixes without a sample file, so this procedure should be considered as a last resort!

## OKVIZ Support

For technical issues with **free visuals**, use this repository on Github:
- Dot Plot, Candlestick, Card with States, Smart Filter (Free), Sparkline, and Synoptic Panel:  
[github.com/okviz/free-visuals/issues](https://github.com/okviz/free-visuals/issues)


For technical issues with **pro visuals**, use a dedicated repository on Github:
- Bullet Chart: [github.com/okviz/bullet-chart-issues](https://github.com/okviz/bullet-chart-issues)
- Calendar Pro: [github.com/okviz/calendar-pro-issues](https://github.com/okviz/calendar-pro-issues)
- Smart Filter Pro: [github.com/okviz/smart-filter-pro-issues](https://github.com/okviz/smart-filter-pro-issues)


For non-technical issues, please contact us at [support@okviz.com](mailto:support@okviz.com)

## Microsoft Support

Sometimes the issue you want to report is not related to our code or affects custom visuals from other vendors.  
In such cases, it is best to open a support ticket with Microsoft:

- To open a ticket if you are a tenant administrator, you can use the following link:  
    [https://admin.powerplatform.microsoft.com/newsupportticket/powerbipro](https://admin.powerplatform.microsoft.com/newsupportticket/powerbipro)

- If you are not a tenant administrator, you can start at this link and follow the on-screen instructions:  
    [https://powerbi.microsoft.com/en-us/support/pro/](https://powerbi.microsoft.com/en-us/support/pro/)
