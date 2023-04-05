/* This is a JavaScript code that defines an array of objects called `links`. Each object has two
properties: `name` and `to`. The `name` property represents the name of a link, while the `to`
property represents the URL that the link points to. The `export default` statement at the end of
the code exports the `links` array as the default export of the module, which can be imported and
used in other parts of the application. */
const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Listing",
    to: "/listing",
  },
  {
    name: "login",
    to: "/login",
  },
];

export default links;
