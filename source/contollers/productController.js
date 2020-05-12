var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
let rutaJson = path.join(__dirname,'productsDataBase.json')
var arrayDeProductos = JSON.parse(fs.readFileSync(rutaJson))
const toThousand = n => n. toString() . replace( /\B(?=(\d{3})+(?!\d))/g, "." ) ;


const productController ={
    index : (rez,res) =>{
        
        let UltimaVisita = arrayDeProductos.filter(producto => producto.category == "visited");
        let ofertas = arrayDeProductos.filter(producto => producto.category == "in-sale");
        res.render( 'index',{
              UltimaVisita,
              ofertas,
              toThousand,
              colores: [{valor:'rojo'},{valor:'verde'}, {valor:'azul'}]
        })
    },

    

    
}

module.exports = productController

