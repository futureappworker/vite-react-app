import { Outlet, Link } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default BaseLayout;
