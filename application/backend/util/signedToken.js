import * as jwt from "jsonwebtoken";

import uri from "../uri";

const getSignedToken = function (id) {
  return jwt.sign({ _id: id }, uri, { expiresIn: "1hr" });
};

export default getSignedToken;