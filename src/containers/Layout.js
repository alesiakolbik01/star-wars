import { Outlet, NavLink } from "react-router-dom";

const Layout = (props) => {

    return (
      <>
        <nav className='nav-main' onClick={props.handleRouteChange}>
          <ul>
            <li>
              <NavLink id='1' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink id='2' to="/heroes">Heroes</NavLink>
            </li>
            <li>
              <NavLink id='3' to="/about">About App</NavLink>
            </li>
            <li>
              <NavLink id='4' to="/dasddfsd">No page</NavLink>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;