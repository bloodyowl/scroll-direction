# scroll-direction

[![browser support](https://ci.testling.com/bloodyowl/scroll-direction.png)
](https://ci.testling.com/bloodyowl/scroll-direction)

## install

```sh
$ npm install bloody-scroll-direction
```

## require

```javascript
var scrollDir = require("bloody-scroll-direction")
```

## api

### `scrollDir.create() > s`

creates a `scrollDir` instance and starts listening to the scroll event.

### `scrollDir.destroy()`

stops listening to the scroll event.

### `scrollDir.on("change", callback)`

let `callback` be notified when the scroll direction changes.

a `data` object is passed to `callback`, containing to properties :

#### `offset`

scroll value

#### `direction`

- `1` if the scroll goes forward
- `-1` if the scroll goes backward
