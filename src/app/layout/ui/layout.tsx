import { Outlet } from "react-router-dom";

export const Layout = (children) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
