---
layout:             page
title:              Security & Privacy
published:          true
date:               2024-05-10
modified:           2024-05-22
order:              /synoptic-panel/{97}
toc:                false
---
Synoptic Panel uses the latest technologies available and is updated regularly. It does not contain malicious or unsafe code.

## Certification

The [Power BI certification program](../get-started/certification.md) guarantees that custom visuals are safe.

**Most of OKVIZ visuals are certified, but not Synoptic Panel.**

How come? Does it mean that Synoptic Panel is not safe or we want to keep our source code private due to the use of malicious functions? Absolutely no. Synoptic Panel is not certified for just a couple of reasons:

1. **We use a proprietary licensing system** that requires the visual to call an external service, which is prohibited by certification requirements.

2. **We allow users to use remote maps** (either from the Internet, from their private hosting or from our provided storage); unfortunately, this is not allowed by the certification requirements. 

>> Note that Synoptic Panel can also display maps stored locally, but since this option [can cause performance issues](./concepts/limitations.md) depending on the size of the maps, we do not recommend it for large maps. As a result, we are committed to providing the best possible experience for our users, which is why we have chosen to allow remote maps.

## Data Sent over the Internet

Synoptic Panel **does not send user/report data over the Internet** to external services.

However, it periodically communicate with external services to check the current status of your license and collect anonymous usage data (Telemetry). Although you can disable telemetry, you cannot block communication with our license servers, otherwise the visual will stop working properly.

If you have a corporate firewall that blocks outbound connections, you need to whitelist this URL:

- `https://api.okviz.com/`

### Telemetry

OKVIZ collects some anonymous usage data through Google Analytics and a proprietary system hosted on Microsoft Azure servers.

You can disable telemetry in the [About & License](options/about/send-telemetry.md) options pane.