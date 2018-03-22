const path=require('path');
const fs=require('fs');

const rootPath=path.resolve(__dirname,'../');

const myfs={}

myfs.readFile=function(path,options){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,options,function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

myfs.exists=function(path){
    return new Promise((resolve,reject)=>{
        fs.exists(path,function(exists){
            resolve(exists);
        })
    })
}

module.exports={
    rootPath,
    myfs
}