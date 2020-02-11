# uniqueObj

Given an iterable of objects, return a unique list of the objects. You define how each object is identified with a callback.

## Install

```sh
npm install uniqueObj
```

## Usage

### `uniqueObj([iterable,], callBack)`

Takes an iterable of `Object`.

`callBack` will be called against each item in the iterable to determine it's uniqueness. Here you can hash the object, or do any logic to determine the uniqueness of it.

```js
import uniqueObj from 'uniqueObj';

// just use the `id` value in each object to identify it
uniqueResults = uniqueObj(allResults, (obk) => obj.id);

// Do something a bit more complicated
uniqueResults = uniqueObj(allResults, myComplicatedHashFunc);
```

## License

GNU GPL V3
