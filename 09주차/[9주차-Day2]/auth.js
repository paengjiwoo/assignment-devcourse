const jwt = require("jsonwebtoken");
require("dotenv").config();

function ensureAuthorization(req, res) {
  try {
    let token = req.header("authorization");
    if ( token ) {
      let decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);

      return decodedToken;
    } else {
      throw new ReferenceError("jwt must be provided.")
    }

  } catch (err) {

    return err;
  };
};

module.exports = ensureAuthorization;