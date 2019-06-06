/*
 * This tutorial shows basic directory operations in Zbox.
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

    // create a dir
    repo.create_dir("/dir").unwrap();

    // recursively create a nested directory
    repo.create_dir_all("/foo/bar/baz").unwrap();

    // list root dir
    let root = repo.read_dir("/").unwrap();
    println!("{:?}", root);

    // list /foo dir
    let foo = repo.read_dir("/foo").unwrap();
    println!("{:?}", foo);

    // remove an empty dir
    repo.remove_dir("/dir").unwrap();

    // remove a dir and all its children
    repo.remove_dir_all("/foo").unwrap();
}
