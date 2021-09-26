import PublicNavbar from "./Public/PublicNavbar";
import PrivateNavbar from "./Private/PrivateNavbar";
import AdminNavbar from "./Admin/AdminNavbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  //get user from store
  const { userAuth } = useSelector((state) => state.users);
  const isAdmin = userAuth?.isAdmin;
  return (
    <>
      {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <PrivateNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
};

export default Navbar;
