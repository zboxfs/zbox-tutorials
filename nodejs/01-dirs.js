/*
 * This tutorial shows basic directory operations in Zbox.
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

  // create a dir
  await repo.createDir('/dir');

  // recursively create a nested directory
  await repo.createDirAll('/foo/bar/baz');

  // list root dir
  const root = await repo.readDir('/');
  console.log(root);

  // list /foo dir
  const foo = await repo.readDir('/foo');
  console.log(foo);

  // remove an empty dir
  await repo.removeDir('/dir');

  // remove a dir and all its children
  await repo.removeDirAll('/foo');

  // close repo and exit Zbox
  await repo.close();
  await zbox.exit();
})();
