import { fireAuth } from "@/libs/firebase"

export const Logout = async() => {
  try {
    await fireAuth.signOut();
  } catch(error) {
    console.log("logout error", error);
  }
}
