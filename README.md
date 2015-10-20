# local-angular-docs

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Hosting on live site

The docs site is hosted on github pages. To push the most recent changes in master to the live document site copy paste this command. DO NOT MODIFY it. I describe below how this actually works, if you are unsatisfied.<br /><br />
Please MAKE SURE to delete the gh-pages branch from github before running this command.
> git pull && grunt build && cp -r ./app/views ./dist/views && cp -r ./app/files ./dist/files && git add -f dist && git commit -m "temp commit" && git subtree push --prefix dist origin gh-pages && git fetch origin && git reset --hard origin/master && git clean -f -d

Builds master, adds the dist directory, commits it, pushes it to the gh-pages subtree, resets the local repo to remove dist directory.
