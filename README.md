# Express JS and ExtJS

### Explanation

This repo demonstrates how to connect [expressjs](http://expressjs.com/) api endpoints with an [extjs](http://docs.sencha.com/extjs/6.0/) frontend.

API routes are defined in `server.js`. The frontend consumes these routes in the `public/Bookmarks/app/view/main/Main.js` view.

### How To Run

1. Clone this repo to your filesystem
2. Copy over ext components into the `public/Bookmarks` folder.  You will need (these directories were excluded from version control to save space):
    - `Bookmarks/.sencha` dir
    - `Bookmarks/ext` dir
3. Run `$ npm i` from the repo root.  Run `$ node server.js` to start the express instance.
4. cd into the `public/Bookmarks` folder, and run `$ sencha app watch` to build the frontend.
5. App will be available on localhost:3000 (by default)
6. Profit

### WIP

More coming soon.  This repo is based on this blog post: [http://elmasse.github.io/nodejs/using-jwt-with-extjs.html](http://elmasse.github.io/nodejs/using-jwt-with-extjs.html)

### CommonJS Modules

The [CommonJS Spec](http://wiki.commonjs.org/wiki/Modules) prescribes methods for requiring modular javascript class files (dependency injection).  The CommonJS module system keeps variables you declare in a module private unless you explicitly make them public by assigning to ```module.exports```.  Node applications have an entry point that's specified when executing a Node process.  To load other pieces of code, you use the <pre>require</pre> function.  This function accepts a path and loads the module in that location.  The path can be:

- A relative path to the script you are requiring from (e.g., `var myModule = require('./lib/myModule'))
- A path to a directory.  In this case, Node will look for an index.js in the directory specified
- An absolute path (used very rarely)
- The name of a package, for example, ```var async = require('async')```.  [Async](https://www.npmjs.org/package/async) is a system Node module.  Other common ones include [http](https://www.npmjs.org/package/http), [fs](https://www.npmjs.org/package/fs), [express](https://www.expressjs.com), etc.

##### Run ```grunt``` from the root of this repo to build modules located in the ```lib/modules``` directory, and take a look at the Gruntfile.js to see just what's going on.

