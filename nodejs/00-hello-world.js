/*
 * This tutorial shows how to write and read a simple "Hello, World!" file
 * using Zbox.
 */

const Zbox = require('@zbox/nodejs');

(async function run() {
  // create a Zbox instance
  const zbox = new Zbox();

  // initialise Zbox environment and turn on debug logs
  await zbox.initEnv({ logLevel: 'debug' });

  // open the repo
  var repo = await zbox.openRepo({
    uri: '[your_repo_uri]',
    pwd: 'secret password',
    opts: { create: true }
  });

  // create a file
  var file = await repo.createFile('/hello_world.txt');

  // write content to file
  await file.writeOnce('Hello, World!');

  // seek to the beginning of file
  await file.seek({ from: Zbox.SeekFrom.Start, offset: 0 });

  // read all content as string
  const str = await file.readAllString()
  console.log(str);

  // close file, repo and exit Zbox
  await file.close();
  await repo.close();
  await zbox.exit();
})();
