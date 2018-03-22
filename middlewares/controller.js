const fs = require('fs');
const path=require('path');

const router = require('koa-router')();
const {rootPath}=require('../utils/common');

function addMapping(mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers() {
    var files = fs.readdirSync(path.resolve(rootPath,'controllers'));
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        //console.log(`process controller: ${f}...`);
        let mapping = require(path.resolve(rootPath,`controllers/${f}`));
        addMapping(mapping);
    }
}

module.exports = (function () {
    addControllers();
    return router.routes();
}());

