const zlib = require("zlib"); 

module.exports.decodeStr = (bpStr) => {
    if(!bpStr || bpStr.length <= 1){
        return null;
    }
    const bpDecoded = Buffer.from(bpStr.substring(1), 'base64');
    const bpmDecodeInflated = zlib.inflateSync(bpDecoded);
    return JSON.parse(bpmDecodeInflated.toString('utf-8'));
}

module.exports.encodeJson = (bpJson) => {
    let deflated = zlib.deflateSync(JSON.stringify(bpJson), { level: 9 });
    return "0" + deflated.toString('base64');
}

module.exports.listEntities = (bpStr) => {
    const bpObj = this.decodeStr(bpStr);
    if(!bpObj.blueprint || !bpObj.blueprint.entities){
        return null;
    }
    let entities = {};
    bpObj.blueprint.entities.forEach(entity => {
        if(!entities[entity.name]){
            entities[entity.name] = 1;
        } else {
            entities[entity.name] = entities[entity.name] + 1;
        }
    });
    return entities;
}