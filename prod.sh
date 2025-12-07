#!/bin/sh

# Build Tailwind CSS styles for the site
npx @tailwindcss/cli -i ./src/style.css -o ./dist/style.css

NOW=`date +%s`
rm dist/style-*.css
cp dist/style.css dist/style-$NOW.css
# Notes
# 1. The -i flag requires a parameter on MacOS
# 2. This only works on index.html for this project
sed -E -i '' "s#dist/style(\\-[0-9]+)?\\.css#dist/style-$NOW.css#g" index.html
