var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (message, username) {
      let dbConnection = db.dbConnection();
      dbConnection.connect();
      dbConnection.query('INSERT INTO messages (text) VALUES (?)', message);
      dbConnection.end();

      // if there is a user with this username already
        // retrieve its id
        // run query iwth values (?, ?), message, user_id
      // else 
        // users.post(username)
        // retireo
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      let dbConnection = db.dbConnection();
      dbConnection.connect();
      
      dbConnection.query('INSERT INTO users (name) VALUES (?)', username);

      // close connection to db
      dbConnection.end();
    } // a function which can be used to insert a user into the database
  }
};

