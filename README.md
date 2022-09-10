# leos-law
A blazing fast typed javascript library Inspired by Leonardo Dicaprio that checks if you should break up with your partner based on her age.
It is a simple javascript library that exports a function named `check` that returns `false` when the object passed to said function has a `age` property with a value that is more than or equal to `25`. 

## Getting started

1. Install the package using any of the following commands:

```bash
$: npm install leos-law --save-dev
$: pnpm install leos-law --save-dev
$: yarn add leos-law --save-dev
```

2. Import the function and use it

###### The Chad ESM way
```js
import leosLaw from 'leos-law'
let partner = { name: 'Gisele Caroline Bündchen', age: 25 } // not a const for obvious reasons

if( leosLaw.check(partner) === false ) console.log("babe, i'm breaking up with you. it's not you, you were poggers. it's me, i'm omegalul. im sorry if this is pepehands but it has to be done, i've just been feeling pepega and our relationship has been weirdchamp for months, it's time to end it, no kappa.") 
```


###### The BETA male CommonJS way
```js
const leosLaw = require('leos-law')
let partner = { name: 'Gisele Caroline Bündchen', age: 25 } // not a const for obvious reasons

if( leosLaw.check(partner) === false ) console.log("babe, i'm breaking up with you. it's not you, you were poggers. it's me, i'm omegalul. im sorry if this is pepehands but it has to be done, i've just been feeling pepega and our relationship has been weirdchamp for months, it's time to end it, no kappa.") 
```
