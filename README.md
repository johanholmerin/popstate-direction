# Popstate direction events

Emits `forward` and `back` events on popstate. Completely transparent,
preserves all History functionality and works with `location.hash`. Follows the
same semantics as popstate.

## Installation

```sh
# Yarn
yarn add popstate-direction

# npm
npm install popstate-direction
```

## Usage

The library must be included before any call to `history.pushState` or
`history.replaceState`, before setting `location.hash`, or accessing
`history.state`.

```javascript
import 'popstate-direction';

window.addEventListener('forward', event => {
  console.log(event, history.state);
});
window.addEventListener('back', event => {
  console.log(event, history.state);
});
```

## Compatibility

Written in ES6. If transpiled should work in all browsers that support the
History API.
