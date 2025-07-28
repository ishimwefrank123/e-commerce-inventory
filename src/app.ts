import express from 'express'
const app = express()
const port = 5000

app.get('/', (req,res)=>{
  res.send('Ecommerce Inventory server is running!')
})

export default app;