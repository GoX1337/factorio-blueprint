# factorio-blueprint

## Example:
```javascript
const bp = require('./index.js');

const bpStr = "..."; // your factorio blueprint string

const bpObj = bp.decodeStr(bpStr);
const bpEncodedStr = bp.encodeJson(bpObj);
console.log(bpStr === bpEncodedStr); // ==> print true

console.log(bp.listEntities(bpStr));
/*
{ 'transport-belt': 81,
  'fast-transport-belt': 22,
  'fast-splitter': 2,
  'fast-inserter': 64,
  'assembling-machine-2': 14,
  'medium-electric-pole': 14,
  'logistic-chest-requester': 6,
  inserter: 25,
  pipe: 4,
  'logistic-chest-passive-provider': 3,
  'pipe-to-ground': 12,
  'underground-belt': 16,
  'wooden-chest': 2,
  'assembling-machine-1': 4 }
*/
```
