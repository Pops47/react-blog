import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navLink: string = "text-lg hover:underline underline-offset-8";

  return (
    <nav className="flex justify-center gap-32 py-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${navLink} underline` : navLink
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? `${navLink} underline` : navLink
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/add_article"
        className={({ isActive }) =>
          isActive ? `${navLink} underline` : navLink
        }
      >
        Ajouter article
      </NavLink>
    </nav>
  );
}
