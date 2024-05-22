---
layout:             page
title:              Security & Privacy
published:          true
date:               2022-07-13
modified:           2024-05-22
order:              /smart-filter-pro/{97}
toc_max:            2
---

At OKVIZ we care about the security of your data and strive to use the best technologies to keep you safe. Smart Filter Pro, like any other visuals we made, was developed with this philosophy.

## Certification
The [Power BI certification program](../get-started/certification.md) guarantees that custom visuals are safe.

**Most of OKVIZ visuals are certified, but not Smart Filter Pro.**

How come? Does it mean that Smart Filter Pro is not safe or we want to keep our source code private due to the use of malicious functions? Absolutely no. Smart Filter Pro is not certified for just a couple of reasons:

1. **We use a proprietary licensing system** that requires the visual to call an external service, which is prohibited by certification requirements.

2. **To provide the powerful Filter and Search modes, we use some functions that belong to an old API SDK** that have not yet been migrated to the latest version. It might sound a bit cumbersome, but the point is, we cannot upgrade to the latest version of the API (which is another certification requirement) without removing these features.


### Code Review

We will certainly certify Smart Filter Pro in the future, but right now we can only provide some additional information to companies interested in purchasing this visual and concerned about the security of their data. In some cases and at our sole discretion, after signing an NDA document, we can provide temporary read-only access to the source code of the visual.

If you have questions, write to [support@okviz.com](mailto:support@okviz.com)

## Data Sent over the Internet

Smart Filter Pro **does not send user/report data over the Internet** to external services.

However, it periodically communicate with external services to check the current status of your license and collect anonymous usage data (Telemetry). Although you can disable telemetry, you cannot block communication with our license servers, otherwise the visual will stop working properly.

If you have a corporate firewall that blocks outbound connections, you need to whitelist this URL:

- `https://okvizviews.table.core.windows.net/`

### Telemetry

OKVIZ collects some anonymous usage data through Google Analytics and a proprietary system hosted on Microsoft Azure servers.

The collected data are:

- **License status** (licensed or unlicensed)
- **Number of rows** loaded by the visual (not the content)
- **Report mode** (Editing or Reading mode)
- **Working mode** (Dropdown, Observer, Filter, Search, or Hierarchy modes)
- **Check for updates** option status

You can disable telemetry in the [About & License](options/about/send-telemetry.md) options pane.