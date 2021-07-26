'use strict'
const axios=require('axios');
const artic = require('../models/artic.model');

const digimonData=async(req,res)=>{
    const url=`https://digimon-api.vercel.app/api/digimon`;
    axios.get(url).then(response=>{
        const allData=response.data.map(item=>{
            return new artic(item)
        })
        res.send(allData)
    }).catch(err=>{
        console.log(err)
    })
}

module.exports=digimonData