var pick = require('./index')
var test
test= pick({a:1,b:'hello',c:'car'},['a'])
console.log(test)

test= pick({a:1,b:'hello',c:'car'},['d'])
console.log(test)

test = pick({a:1,b:'hello',c:'car'},['b','mycar as c'])
console.log(test)

