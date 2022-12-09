const express = require('express')
const router = express.Router()
const openai = require('../utils/openai')


router.post('/generateimage',async(req,res)=>{
    try{
        const {prompt,size} = JSON.parse(Object.keys(req.body))
        const imageSize = size === "small" ? '256x256' : size === "medium"? '512x512' : '1024x1024'
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
          });
          const imageUrl = response.data.data[0].url;
          if(imageUrl){
            res.status(200).send(imageUrl)
          }else{
            res.status(201).send("cant generate")
          }
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
})

module.exports = router