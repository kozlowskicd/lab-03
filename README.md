[![Build Status](https://travis-ci.com/kozlowskicd/lab-03.svg?branch=master)](https://travis-ci.com/kozlowskicd/lab-03)
# Lab 03 - Read and Write to Files
This lab can write to a single file, and retrives data from single or multiple files using either callbacks or promises.

## Operational Instructions
### File Reader
From the command line, type <code>node edit-file.js ./files/test.txt</code> and press Enter.

### File Readers
In index.js, there are four declarations for which type of file reader to use.  Uncomment the one to be ran.  Available readers:

reader.js - Read 3 files with callbacks.
reader-callbacks-extended.js - Read any number of files with callbacks.
reader-promises.js - Read 3 files with promises.
reader-promises-all.js - Read and number of files with promises.

From the command line, type <code>node index.js ./files/1.txt ./files/2.txt ./files/3.txt</code>.  Include as many or as few files as desired.