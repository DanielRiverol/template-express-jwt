import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

const jwt_secret = "jwt_secret";
export const hashPassword = (password) => hashSync(password, genSaltSync(10));

export const isValidPassword = (password, hash) => compareSync(password, hash);

export const createToken = (user, expires) =>
  jwt.sign({ user }, jwt_secret, { expiresIn: expires });

export const verifyToken = (token) => jwt.verify(token, jwt_secret);
