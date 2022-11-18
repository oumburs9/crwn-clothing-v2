import {
  signInwithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.componet";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
