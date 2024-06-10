const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function ensureAuthorization(req, res) {
  try {
    let token = req.header("authorization");
    let decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);

    return decodedToken;

  } catch (err) {

    return err;
  };
};

module.exports = ensureAuthorization;