---
layout: post
title:  "Getting setup with Namecheap and Github"
category: "how to"
tags:
  - tech
date: "2016-03-25"
---

I thought it was only appropriate for a first post to explain and point to resources that got me stared with my custom domain using namecheap and gh-pages.

I used [Namecheap][namecheap-help] help and [github][github-pages] help sections throughout the setup.

Pointing your domains to a gh-pages branch requires the following steps.

**As Followed**:

1. Create A records on Namecheap with the following Github IPs **192.30.252.153** and **192.30.252.154**.
2. Change CNAME alias on Namecheap to username.github.io. (username insert-yours)
3. Remove URL record if it's there
4. Just wait it could take up to 30 minutes for changes to propogate.

[namecheap](https://namecheap.com)

[namecheap-help](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages)

[github-pages](https://pages.github.com/)
