'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

    sum: (arr, base) => {
        var result = arr.reduce(function(a, b) {
            return a + b;
        }, base);
        return result;
    },

    someObjsContainProp: (arr, prop) => arr.some(function(element) {
        return element.hasOwnProperty(prop);
    }),



    convertNameArrayToObject: (arr) =>
        arr.map(function(element) {
          let obj = {};
          obj.first = element[0];
          obj.last = element[1];
          return obj;
        }),


    objContainsProp: (arr, prop) =>
    arr.every(function(element) {
      return element.hasOwnProperty(prop);
    }),



    stringMatch: (arr, str) =>
        arr.filter(function(element) {
          return element.includes(str);
        }),
      };
