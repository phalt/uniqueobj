const uniqueobj = require('./index');

test('uniqueobj simple example', () =>{
    const allResults = [
        {'id': 1},
        {'id': 1},
        {'id': 2}
    ]
    expect(uniqueobj(allResults, obj => obj.id)).toEqual([
        {'id': 1},
        {'id': 2}
    ])
})
