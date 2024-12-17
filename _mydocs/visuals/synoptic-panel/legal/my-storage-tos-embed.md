---
layout:             page-no-nav
published:          true
unlisted:           true
toc:                false
---
{% capture content %}
{% include_relative my-storage-tos.md %}
{% endcapture %}
{{ content | split: "---" | last }}
<style>
    header, footer, .anchor-link, h2:before { display: none !important; }
    h2 { pointer-events: none !important; }
    .page-content h2:first-child { margin-top:0 !important; }
</style>