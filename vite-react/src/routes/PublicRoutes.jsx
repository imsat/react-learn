import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";
import AppSidebar from "../components/AppSidebar";

const PublicRoutes = () => {
  return (
    <div className="wrapper">
      <AppNavbar />
      <AppSidebar />
      <Outlet />
      <AppFooter />
    </div>
  );
};
export default PublicRoutes;
