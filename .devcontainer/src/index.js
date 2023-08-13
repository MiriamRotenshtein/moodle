let express = require('express')
const server = express()
let db= require('./connect_db')

server.use(express.json());
server.use(express.urlencoded());

server.post('publish', (req, res)=>{
    console.log(req.body);
})
  
server.get('/', (req, res) => {
    console.log(req);
    res.json({ name: 'sdhcdtxd' })
    console.log('get')
})

server.post('/save_details',(req,res) => {
    res.json({ name: 'OK' })
})
server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

module.exports = server