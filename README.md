﻿Pages : &nbsp;
 • ReadMe &nbsp;
 • [API Doc](./docs/apidoc.md) &nbsp;
 • [Notes](./docs/notes.md) &nbsp;
 • [ChangeLog](./docs/changelog.md) &nbsp;
 • [License](./docs/license.md)

# Terminal.js &nbsp; <sup><sub>v0.2.9.7~ &nbsp; <sup><sup>20210507°1733~</sup></sup></sub></sup>

Below :
 • [Synopsis](#synopsis)
 • [Usage](#usage)

<a name="synopsis"></a>
## Synopsis

Slogan : Terminal.js is a JavaScript library to provide a terminal in the browser.

License : The MIT License

Status : Under overhaul.

_The present fork is by Norbert C. Maier 2019 - 2021._

This are the **changes** compared to the
 [original project](https://github.com/eosterberg/terminaljs) :

- Integrate **`beep.mp3`** as base64 variable.
   Pro: No more external link for beeping.
   Con: Breaks IE<10

- Adjust coding and documentation **style** to my personal taste

- Build it with [Closure Compiler](https://developers.google.com/closure/compiler/) in **advanced mode**

- Refactor **key codes** (inspired by pull request [#12](https://github.com/eosterberg/terminaljs/pull/12))

- Integrate **XHR** feature (after pull request [#11](https://github.com/eosterberg/terminaljs/pull/11)).
  Not yet tested.

- Rename repository branch 'master' to '**main**'

- Input prompt (by dynamically created CSS rules)

I have stirred the code violently but kept it **backward-compatible**.
 Just replace your old by the new [`terminal.js`](./terminal.js)
 or by [`terminal.min.js`](./terminal.min.js) — Bingo (hopefully).

The project got a bit inflated with files. Don't let this distract you.
 All that matters and all you need, is one single file: `terminal.js`.

<a name="usage"></a>
## Usage

Include `terminal.js` or `terminal.min.js` into your page header.
The both operate equal, except for debugging.
As a user, you prefer the minified version, which looks like this&nbsp;:

```
   <head>
      <script src="terminaljs/terminal.min.js"></script>
   </head>
```

As a developer, you prefer the source version :

```
      <script src="terminaljs/terminal.js"></script>
```

Now Terminal.js is ready to operate, and you can call it in the page's body.

<a name="usage_simple"></a>
##### Simple Use Case

*<span style="color:LightGray;">.. Todo: Fill in content. ..</span>*

&nbsp;

<a name="usage_advanced"></a>
##### Advanced Use Case

*<span style="color:LightGray;">.. Todo: Fill in content. ..</span>*

&nbsp;

---

<sup><sub>*project 20190208°1711 file 20190213°0211*</sub></sup>
