var models = require('../models');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('hi!');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body.message;
      var username = req.body.username;
      models.messages.post(message, username);
      res.send('success!')
      console.log('messsage post succes?')
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var username = req.body.username;
      models.users.post(username);
      res.send('success!');
      console.log('user post succes?')

    }
  }
};

