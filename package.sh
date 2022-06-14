rm -rf luxeracingnft-pkg.zip
rm -rf ../luxeracingnft-pkg
cd ..
cp -r luxeracingnft luxeracingnft-pkg
cd luxeracingnft-pkg
rm -rf node_modules
rm -rf .git
rm -rf cache
rm -rf .next
zip -r luxeracingnft-pkg.zip *
mv luxeracingnft-pkg.zip ../luxeracingnft
cd ..
rm -rf luxeracingnft-pkg
cd luxeracingnft
