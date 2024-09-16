import { ServiceAccount } from "firebase-admin/app";
import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
};

const fireBaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default {
  auth: fireBaseApp.auth(),
};
