'use strict'

const uniqueObj = (objs, uniqueFunc) => {
    const uniqueResults = {};
    objs.forEach(obj => {
        const objId = uniqueFunc(obj);
        if (!(objId in uniqueResults)) {
            uniqueResults[objId] = obj;
        }
    });
    return Object.values(uniqueResults);
}

module.exports = uniqueObj;
