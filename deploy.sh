#!/bin/bash

# Exit immediately if any command fails

echo "Checking out gh-pages branch..."
git checkout gh-pages

echo "Merging main into gh-pages..."
git merge main --no-edit

echo "Running webpack build..."
npm run build

echo "Adding dist folder to git..."
git add dist -f
git commit -m "Deployment commit"

echo "Pushing dist to gh-pages subtree..."
git subtree push --prefix dist origin gh-pages

echo "Switching back to main branch..."
git checkout main

echo "Deployment complete."
