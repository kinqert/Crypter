const fs = require('fs');

const filename = "test";

const currentDate = Date.now();
const hexString = currentDate.toString(16);
const buffer = Buffer.from(hexString, 'hex');

fs.writeFileSync(filename, buffer);
console.log('Saved buffer with current date to data.txt');

try {
  const buffer = fs.readFileSync(filename);
  const hexString = buffer.toString('hex');
  console.log('Saved hexadecimal representation:', hexString);

  const dateNumber = parseInt(hexString, 16); // Optional: Convert back to number
  if (dateNumber) {
    const date = new Date(dateNumber);
    console.log('Original date:', date);
  }
} catch (error) {
  console.error('Error reading file:', error);
}