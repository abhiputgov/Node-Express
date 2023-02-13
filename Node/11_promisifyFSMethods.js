//util file to alternative to the default promise wrapper
const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const firstText = await readFile('./content/first.txt', 'utf-8');
    const secondText = await readFile('./content/second.txt', 'utf-8');
    await writeFile(
      './content/promisifyCompleteText.txt',
      `This is promisifed with ${firstText} and ${secondText}`,
      { flag: 'a' },
    );
    console.log(firstText, secondText);
  } catch (err) {
    console.log(err);
  }
};

start();
