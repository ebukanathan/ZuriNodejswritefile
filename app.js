const { writeFile } = require('fs');
const fs = require('fs')
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts',(resp)=>{
    let data = '';
resp.on('data',(chunk)=>{
    data +=chunk;
});
resp.on('end',()=>{
   // console.log(JSON.parse(data))
  // const info = JSON.parse(data);
writeFile('./result/post.txt',data,(error)=>{
    if(error){
        console.log(error)
        return 
    }
    
})

});
resp.on("error",(err)=>{
    console.log("error:" + err)
})

});