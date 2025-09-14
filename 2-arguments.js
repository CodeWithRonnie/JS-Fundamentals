const args = process.argv.length - 0;

if (args === 0) {
  console.log('No argument');
} else if (args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found')};