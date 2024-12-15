import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full max-w-[280px] p-4 min-h-screen">
      <h1 className="text-white text-[26px] leading-8 tracking-wider">
        <Link className="text-white no-underline" to={"/"}>Exchange</Link>
      </h1>

      <ul className="flex flex-col mt-[70px] gap-3 p-0">
        <li>
          <Link className="text-white py-2 px-2 rounded-xl flex items-center duration-300 gap-2 no-underline hover:bg-[#003049] text-[18px]" to={"/history"}>
            <i className="bi bi-clock-history"></i> History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
