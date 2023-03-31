import jwt from "jsonwebtoken";

export default function validateToken(req,res,next) {
  const { authorization } = req.headers;
  const secretKey = process.env.SECRET_KEY;
  const token = authorization?.replace("Bearer ", "");
  try {
    const data = jwt.verify(token, secretKey);
    res.locals.userId = data.userId;
    next();
  } catch {
    return res.status(401).send("Your session expired, sign-in again.");
  }
}

