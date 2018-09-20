# Just Location Base

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A simple package which returns a location base and base path.

## Why

When you add `<base href="/dashboard">` to your HTML,
it is quite tedious to get a base or base path inside your JS code.

## Installation

```
npm install just-location-base --save
```

or

```
yarn add just-location-base
```

## Usage

HTML:

```html
<head>
  <base href="/dashboard">
</head>
```

JavaScript:

```js
import { getBase, getBasePath } from 'just-location-base';

const base = getBase(); // "http://localhost/dashboard"
const basePath = getBasePath(); // "/dashboard"
```
