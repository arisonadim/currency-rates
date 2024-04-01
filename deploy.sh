#!/usr/bin/env sh

rm -rf dist
set -e

npm run build

cp .gitignore dist/
cd dist

git init
git checkout -b master
git add -A
git commit -m '[deploy] gh-pages'

git push -f git@github.com:arisonadim/currency-rates.git master:gh-pages

cd -

rm -rf dist