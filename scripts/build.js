const fs = require('fs-extra');
var path = require('path')
const childProcess = require('child_process');

const filterFunc = (src, dest)=>{
    if(path.extname(src) === '.map'||path.extname(src) === '.scss'){
        return false;
    }
    return true;
}

try {
    // Remove current build
    fs.removeSync('./dist/');
    // Copy front-end files
    fs.copySync('./src/public', './dist/public', { filter: filterFunc });
    fs.copySync('./src/views', './dist/views');
    // Transpile the typescript files
    if(process.env.NODE_ENV==='production')
        childProcess.exec('tsc --project tsconfig.prod.json');
    /*else
        childProcess.exec('tsc --build --watch tsconfig.json');*/
} catch (err) {
    console.log(err);
}
