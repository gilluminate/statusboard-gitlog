# Status Board Git Log

By the power of node.js, this script converts a git log into html for consumption by Status Board by Panic.

## Usage

Pass two parameters, the path to the repo you want to output the logs from and the path to the output file which you will be pointing your Status Board to.

```
node index.js path/to/git/repo/ path/to/output/gitlog.html
```

## Caveat

You will be responsible for publishing the output file. I like to set mine to a file inside of my Google Drive directory, and share it to the public, which essentially publishes it to the world. Then I point my Status Board to that public URL.

[More info](https://developers.google.com/drive/web/publish-site#using_the_webviewlink)

## Sample Cron job
This example sets the file to run every 20 minutes from 8am—5pm on weekdays only.

`*/20 8-18 * * 1-5 node $HOME/scripts/statusboard-gitlog/index.js path/to/git/repo/ path/to/output/gitlog.html`

## Note

This script is repo agnostic. It doesn't care if your repo is hosted on github, atlassian, or your mom's basement. It uses the locally fetched log to work its magic.

## license

[DBAD](http://www.dbad-license.org/)
