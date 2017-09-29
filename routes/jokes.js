/**
 * Created by espen on 29-Sep-17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
   res.json({
       joke:"Why did the chicken cross the road?",
       punchline:"To get to the other side...",
       ratelink:"http://ratelink?"
   });
   res.send(200);
});

router.post('/', function (req, res, next) {
    var joke = req;
    res.send(200);
});
module.exports = router;