import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../../components/main/Main";

const Admin = () => {
  return (
    <div className="flex w-full p-2 min-h-screen gap-2">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Admin;
