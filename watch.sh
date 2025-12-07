echo "Removing CSS cache ID"

rm dist/style-*.css
# Notes
# 1. The -i flag requires a parameter on MacOS
# 2. This only works on index.html for this project
sed -E -i '' "s#dist/style(\\-[0-9]+)?\\.css#dist/style.css#g" index.html

#!/bin/sh
npx @tailwindcss/cli -i ./src/style.css -o ./dist/style.css --watch
