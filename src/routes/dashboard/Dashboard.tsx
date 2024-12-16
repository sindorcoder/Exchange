import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex gap-2">
      <Sidebar />

      <div className="w-full p-4 bg-white rounded-2xl min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
