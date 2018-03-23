const Sequelize=require('sequelize');
const sequelize=require('./db/dbpools');

//产品主表
const Product=sequelize.define('product',{
	//产品id
	goods_id:{
		type:Sequelize.BIGINT,
		primaryKey:true
	},
	//产品名称
	goods_name:{
		type:Sequelize.STRING
	},
	//市场价格 单位：分
	market_price:{
		type:Sequelize.INTEGER
	}
})


module.exports=Product;