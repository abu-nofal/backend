'use strict'

const mongoose=require('mongoose');

const favSchema=new mongoose.Schema({
    name:{type:String},
    img:{type:String},
    level:{type:String}
})

const favModel=mongoose.model('fav',favSchema);

module.exports=favModel