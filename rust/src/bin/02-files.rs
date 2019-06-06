/*
 * This tutorial shows basic file operations in Zbox.
 */

extern crate zbox;

use std::io::{Read, Seek, SeekFrom};
use zbox::{init_env, RepoOpener};

fn main() {
    // initialise zbox environment, called first
    init_env();

    // create and open a repository
    let mut repo = RepoOpener::new()
        .create(true)
        .open("[your_repo_uri]", "secret password")
        .unwrap();

    // --------------------------------------------
    // create a file and write/read string
    // --------------------------------------------
    {
        let mut file = repo.create_file("/file.txt").unwrap();

        // write string to file, this will create a permanent version
        file.write_once(b"Zbox is awesome!").unwrap();

        // seek to the beginning of file
        file.seek(SeekFrom::Start(0)).unwrap();

        // read all string content
        let mut content = String::new();
        file.read_to_string(&mut content).unwrap();
        println!("{}", content);
    }

    // --------------------------------------------
    // create a file and write/read binary
    // --------------------------------------------
    {
        let mut file = repo.create_file("/file.bin").unwrap();

        // write binary to file, this will create a permanent version
        file.write_once(&[1u8, 2u8, 3u8]).unwrap();

        // seek to the beginning of file
        file.seek(SeekFrom::Start(0)).unwrap();

        // read all binary content
        let mut content = Vec::new();
        file.read_to_end(&mut content).unwrap();
        println!("{:?}", content);
    }

    // --------------------------------------------
    // remove files
    // --------------------------------------------
    repo.remove_file("/file.txt").unwrap();
    repo.remove_file("/file.bin").unwrap();
}
