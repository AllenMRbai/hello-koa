const allen=require('./allen')


console.log('a的内部直接打印allen.hoby',allen.hobby)

allen.hobby='running'

const b=require('./b')

b.print('a的内部调用b的print方法')

console.log('loading...')
setInterval(function(){
    console.log('loading...')
},10000)