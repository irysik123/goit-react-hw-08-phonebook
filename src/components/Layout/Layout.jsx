import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';
import { navs } from '../constants/navigations';
import './Layout.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="list">
            {isLoggedIn ? (
              <>
                {navs
                  .filter(
                    nav => nav.text !== 'Login' && nav.text !== 'Register'
                  )
                  .map(nav => (
                    <NavLink to={nav.url} children={nav.text} key={nav.text} />
                  ))}
                <UserMenu />
              </>
            ) : (
              navs
                .filter(nav => nav.text === 'Login' || nav.text === 'Register')
                .map(nav => (
                  <NavLink to={nav.url} children={nav.text} key={nav.text} />
                ))
            )}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
