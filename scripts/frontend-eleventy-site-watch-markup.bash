#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

rm -rfv ../frontend/eleventy-site/dist
cp -rfv ../backend/data ../frontend/eleventy-site/dist
export NODE_ENV=$1
echo "👀  Watching Eleventy Site Markup" 
npm --prefix ../frontend/eleventy-site run watch