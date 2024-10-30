const fs = require('fs');

// fs.writeFile('./abc.text', "My name is Manoj Gupta", function cb(err) {
//     console.log('Result', err);
// });

fs.readFile('./abc.text', 'utf-8', function cb(err, result) {
    if(err) console.log('Error', err);  
    console.log('Result:', result);
});
