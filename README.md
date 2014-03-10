# Status Board Git Log

By the power of node.js, this script converts a git log into html for consumption by Status Board by Panic.

## Usage

Pass two parameters, the path to the repo you want to output the logs from and the path to the output file which you will be pointing your Status Board to.

```
node index.js path/to/git/repo/ path/to/output/gitlog.html
```

## Note

You will be responsible for publishing the output file. I like to set mine to a file inside of my Google Drive directory, and share it to the public, which essentially publishes it to the world. Then I point my Status Board to that public URL.

[More info](https://developers.google.com/drive/web/publish-site#using_the_webviewlink)

## license

[DBAD](http://www.dbad-license.org/)
