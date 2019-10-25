//npm turorial

//one of Node modules
//moment - data and time formats

//uniq - prints only unique elements, when there are many same

//calling moment module library
var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var myCoolDate = moment(myDate).format('LL');//moment format call command

var myList = [1,2,1,1,1,3,3,4,5,6,4,4,7];
var myUniqueList = unique(myList);

console.log(myCoolDate);//Tue Oct 22 2019 20:57:42 GMT+0200 (czas środkowoeuropejski letni)
console.log(myUniqueList);

//use browserfiy.com to make it run, or webpack
//use this command
//browserify main.js -o bundle.js //where main.js is name of your .js file, can be any name.js
                                  //bundle.js also can have another name

//then have to add bundle.js or other name you created to index.html file
//<script src="bundle.js"></script>

//after add another module, need to use browserify main.js -o bundle.js command
//again, there is some way to make it automatically,
//but here need to be done manually every time
