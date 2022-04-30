# caniphp.com

caniphp.com is like caniuse.com but for PHP features. It's a simple search of
PHP features that tells you when features were added, deprecated and removed.

It's built with:
 - [AlpineJS](https://alpinejs.dev)
 - [TailwindCSS](https://tailwindcss.com)
 - (Ironically) ZERO PHP was used.

## Setup and build

If you want to contribute there is a very simple build process that will hopefully stand the test of time.

Start by:

* Cloning the repository
* Running `npm install`

Then to build the CSS using Tailwind you can either:

* `./build.sh` for a one off build or
* `./watch.sh` to run a file watcher

There is no hot reloading or anything like that.

## Contributing

I don't plan changing this tool much. But I'm aware that the feature list is not
complete and the design needs work (this is not a strength of mine).

So I'm happy to take PR's to add PHP features or improve the design.

I'd also love PRs to add translations. Maybe contact me first or open an issue if you want to do that so we can discuss a structure.

### Adding PHP features

I am manually curating the list of features and related content here. And I'd love for people to help by PR-ing additions.

PHP features are listed in `features.js`. Hopefully the format of this makes sense. But
for reference

* the whole thing is a JSON array
* each entry is an object with the following properties:
  * `name`: The name of the feature - plain text only
  * `description`: A description of the feature - HTML is allowed, but may not be styled. `<code>` tags are fine.
  * `keywords`: An array of strings. These are used when searching, so add strings that people may use to search for this feature.
  * `added`: A string for the version of PHP that the feature was added. Must be in the format `X.Y`, e.g. `7.0`. Use `0.0` if this is not known or appropriate.
  * `deprecated`: A string for the version of PHP that the feature was deprecated. Must be in the format `X.Y`, e.g. `8.0`. Use `null` if this is not know or appropriate.
  * `removed`: A string for the version of PHP that the feature was removed. Must be in the format `X.Y`, e.g. `8.2`. Use `null` if this is not know or appropriate.
  * `resources`: This is an array of objects representing links to documentation or articles about the feature. Each link object has the following properties:
    * `name`: The title of the link
    * `url`: The URL of the link
