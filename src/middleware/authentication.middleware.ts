import firebaseAdmin from "../services/firebase.service";
import { Request, Response, NextFunction } from "express";

const firebaseAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      return res.status(401).send("Unauthorised");
    }

    next();
  } catch (err) {
    return res.status(401).send("Unauthorised");
  }
};

export default firebaseAuthenticate;
