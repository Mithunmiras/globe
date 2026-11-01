import { NavLink } from "react-router-dom";

// A header / drawer link that React Router marks with aria-current="page"
// while its route is active. The class name is passed through untouched so
// the stylesheet's own `[aria-current="page"]` rules do the highlighting.
export default function NavItem({ to, className, children, ...rest }) {
  return (
    <NavLink to={to} end className={() => className} {...rest}>
      {children}
    </NavLink>
  );
}
