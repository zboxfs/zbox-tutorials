extern crate zbox;

use std::io::{Read, Write, Seek, SeekFrom};
use zbox::{init_env, RepoOpener, OpenOptions};

fn main() {
    // initialise zbox environment, called first
    init_env();

    // create and open a repository
    let mut repo = RepoOpener::new()
        .create(true)
        .open("[your_repo_uri]", "secret password")
        .unwrap();

    // create and open a file for writing
    let mut file = OpenOptions::new()
        .create(true)
        .open(&mut repo, "/hello_world.txt")
        .unwrap();

    // use std::io::Write trait to write data into it
    file.write_all(b"Hello, World!").unwrap();

    // finish writing to make a permanent content version
    file.finish().unwrap();

    // seek to start of file and read content using std::io::Read trait
    let mut content = String::new();
    file.seek(SeekFrom::Start(0)).unwrap();
    file.read_to_string(&mut content).unwrap();
    assert_eq!(content, "Hello, World!");
}
