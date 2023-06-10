const express = require('express');
const app = express();
const students ={ 
  data:[
  {'name':'sai','age':20,'branch':'eee'},
  {'name':'bubby','age':20,'branch':'eee'},
  {'name':'sandeep','age':21,'branch':'csm'}
]
}
const staff ={
  data: [
  {'name':'rayudu','age':40,'branch':'eee','post':'Hod'},
  {'name':'rama krishna','age':41,'branch':'eee','post':'proffesor'},
  {'name':'munishweer','age':35,'branch':'eee','post':'assistent proffesor'}
]
}
app.get('/bvrit/:year/:type',(req,res)=>{
if(req.params.type === 'students'){
const query = req.query;
var filtered = students.data.filter(function(user){
  console.log(query.name)
  try {
    if(user.name === query.name && user.branch===query.branch){
      return user;
     }
  } catch (error) {
    console.log(error)
  }
})

res.writeHead(200,{"Content-Type":"application/json"})
res.end(JSON.stringify(filtered))
}else if(req.params.type === 'staff'){
  res.writeHead(200,{"Content-Type":"application/json"})
  res.end(JSON.stringify(staff))
}
else{
  res.writeHead(404,{"Content-Type":"application/json"})
  res.end(JSON.stringify({'status code':404,'reason':'page not found'}))
}
})
app.listen(3000,()=>{
  console.log('server running on port 3000')
}); 
