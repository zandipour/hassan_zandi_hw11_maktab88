const fs = require("fs");
var userData ;
// const { text } = require("stream/consumers");

fs.writeFile('text.txt', 'Hello maktab', function (err) {
    if (err) throw err;
    // console.log('created successfully.');
    fs.appendFile("text.txt", "\n hassan zandipour", (err) => {
        if (err) console.log("error ==>", err);
        // else console.log("adding succesfully");
    });
});



fs.writeFile('second-text.txt', 'maktab88.nodejs', function (err) {
    if (err) throw err;
    // console.log('created successfully.');
});

// try {
//     if (fs.existsSync('second--text.txt')) {
//         console.log("file exists");
//     }
// } catch (err) {
//     console.error(err)
// }

fs.exists("text.txt", (doseExist) => {
    // if (doseExist) console.log("file exist");
    // else console.log("file not exist");
});


fs.readFile("./user-data.json", "utf8", (err , data)=>{
if (err) console.log("error==>" , err);
else userData = data;
console.log(userData);

})

// const over18 = userData.filter(item => 
  
//     item.age > 18
   
// )
// console.log(over18);




