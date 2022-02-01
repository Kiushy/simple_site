import * as fs from 'fs'
import express from 'express'
import hbs from 'hbs'

//__dirname correction
import path from 'path'
import { fileURLToPath } from 'url'
import { title } from 'process'
import { hasSubscribers } from 'diagnostics_channel'

    //indication path __dirname path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
    //template path
const viewPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

//definition de l'emplacement pour le moteur d'handlebar
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//?set up view directory path? 

app.get('',(req,res)=>{
    res.render('index',{

    })
})

app.get('*', (req,res)=>{
    res.render('404',{

    })
})

app.listen(3000, ()=>{
    console.log('serveur sur port 3000 bien lancé')
})