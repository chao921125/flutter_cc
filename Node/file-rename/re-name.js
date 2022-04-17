'use strict';

var fs = require('fs');
var join = require('path').join;

function getJsonFiles(jsonPath){
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let sourcePath = join(path, item);
            // let regArr = /\d+\s/ig.exec(item);
            // let regArr = /\d+-/ig.exec(item);
            // let regArr = /\d+\.\d+\.\d*，/ig.exec(item);
            // let regArr = /\[(.*?)\]/ig.exec(item);
            // let regArr = /【[\u4e00-\u9fa5]*】/ig.exec(item);
            let regArr = /boss0698/ig.exec(item);
            
            
            // let regArr = /[\s*]?\(\d\)*/ig.exec(item);
            if (regArr) {
                let reName = item.replace(regArr[0], "");
                let destPath = join(path, reName);
                fs.rename(sourcePath, destPath, (error) => {
                    if (error) {
                      console.log(index, error);
                    } else {
                      console.log(index + ' = ' + reName);
                    }
                });
            }
        });
    }
    findJsonFile(jsonPath);
}
// I:\/MyInfo\/Download
// F:\/MyData\/Download
// F:\/MyData\/PE
// F:\/MyData\/下载工具\/MV\/标题-猫咪
// F:\/MyData\/下载工具\/MV\/标题-偷拍
// F:\/MyData\/下载工具\/MV\/标题-要看
// F:\/MyData\/下载工具\/MV\/标题-自拍
getJsonFiles("/Volumes/HC/SoftTools/BT/MV-02/[BT-btt.com]6");