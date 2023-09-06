const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    if (!access_token) throw { name: "invalid" };
    let payload = verifyToken(access_token);
    let user = await User.findByPk(payload.id);

    if (!user) throw { name: "unauthenticated" };
    req.user = {
      id: user.id,
      email: user.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authentication };
