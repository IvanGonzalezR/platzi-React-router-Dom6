import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../Menu';
import { HomePage } from '../HomePage';
import { BlogPage } from '../BlogPage';
import { BlogPost } from '../BlogPost';
import { ProfilePage } from '../ProfilePage';
import { LogoutPage } from '../LogoutPage';
import { LoginPage } from '../LoginPage';
import { AuthProvider, AuthRoute } from "../auth";

// /#/
// /#/blog
// /#/profile
// /#/otra-cosa -> 404 Page Not Found

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu></Menu>

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            } />
            <Route path="/profile" element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            } />
            {/* El asterisco es para las rutas no definidas */}
            {/* Tiene que estar SI o SI al final, es como un Default */}
            <Route path="*" element={<p>404 Page Not Found</p>} />
          </Routes>

          <footer></footer>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
