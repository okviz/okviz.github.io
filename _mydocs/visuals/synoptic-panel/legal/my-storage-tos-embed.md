---
layout:             page-no-nav
published:          true
unlisted:           true
toc:                false
---
<style>
    header, footer, .anchor-link, h2:before { display: none !important; }
    h2 { pointer-events: none !important; }
</style>
# My Storage Terms of Service
{% capture content %}
{% include_relative my-storage-tos.md %}
{% endcapture %}
{{ content | split: "---" | last }}