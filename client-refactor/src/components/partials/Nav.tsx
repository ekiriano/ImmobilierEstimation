/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/images/logo.png";
// creer un contexte d'authentification (logout login register isUserConnected token , userType)
export const Nav = () => {
  const { user, logout } = useAuth();

  return (
    <nav role="navigation" aria-label="main navigation">
      <ul
        css={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <li className="basis-2/4 text-center">
          <Link className="navbar-item" to="/dashboard">
            <img className="w-20 h-20 my-2" src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link
            to="/apartment"
            className="font-bold block p-2 hover:text-emerald-400"
          >
            Estimmer votre bien gratuitement
          </Link>
        </li>
        <li>
          {user.type === "super" ? (
            <Link
              to="/super"
              className="font-bold block p-2 hover:text-emerald-400"
            >
              Estimmations détaillées
            </Link>
          ) : (
            <Link
              to="/premium"
              className="font-bold block p-2 hover:text-emerald-400"
            >
              Devenir un utilisateur Premium
            </Link>
          )}
        </li>
        <li>
          <Link
            onClick={() => logout()}
            className="font-bold block p-2 hover:text-emerald-400"
            to="/"
          >
            <strong>Log Out</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
