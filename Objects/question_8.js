let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/*
let copyObj = function (object1, array = []) {
  if (array.length > 0) {
    let createdObject = {}
    for (array in object1) {
      Object.assign(createdObject,object1[array]);
    }
    return createdObject
  } else {
    return Object.assign({}, object1);
  }
}; 

** Too much overthinking in the if statement. Need to practice writing more 
** straightforward functions.
** see solution below
*/

function copyObj(sourceObject, keys) {
  let destinationObject = {}; //create empty object to be copied with assign or filled from keys

  if (keys) { //simple if statement to check if keys is present and do some work if so
    keys.forEach(function(key){
      destinationObject[key] = sourceObject[key]; //Populate the key-value pairs of destination object with source keys
    });

    return destinationObject;

  } else {
    return Object.assign(destinationObject, sourceObject); //If no keys, copy sourceObject to empty destinationObject
  }
};


let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

