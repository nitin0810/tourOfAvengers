const fs = require('fs');
const path = require('path');

console.log('Copying index.html file contents in 404.html file to handle the browser refresh');

const indexPath = path.join(__dirname,'build','index.html');
if(!fs.existsSync(indexPath)){
    console.error('index.html file not found in build folder. Make sure you have generated the build folder first by running npm run build command');
    return;
};
const notFound404Path = path.join(__dirname,'build','404.html');

fs.copyFileSync(indexPath,notFound404Path);

console.log('404.html created');