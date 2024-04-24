const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Armado',
    added: new Date()
  },
  {
    text: 'Elohim',
    user: 'Shoqe',
    added: new Date()
  },
  {
    text: 'Elshaddai',
    user: 'Brother',
    added: new Date()
  }
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});


router.get('/new', function(req, res, next){
  res.render('form')
})

router.post('/new', function(req, res, next){
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
