import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link className={match?'btn': ''} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
