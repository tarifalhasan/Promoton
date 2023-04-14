import Footer from './Footer';
import Navigation from './Nevbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
