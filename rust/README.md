# Zbox Rust Tutorials

These tutorials show how to use Zbox in Rust.

To use these tutorials, follow these steps:

1. Create a repo on [zbox.io] and copy its URI

2. In each tutorial rs file, replace `[your_repo_uri]` with your repo's URI

3. Turn on debug logs:

   ```sh
   export RUST_LOG=zbox=debug
   ```

   and run the tutorial. For example,

   ```sh
   cargo run --bin 00-hello-world
   ```

## Tutorial List

1. [Hello World](00-hello-world.rs)

   How to write and read a simple `Hello, World!` file using Zbox.

2. [Directory operations](01-dirs.rs)

   Basic directory operations, such as create, list, remove and etc.

3. [File operations](02-files.rs)

   Basic file operations, such as create, read/write, remove and etc.

4. [File system operations](03-fs.rs)

   Basic file system operations, such as metadata, copy, rename and etc.


[zbox.io]: https://zbox.io
