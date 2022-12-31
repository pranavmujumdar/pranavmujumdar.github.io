---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
I am a UX Engineer, I write code in ReactJS and Django for my work at <a href="https://www.addgene.org/" target="_blank" rel="noopener">Addgene</a>, and as a member of the product team I work on various design projects to create mock-ups and wireframes using Figma. My evenings are spent cooking and practicing guitar. On weekends, you'll find me one-wheeling around Jamaica Plain or in an improv session if there is one nearby.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>