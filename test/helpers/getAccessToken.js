const short = require('short-uuid');

const authService = require('../../api/services/auth.service');
const { User } = require('../../api/models/index');

const getAccessToken = async (id) => {
  let token;
  if (id) {
    token = authService().issue({ id });

    return token;
  }
  const uuid = short.generate();

  const user = await User.create({
    username: `${uuid}test`,
    email: `${uuid}testmail@testmail.com`,
    password: 'supersecurepassword',
  });

  token = authService().issue({ id: user.id });

  return token;
};

module.exports = {
  getAccessToken,
};
