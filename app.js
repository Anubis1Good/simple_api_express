// import data from './public/jsons/text.json' assert { type: 'json' }
const express = require('express')
const app = express()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})

app.get('/', (req, res)=>{
    res.send(`<ul>
    <li><a href="/manul">manul</a></li>
    <li><a href="/text">text</a></li>
    </ul>`)
})
app.get('/manul',(req,res)=>{

    res.sendFile('Manul1.jpg',{
        root: './public/imgs'
    })
})

app.get('/text',(req,res)=>{
    res.sendFile('text.json',{
        root: './public/jsons'
    })

    
})
app.get('/data/:id',(req,res)=>{
    const data = require('./public/jsons/data.json')
    res.send(data[req.params.id])
})
app.get('/data',(req,res)=>{
    const data = require('./public/jsons/data.json')
    // res.set('Access-Control-Allow-Origin','*')
    res.send(data)
})




app.listen(3000,'localhost',()=>console.log('Сервер запущен'))