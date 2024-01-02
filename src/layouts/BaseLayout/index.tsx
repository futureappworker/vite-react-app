import { Outlet, Link } from 'react-router-dom';

import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default BaseLayout;
