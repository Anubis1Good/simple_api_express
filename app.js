// import data from './public/jsons/text.json' assert { type: 'json' }
const express = require('express')
const app = express()

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




app.listen(3000,'localhost',()=>console.log('Сервер запущен'))