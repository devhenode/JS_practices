const fs = require('fs');

const readStream = fs.createReadStream('./docs/long_blog.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/new_blog1.txt');


readStream.on('data', (chunk) => {
  console.log("------ NEW CHUNK -----");
  console.log(chunk);

  writeStream.write('\nNEW CHUNK\n')
  writeStream.write(chunk);
});

// short code to still do the above

readStream.pipe(writeStream)