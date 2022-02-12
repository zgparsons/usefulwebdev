---
title: bulma
safeTitle: Bulma
description: Bulma is a free, open source CSS framework based on Flexbox and used by more than 200,000 developers.
date: 2022-02-12
tags:
  - CSS Framework
  - DevSites
layout: layouts/post.njk
image: /img/bulma.png
alt: Bulma Homepage capture
icon: bulma
site: https://bulma.io
---

<div class="box">

## Open source CSS framework

Originally Posted: {{ date | readableDate }}

<figure class="image">
<img alt="{{ alt }}" src="{{ image }}" >
</figure>



> {{ description }}
>
> <cite>&mdash; {{ safeTitle }} homepage</cite>

## Bulma CSS

Before we talk about Bulma, we first need to introduce the concept of CSS Frameworks. There are lots of examples of CSS Framework available, and Bulma is one of these.

A CSS Framework is usually a set of pre-written CSS elements which developers can use to increase their productivity and build effective user interfaces in a shorter amount of time than usual. In this way a CSS Framework is a form of abstraction for web developers, allowing them to style their HTML quicker than by just using regular CSS.

This post will be about Bulma specifically, and will introduce the framework and give some of its key features. Bulma is one example out of many available CSS Frameworks. There will be some examples of the framework and how it is distinct from other similar CSS frameworks. Bulma is good choice for a CSS framework, and this post will explore why.

### What is Bulma CSS Framework?

Bulma is an open source CSS framework. It is free to use, and is a popular alternative to Bootstrap and Foundation. Bulma describes itself as a ‘CSS Library’, and says of itself:

> “it provides CSS classes to help you style your HTML code.”

Bulma is class-based and allows developers to create standard User Interface (UI) elements more quickly and efficiently than they would be able to with standard CSS.

Because Bulma is open source you can view the project’s code on GitHub in the [Bulma repository](https://github.com/jgthms/bulma).

Bulma is built using [CSS’s flexbox principles](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

>💡 Flexbox is a layout module within CSS which aims to more efficiently lay out, align or distribute items (or the space around those items) within a container.
>
>💡 It is ‘flexible’ because it aims to do this even when the item’s, and the container’s, sizes are unknown or can change.
>
>💡 All modern websites and apps should be built in a flexible manner to allow for different screen sizes and use cases.

CSS is a fantastically flexible language, which can be used to create massively different user experiences. Often similar user experiences are required for lots of different projects though. Bulma, as a CSS framework, allows the developer to get a more predictable and useful outcome without needing to rewrite CSS classes for each new project they work on.

### Reasons to Use Bulma

Developers will typically use the Bulma CSS framework to save time while styling their HTML elements. There are other reasons to use Bulma instead of one of the other freely available CSS frameworks available. Let’s explore some of those reasons here.

1. **Simplicity and efficiency**
    
    Bulma is built to be simple, it is only CSS after all. This means that it comes with a short initial learning curve. If you have some experience with HTML and CSS then you’re likely understand what is going on and how it can be used to your advantage. Bulma can be easily added to any web development project, though it is best used from the outset. Using Bulma may have the effect of drastically shortening a site’s design process for example.
    

2. **Modular framework and flexible library of components**
    
    Flexibility - Part of Bulma’s simplicity is that it is modular in nature. Usually a CSS framework, or design system, might include thousands of lines of CSS. This is fine for a large site with lots of different page styles, but it may not be ideal for a small, and simply designed site, or for an initial MVP for example. In situations like this Bulma can be used in a [modular](https://bulma.io/documentation/overview/modular/) fashion - meaning you can include only the parts of the framework that you need. This really adds to the flexibility of Bulma and it means it can be capable in many different situations.
    
    It does this by providing the developer with a set of Sass files. Sass is a CSS pre-processor. Each of these files ‘just work’. If you only need to add the capability to include columns, then all you need to do is include the utilities file, and the columns file. Which means only these lines:
    
    ```css
    @import "bulma/sass/utilities/_all.sass"
    @import "bulma/sass/grid/columns.sass"
    ```
    

3. **Completely responsive**
    
    It is no big secret that a huge number of people now access the services they use, and the internet in general, with their phones and smaller devices. Bulma takes this in to account very well, and handles everything really efficiently, as any modern CSS framework should.
    

4. **Development framework agnostic**
    
    Bulma is designed to consistently work well in any development environment. It can be used with popular development environments like React, Angular, Vue in JavaScript or Django and Flask in Python, with static site generators like Gatsby and Eleventy and with simple HTML files. Bulma does not rely on JavaScript, or another specific programming language or environment. As a comparison the Bootstrap CSS framework is bundled with JavaScript files which it uses for some functionality like modals or menus for example. Bulma is less opinionated about how you create interactive content, and focuses purely on style instead.
    
    
5. **A resource trusted by many Developers**
    
    Because it can be used with any development framework, static site generator (or simple HTML), Bulma is used and trusted by tens of thousands of web developers for their projects.
    The Bulma GitHub repository currently has more than 45,000 stars on GitHub⭐.

</div>

---