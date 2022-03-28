const jwt = require("jsonwebtoken");

require("dotenv").config();


// const verifyToken = (token) => {
//   return new promise((resolve, reject) => {
//     jwt.verify(token, process.env.SECRETE_KEY, function (err, decoded) {
//       if (err) {
//         return reject(err);
//       }

//       return resolve(decoded);
//     });
//   });
// };

const authenticate = async(req,res,next)=>{
    if(!req.headers.authorization.startWith("Bearer ")){
        return res.status(401).send({ message: "Token not found" });
    }

    const token = req.headers.authorization.split(' ')[1]

    return next();


}

module.exports = authenticate ;