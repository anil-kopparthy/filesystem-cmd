const fs = require('fs');

// const book = {
//   title: 'Principles of life',
//   author: 'Anil Kumar'
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// data.forEach(book => console.log(`title: ${book.title}`));

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
const newData = {
  ...data,
  name: 'Anil',
  age: 26
};
fs.writeFileSync('1-json.json', JSON.stringify(newData));
