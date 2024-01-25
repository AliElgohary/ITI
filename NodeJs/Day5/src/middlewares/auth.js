import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.json({ message: "Invalid authorization" });

  const token = authorization.split(" ")[1];
  jwt.verify(token, "secret", (err, decode) => {
    if (err) {
      return res.json({ message: "invalid token" });
    } else {
      req.userId = decode.id;
      next();
    }
  });
};
