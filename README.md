# pick-object-alias
pick and rename the key composition a new object

## demo
```javascript
pick({a:1,b:'hello',c:'car'},['a'])
//return { a: 1 }

pick({a:1,b:'hello',c:'car'},['d'])
//return { d: undefined }


pick({a:1,b:'hello',c:'car'},['b','mycar as c'])
//return { b: 'hello', mycar: 'car' }

```