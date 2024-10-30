// OS Module
const os = require('os');

var x = os.totalmem();
var y = os.freemem();

 console.log('Total memory: ' + x);
 console.log('Free memory: ' + y);

//Template string

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Total Memory: ${freeMemory}`);