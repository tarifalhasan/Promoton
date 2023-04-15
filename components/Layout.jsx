import Footer from './Footer';
import Navigation from './Nevbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
