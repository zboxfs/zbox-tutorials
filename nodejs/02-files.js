/*
 * This tutorial shows basic file operations in Zbox.
 */

const Zbox = require('@zbox/nodejs');

(async function run() {
  // create a Zbox instance
  const zbox = new Zbox();

  // initialise Zbox environment and turn on debug logs
  await zbox.initEnv({ debug: true });

  // open the repo
  var repo = await zbox.openRepo({
    uri: '[your_repo_uri]',
    pwd: 'secret password',
    opts: { create: true }
  });

  var file;

  // --------------------------------------------
  // create a file and write/read string
  // --------------------------------------------
  file = await repo.createFile('/file.txt');

  // write string to file, this will create a permanent version
  await file.writeOnce('Zbox is awesome!');

  // seek to the beginning of file
  await file.seek({ from: Zbox.SeekFrom.Start, offset: 0 });

  // read all string content
  const str = await file.readAllString()
  console.log(str);

  // close file
  await file.close();

  // --------------------------------------------
  // create a file and write/read binary
  // --------------------------------------------
  file = await repo.createFile('/file.bin');

  // write binary to file, this will create a permanent version
  const buf = new Uint8Array([1, 2, 3]);
  await file.writeOnce(buf.slice());

  // seek to the beginning of file
  await file.seek({ from: Zbox.SeekFrom.Start, offset: 0 });

  // read all binary content
  const result = await file.readAll();
  console.log(result);

  // close file
  await file.close();

  // --------------------------------------------
  // remove files
  // --------------------------------------------
  await repo.removeFile('/file.txt');
  await repo.removeFile('/file.bin');

  // close repo and exit Zbox
  await repo.close();
  await zbox.exit();
})();