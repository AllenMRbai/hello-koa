const allen=require('./allen')

console.log('b的内部直接打印allen.hobby',allen.hobby)

module.exports={
    print:function (tips){
        console.log(tips,allen.hobby)
    }
}