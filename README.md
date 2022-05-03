# caniphp.com

[caniphp.com](https://caniphp.com/) is like caniuse.com but for PHP features. It's a simple search of PHP features that added, deprecated and removed in recent versions
of PHP (v5.6+).

This is NOT a list of ALL PHP features/functions/methods/classes and when they were
added/removed.

The tool is intended for developers who know a feature was added/removed in a
recent version of PHP and want to check which versions of the language the feature is
supported in.

I'm hand curating the information as there does not appear to be an easily machine-readable and definitive source. As such, not all features are added yet
and more will be added over time.

I would love you to pull-request any missing or incorrect data.

It's built with:

- [AlpineJS](https://alpinejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- (Ironically) ZERO PHP was used.

## Setup and build

If you want to contribute there is a very simple build process that will hopefully stand the test of time.

Start by:

- Cloning the repository
- Running `npm install`

Then to build the CSS using Tailwind you can either:

- `./build.sh` for a one off build or
- `./watch.sh` to run a file watcher

There is no hot reloading or anything like that.

## Contributing

I don't plan changing this tool much. But I'm aware that the feature list is not
complete and the design needs work (this is not a strength of mine).

So I'm happy to take PR's to add PHP features or improve the design.

I'd also love PRs to add translations. Maybe contact me first or open an issue if you want to do that so we can discuss a structure.

### Code style

Thanks to [@GenieTim](https://github.com/GenieTim) this project uses Prettier for
code style and formatting.

Please run `npm run prettier` to format code before submitting any PR.

I'm working on getting Git hooks to work and run this on commit.

### Adding PHP features

I am manually curating the list of features and related content here. And I'd love for people to help by PR-ing additions.

Features to add to the list will need to meet the following criteria:

- They were added, deprecated or removed in PHP version 5.6 or greater.

PHP features are listed in `features.js`. This file is ordered by PHP version (see below for more on this). Hopefully the format of this makes sense. But for reference:

- the whole thing is a JSON array
- each entry is an object with the following properties:
  - `name`: The name of the feature - plain text only
  - `description`: A description of the feature - HTML is allowed, but may not be styled. `<code>` tags are fine and backticks will be converted to code tags.
  - `keywords`: An array of strings. These are used when searching, so add strings that people may use to search for this feature.
  - `added`: A string for the version of PHP that the feature was added. Must be in the format `X.Y`, e.g. `7.0`. Use `0.0` if this is not known or appropriate.
  - `deprecated`: A string for the version of PHP that the feature was deprecated. Must be in the format `X.Y`, e.g. `8.0`. Use `null` if this is not know or appropriate.
  - `removed`: A string for the version of PHP that the feature was removed. Must be in the format `X.Y`, e.g. `8.2`. Use `null` if this is not know or appropriate.
  - `resources`: This is an array of objects representing links to documentation or articles about the feature. Each link object has the following properties:
    - `name`: The title of the link
    - `url`: The URL of the link

A sample entry:

```
    {
        name: 'Spaceship operator',
        description: 'Use <code><=></code> for comparisons for sorting',
        keywords: [
            'short', 'shorthand', 'spaceship', 'space ship', 'comparisons', 'operators', 'sorting'
        ],
        added: '7.0',
        deprecated: null,
        removed: null,
        resources: [
            {
                name: 'Spaceship operator (stitcher.io)',
                url: 'https://stitcher.io/blog/shorthand-comparisons-in-php#spaceship-operator'
            }
        ]
    }
```

The file is ordered with entries related to the most recent version of PHP at the top, and the oldest version at the bottom.

That means:

- A feature added in the most recent version of PHP goes at the top of the file.
- Equally a feature deprecated or removed in the most recent version of PHP
  will also go at the top of the file.
- A feature added in the oldest version will go at the bottom of the file. UNLESS
  it is then deprecated or removed in a newer version.
