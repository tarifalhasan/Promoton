import '/styles/globals.css';

import { ThemeProvider } from '@material-tailwind/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
