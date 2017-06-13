yarn generate
rm -rf ../yineofr.github.io/*
cp -rf dist/* ../yineofr.github.io
cd ../yineofr.github.io
git add . && git commit -m "deploy" && git push
cd -
echo "deploiement ok"

