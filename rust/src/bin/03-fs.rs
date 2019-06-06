/*
 * This tutorial shows basic file system operations in Zbox.
 */

extern crate zbox;

use zbox::{init_env, RepoOpener};

fn main() {
    // initialise zbox environment, called first
    init_env();

    // create and open a repository
    let mut repo = RepoOpener::new()
        .create(true)
        .open("[your_repo_uri]", "secret password")
        .unwrap();

    // get repo metadata
    let info = repo.info().unwrap();
    println!("{:?}", info);

    // create test file and dir
    repo.create_file("/file").unwrap();
    repo.create_dir("/dir").unwrap();

    // check if path exists
    let result = repo.path_exists("/dir").unwrap();
    println!("{}", result);

    // get metadata of a path
    let metadata = repo.metadata("/dir").unwrap();
    println!("{:?}", metadata);

    // copy file
    repo.copy("/file", "/file_copy").unwrap();

    // rename file
    repo.rename("/file", "/file_new").unwrap();

    // remove test file and dir
    repo.remove_file("/file_new").unwrap();
    repo.remove_file("/file_copy").unwrap();
    repo.remove_dir("/dir").unwrap();
}
