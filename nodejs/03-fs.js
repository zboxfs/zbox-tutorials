/*
 * This tutorial shows basic file system operations in Zbox.
 */

const Zbox = require('@zbox/nodejs');

(async function run() {
  // create a Zbox instance
  const zbox = new Zbox();

  // initialise Zbox environment and turn on debug logs
  await zbox.initEnv({ log: { level: 'debug' } });

  // open the repo
  var repo = await zbox.openRepo({
    uri: '[your_repo_uri]',
    pwd: 'secret password',
    opts: { create: true }
  });

  // get repo metadata
  let info = await repo.info();
  console.log(info);

  // create test file and dir
  let file = await repo.createFile('/file');
  await file.close();
  await repo.createDir('/dir');

  // check if path exists
  let result = await repo.pathExists('/dir');
  console.log(result);

  // get metadata of a path
  let metadata = await repo.metadata('/dir');
  console.log(metadata);

  // copy file
  await repo.copy({ from: '/file', to: '/file_copy' });

  // rename file
  await repo.rename({ from: '/file', to: '/file_new' });

  // remove test file and dir
  await repo.removeFile('/file_new');
  await repo.removeFile('/file_copy');
  await repo.removeDir('/dir');

  // close repo and exit Zbox
  await repo.close();
  await zbox.exit();
})();
