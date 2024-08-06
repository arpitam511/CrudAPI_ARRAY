const express= require('express')

const app=express()

const data=require('./data')
app.use(express.json())
const myarr=data.arr


//creating user 
app.post('/create',(req,res)=>{
    const item=req.body
    myarr.push(item)
    res.send(myarr)

})

//reading
app.get('/read',(req,res)=>{
    res.send(myarr)
})

//update
app.patch('/update/:id',(req,res)=>{
    const id=req.params.id
    const myData=myarr.findIndex((obj)=>obj.id==id)
    const arrData=myarr[myData]
    modifiedData={...arrData, ...req.body}
    

    myarr.splice(myData,1,modifiedData)
    res.send(modifiedData)

})

//delete

app.delete('/delete/:id',(req,res)=>{
       const id=req.params.id
       const ind_Data=myarr.findIndex((obj)=>obj.id==id)
       const my_Data=myarr[ind_Data]
       myarr.splice(ind_Data,1)
       res.send(my_Data)
})


app.listen(1909,()=>{
    console.log('server connected')
})

