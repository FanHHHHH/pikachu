#!/usr/bin/env bash

npm run build &&
cd dist &&
git init && 
git add . &&
git commit -m 'init' &&
git remote add origin git@github.com:FanHHHHH/pikachu-website.git &&
git push -u origin master -f 
cd -