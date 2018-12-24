/**
 * pick and rename the key composition a new object
 * @param {object} obj
 * @param {array} keys[key1,key2...] the key to pick
 * @returns {object}
 */
module.exports = function (obj,keys) {
    if(!keys) return obj
    var result = {}
    var len = keys.length
    for(var i = 0; i < len; i++ ){
        var alias = keys[i].trim().split(/\s+as\s+/)
        var key, newKey, originValue
        if (alias.length === 2){
            key = alias[1]
            newKey = alias[0]
            originValue = obj[key]
            result[newKey] = originValue
        }else{
            key = alias[0]
            originValue = obj[key]
            result[key] = originValue
        }
    }
    return result
};
