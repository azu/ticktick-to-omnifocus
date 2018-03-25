# ticktick-to-taskpaper for OmniFocus

CSV to Taskpaper to OmniFocus.

OmniFocus support TaskPaper.
We can paste taskpaper to OmniFocus for importing todo.

- [OmniFocus TaskPaper Reference Guide - Support - The Omni Group](https://support.omnigroup.com/omnifocus-taskpaper-reference/ "OmniFocus TaskPaper Reference Guide - Support - The Omni Group")

## Usage

1. Download ticktick backup csv file.
2. Convert to JSON from the csv
3. Load the JSON to index.js

```
    npm install
    node index.js ./secret.json 
    # output TaskPaper format
    # Paste this to OmniFocus
```

## Changelog

See [Releases page](https://github.com/azu/csv-to-taskpaper/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/csv-to-taskpaper/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
