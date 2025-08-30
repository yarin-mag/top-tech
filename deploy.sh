#!/bin/bash

echo "Building the project..."
npm run build

echo "Deploying to gh-pages branch..."
npm run deploy

echo "Deployment complete! Your site should be available at:"
echo "https://yarin-mag.github.io/top-tech"