#!/bin/sh
npx @tailwindcss/cli -i ./src/style.css -o ./dist/style.css

echo "Building JSON file..."

node <<EOF
const fs = require('fs');
const features = require('./features.js');
jsonData = JSON.stringify(features);
fs.writeFileSync('./features.json', jsonData);
EOF

echo "Cache-busting files"

NOW=`date +%s`
rm dist/style-*.css
rm dist/features-*.js
rm dist/features-*.json
rm dist/versions-*.js
cp dist/style.css dist/style-$NOW.css
cp features.js dist/features-$NOW.js
cp features.json dist/features-$NOW.json
cp versions.js dist/versions-$NOW.js
# Notes
# 1. The -i flag requires a parameter on MacOS
# 2. This only works on index.html for this project
sed -E -i '' "s#dist/style(\\-[0-9]+)?\\.css#dist/style-$NOW.css#g" index.html
# This will catch both the JS and the JSON
sed -E -i '' "s#dist/features(\\-[0-9]+)?\\.js#dist/features-$NOW.js#g" index.html
sed -E -i '' "s#dist/versions(\\-[0-9]+)?\\.js#dist/versions-$NOW.js#g" index.html

echo "Done!"
