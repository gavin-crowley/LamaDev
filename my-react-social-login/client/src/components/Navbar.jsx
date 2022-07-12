const Navbar = () => {
  return <div className="navbar">
    <span className="logo">Lama App</span>
    <ul className="list">
        <li className="listItem">
            <img src="https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="avatar" />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
    </ul>
  </div>;
};

export default Navbar;
