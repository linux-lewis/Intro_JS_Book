let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});


for (let key in myObj) {
  console.log(key);
}

/* 
** The two snippets of code will both output the keys of myObj however, in the second snippet,
** the for/in loop iterates and outputs all the keys of myObj prototype (myProtoObj). This can be
** avoided by adding a conditional statement to check if the key is myObj's own property 
** (myObj.hasOwnProperty(key))
*/