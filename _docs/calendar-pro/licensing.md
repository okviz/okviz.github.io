---
layout:             page
title:              Licensing
published:          true
date:               2022-07-17
modified:           2022-07-21
order:              /calendar-pro/{98}
toc_max:            2
---

Calendar Pro requires a valid per-user license to be used. We adhere to the ***ISV app licensing system*** provided by Microsoft to allow users to purchase and manage licenses easily.

## How to Get Licenses

Here is an overview of the process required to obtain licenses for Calendar Pro:

1. Estimate the number of users who will use Calendar Pro and, therefore, the number of licenses required. You can do this simply by **adding up** the number of people designing reports containing the visual with who will view them.  
    For example:

    | Designers | Viewers | Licenses Required |
    | --- | --- | --- |
    | 1 | 0 | 1 |
    | 10 | 50 | 60|
    | 10 | 10,000 | 10,010 |

    If you don't get enough licenses, some of your users will see an [invalid license notification](#invalid-license-notifications) or won't be able to use the visual at all.

2. Visit the [Calendar Pro page on AppSource](https://appsource.microsoft.com/en-US/product/power-bi-visuals/okvizcorp1634637213047.calendarprobyokviz) and purchase a plan that best suits your requiriments. 

    <img src="images/license-plans.png" width="750">

3. Assign the license(s) to yourself, your users or Active Directory groups via [Microsoft 365 admin center](https://admin.microsoft.com/Adminportal/Home#/subscriptions)

4. At this point, users with a valid license will be able to see and use all the features of Calendar Pro.

> **Power BI Embedded / Report Server**: Calendar Pro cannot be licensed on these environments using the system described on this page. Please, [contact us](mailto:support@okviz.com?title=Calendar+Pro+Unsupported+Env) to get an offer for this scenario.

## Unlicensed Notifications

If you are using Calendar Pro without a valid license, you will see different notifications based on your environment:

- Power BI Desktop / Power BI service in Edit view 

    <img src="images/license-unlock-edit-view.png" width="600">

- Power BI service in [Reading view](https://docs.microsoft.com/en-us/power-bi/consumer/end-user-reading-view#reading-view)

    <img src="images/license-unlock.png" width="600">

- Power BI Embedded / Report Server:

    <img src="images/licensing-unsupported.png" width="400">


#### Related Resources:
- [Power BI AppSource visual license models](https://docs.microsoft.com/en-us/power-bi/developer/visuals/custom-visual-licenses)
- [ISV App License Management](https://docs.microsoft.com/en-us/azure/marketplace/isv-app-license-power-bi-visual)
