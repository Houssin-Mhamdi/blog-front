echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to serevr..."
scp -r dist/* toto@34.22.224.109:/var/www/34.22.224.109/

echo "Done!"