var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('app', {
        title: 'dJokr',
        menu: {
            buttons: [
                {label: "Sign In"},
                {label: "About dJokr"}
            ]
        }
    })
    ;
});

module.exports = router;