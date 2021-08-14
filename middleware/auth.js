const jwt = require("jsonwebtoken");
const User = require("../model/user");

const config = process.env;

const verifyToken =async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ",'');

  if (!token)   return res.status(403).send("A token is required for authentication");

  
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
     let isValidToken =await  User.findOne({token});
     console.log(isValidToken.token === token)
    //  if(typeof isValidToken !== 'object' ||!decoded)return res.status(401).send('Invalid Token')
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
