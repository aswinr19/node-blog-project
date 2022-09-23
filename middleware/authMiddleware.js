const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, 'secret', (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.redirect("/signin");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/signin");
  }

  next();
};


module.exports = { requireAuth }; 