npm run build &&
git checkout github-pages &&
rm -rf src *.sh *.js *.json &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push &&
git checkout -