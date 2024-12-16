import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full max-w-[100px] md:max-w-[280px] p-4 min-h-screen">
      <h1 className="text-white text-[26px] leading-8 tracking-wider">
        <Link className="text-white hidden md:block no-underline" to={"/"}>
          Exchange
        </Link>
      </h1>
      <ul className="flex flex-col mt-[70px] gap-3 p-0">
        <li>
          <Link
            style={pathname === "/" ? { backgroundColor: "#003049" } : {}}
            className="text-white  py-2 px-2 rounded-xl flex items-center duration-300 gap-2 no-underline hover:bg-[#003049] text-[18px]"
            to={"/"}
          >
            <i className="bi bi-grid-fill"></i>{" "}
            <span className="hidden md:block">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname === "/balance" ? { backgroundColor: "#003049" } : {}
            }
            className="text-white py-2 px-2 rounded-xl flex items-center duration-300 gap-2 no-underline hover:bg-[#003049] text-[18px]"
            to={"/balance"}
          >
            <i className="bi bi-database-fill"></i>{" "}
            <span className="hidden md:block">Balance</span>
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname === "/history" ? { backgroundColor: "#003049" } : {}
            }
            className="text-white py-2 px-2 rounded-xl flex items-center duration-300 gap-2 no-underline hover:bg-[#003049] text-[18px]"
            to={"/history"}
          >
            <i className="bi bi-clock-history"></i>{" "}
            <span className="hidden md:block">History</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
