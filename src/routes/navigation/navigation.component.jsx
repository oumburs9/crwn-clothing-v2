import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrnLogo} from "../../assets/crown.svg";
import "./navigation.styles.scss";
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase.util";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>SHOP</div>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              <div>SIGN IN</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
