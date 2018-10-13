var models = require('../models');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (data) {
        res.send(JSON.stringify(data));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body.message;
      var username = req.body.username;
      var roomname = req.body.roomname;
      models.messages.post(message, username, roomname);
      console.log('messsage post succes?')
      res.send('success!')
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var username = req.body.username;
      models.users.post(username);
      res.send('success!');

    }
  }
};

