#!/bin/sh
npx @tailwindcss/cli -i ./src/style.css -o ./dist/style.css

echo "Building JSON file..."

node <<EOF
const fs = require('fs');
const features = require('./features.js');
jsonData = JSON.stringify(features);
fs.writeFileSync('./features.json', jsonData);
EOF

echo "Done!"
