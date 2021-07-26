'use strict'

const favModel = require("../models/fav.model")

const getFav=async(req,res)=>{
    favModel.find({},(err,data)=>{
        res.send(data)
    })
}


const createFav=async(req,res)=>{
    const {name,img,level}=req.body

    const newFav=new favModel({
        name:name,
        img:img,
        level:level
    })
    newFav.save();
    res.send(newFav)
}


const deleteFav =async(req,res)=>{
    const id =req.params.id 
    favModel.remove({_id:id},(err,data)=>{
        favModel.find({},(err,data)=>{
            res.send(data);
        })
    })
}


const updateFav=async(req,res)=>{
    const id =req.params.id
    const {name,img,level}=req.body

    favModel.findOne({_id:id},(err,data)=>{
        data.name=name
        data.img=img
        data.level=level
        data.save();
        res.send(data)
    })
}


module.exports={getFav,createFav,deleteFav,updateFav}