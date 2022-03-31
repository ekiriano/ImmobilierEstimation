import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/images/logo.png";
// creer un contexte d'authentification (logout login register isUserConnected token , userType)
export const Nav = () => {
  const [isBurgerExtended, setIsBurgerMenuExtended] = useState<boolean>(false);

  const { state, logout } = useAuth();

  const toggleBurgerExtended = () => {
    setIsBurgerMenuExtended((burgerExtended) => !burgerExtended);
  };

  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <ul className="flex p-0 m-0 flex-row flex-wrap justify-center items-center gap-8">
        <li className="basis-2/4 text-center">
          <Link className="navbar-item" to="/">
            <img className="w-24 h-24" src={logo} alt="logo" />
          </Link>

          <div
            role="button"
            className={"navbar-burger burger "}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleBurgerExtended}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </li>
        <>
          <li>
            <Link to="/estimmation/simple" className="navbar-item">
              Estimmer votre bien gratuitement
            </Link>
          </li>
          <li>
            {state.isLoggedIn ? (
              state.type === "super" ? (
                <Link to="/super" className="navbar-item">
                  Estimmations détaillées
                </Link>
              ) : (
                <Link to="/premium" className="navbar-item">
                  Devenir un utilisateur Premium
                </Link>
              )
            ) : (
              ""
            )}
          </li>
          {state.isLoggedIn ? (
            <>
              <li>
                <Link to="/dashboard" className="button is-info">
                  <strong> Dashboard </strong>
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => logout()}
                  className="button is-danger"
                  to="/logout"
                >
                  <strong>Log Out</strong>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="" to="/register">
                  Sign up
                </Link>
              </li>
              <li>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </li>
            </>
          )}
        </>
      </ul>
    </nav>
  );
};
