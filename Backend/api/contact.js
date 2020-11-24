var express = require('express');
const contact = require('../models/contact');
var router = express.Router();

router.post('/', (req, res, next) => {

    if (req.body.FirstName && req.body.LastName && req.body.Email && req.body.Message && req.body.Dates) {

        let newContact = new contact(req.body);

        newContact.save((err, contactResponse) => {
            if (err) {
                res.send(err);
            }
            console.log(contactResponse);
            res.json(contactResponse);
        });
    }
});

router.get('/', (req, res) => {
    contact.find({}, (err, contactResponse) => {
        if (err) {
            res.send(err);
        }
        res.json(contactResponse);
    })
});

router.get('/count',(req,res) => {
    contact.aggregate(
        [
          {
            $group: {
            //   dates:{ dates },  
              _id: "$Dates",
              count: { $sum: 1 }
            }
          }
        ],
    
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.json(result);
            console.log(result);
          }
        }
      );
})

module.exports = router;