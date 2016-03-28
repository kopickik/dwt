# Express JS and ExtJS

### Explanation

This repo demonstrates how to connect express api endpoints with an extjs frontend.

API routes are defined in `server.js`. The frontend consumes these routes in the `public/Bookmarks/app/view/main/Main.js` view.

### How To Run

1. Clone this repo to your filesystem
2. Copy over ext components into the `public/Bookmarks` folder.  You will need (these were excluded from version control to save space):

- `Bookmarks/.sencha` dir
- `Bookmarks/ext` dir

3. Run `$ npm i` from the repo root.  Run `$ node server.js` to start the express instance.
4. cd into the `public/Bookmarks` folder, and run `$ sencha app watch` to build the frontend.
5. Profit!

### WIP
