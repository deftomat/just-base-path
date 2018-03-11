# Just Location Base

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
import { getBase, getBasePath } from "just-location-base";

const base = getBase(); // "http://localhost/dashboard"
const basePath = getBasePath(); // "/dashboard"
```

## Additional info

Both functions will cache a returned value to avoid querying a base tag multiple times
as it's quite unusual to change a base during an application life.
However, to clear the cache, you can use:

```
const base = getBase({ clearCache: true });
const basePath = getPathBase({ clearCache: true });
```
