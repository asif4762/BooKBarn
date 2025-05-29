const NavBar = () => {
  const NavOp = (
    <>
      <li><a>Home</a></li>
      <li><a>All Books </a></li>
      <li><a>About Us</a></li>
      <li><a>Contact</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavOp}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BookBarn</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavOp}</ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default NavBar;
