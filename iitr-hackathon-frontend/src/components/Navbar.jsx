import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Navbar() {
  return (
    <div className="navbar h-16 flex items-center p-5 bg-neutral-900 border-b-2 border-stone-800">
      <div className="heading text-white text-2xl">FreeWork</div>
      <div className="link ml-10 flex text-gray-300 gap-3">
        <h1 className="text-[0.9vw] hover:cursor-pointer hover:text-green-500">
          Find Work
          <ExpandMoreIcon />
        </h1>
        <h1 className="text-[0.9vw] hover:cursor-pointer hover:text-green-500">
          Deliver Work
          <ExpandMoreIcon />
        </h1>
        <h1 className="text-[0.9vw] hover:cursor-pointer hover:text-green-500">
          Manage Finances
          <ExpandMoreIcon />
        </h1>
        <h1 className="text-[0.9vw] flex items-center hover:cursor-pointer hover:text-green-500">
          Messages
        </h1>
      </div>
      <div className="search-bar rounded-[0.3vw] ml-86 flex border-1 border-white items-center">
        <input
          className="w-64 rounded-[0.3vw] border-white h-9  p-2 text-[0.8vw]"
          type="text"
          placeholder="Search"
        />
        <select
          className="text-white text-[0.8vw] bg-neutral-700 px-2 border-white hover:border-1 h-9 rounded-[0.3vw]"
          name="category"
          id="category"
        >
          <option value="jobs">Jobs</option>
          <option value="projects">Projects</option>
        </select>
      </div>
      <div className="icons ml-25 items-center flex gap-6 text-white">
        <div className="noti-icon">
          <NotificationsNoneIcon />
        </div>
        <img
          className="w-8 rounded-2xl"
          src="https://www.upwork.com/profile-portraits/c1SlS59i7ragOdNjdCc_j3C256FkzyjOcxd7oDHMEDKy5yLv8l7q0OlDoSgxPbfAo6"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
