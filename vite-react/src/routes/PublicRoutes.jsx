import { Navigate, Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";
import AppSidebar from "../components/AppSidebar";

const PublicRoutes = () => {
  return (
    <div className="wrapper">
       {/* <Navigate to="/" replace={true} /> */}
      <AppNavbar />
      <AppSidebar />
      <Outlet />
      <AppFooter />
    </div>
  );
};
export default PublicRoutes;