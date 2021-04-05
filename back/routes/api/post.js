const express = require('express');

const router = express.Router();

module.exports = router

//get

router.get('/',(req, res)=>{
    res.send('hello');
});