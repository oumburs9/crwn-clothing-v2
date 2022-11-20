import SignUpForm from "../../components/sign-up-form/sign-up-form.componet";
import SignInForm from "../../components/sign-in-form/sign-in-form.componet";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
