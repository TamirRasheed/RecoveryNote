import * as jwt from "jsonwebtoken";

import uri from "../keys";

const getSignedToken = function (id) {
  return jwt.sign({ _id: id }, key, { expiresIn: "1hr" });
};

export default getSignedToken;