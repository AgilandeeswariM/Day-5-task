1. For the given JSON iterate over all for loops(for, for in, for of, forEach)

var json = [{
    "name" : "agila", 
    "place" : "chennai",
    "task" : "day 5",
    "mail": "theagi1340@gmail.com"
},
{
    "id" : "agilandeeswari", 
    "place" : "chennai",
    "task" : "day 5",
    "mail": "theagi13406@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.place);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.place); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].place);
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);