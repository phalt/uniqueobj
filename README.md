# objSet

Given an iterable of objects, return a unique list of the objects. You define how each object is identified with a callback.

## Install

```sh
npm install objSet
```

## Usage

```js
import objSet from 'objSet';

// just use the `id` value in each object to identify it
uniqueResults = objSet(allResults, (obk) => obj.id);

// Do something a bit more complicated
uniqueResults = objSet(allResults, myComplicatedHashFunc);
```

## License

GNU GPL V3
