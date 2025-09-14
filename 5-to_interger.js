const argument1 = parseInt(process.argv[2]);

if (isNaN(argument1)) {
    console.log('Not a number');
} else {
    console.log('My number: ' + argument1);
}