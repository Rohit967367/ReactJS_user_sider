import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../DB/DB";

export const LogInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const LogInWithGoogle = () => {
  const Provider = new GoogleAuthProvider();
  return signInWithPopup(auth, Provider);
};

export const RegisterWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const ForgetPassword = (email) => {
  return sendPasswordResetEmail(auth, email, {
    url: "http://localhost:3000/signIn",
  });
};

export const ResetPassword = (oobCode, password) => {
  return confirmPasswordReset(auth, oobCode, password);
};
