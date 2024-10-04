import "./Navbar.css";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/jack.png";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu} alt="menu icon" />
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="search" name="" placeholder="Search..." id="" />
          <img src={search} alt="search icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="upload icon" />
        <img src={more} alt="more icon" />
        <img src={notification} alt="notification icon" />
        <img src={profile} className="profile-icon" alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
