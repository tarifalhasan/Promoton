import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from '@material-tailwind/react';
import Link from 'next/link';

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-1 font-bold font-inter hover:text-pink-400 transition	duration-700	ease-in	delay-150"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-1 font-bold font-inter hover:text-pink-400 transition	duration-700	ease-in	delay-150"
      >
        <Link href="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-1 font-bold font-inter hover:text-pink-400 transition	duration-700	ease-in	delay-150"
      >
        <a href="#" className="flex items-center">
          About Beta
        </a>
      </Typography>
      <Typography
        as="li"
        variant="lead"
        color="white"
        className="p-1 font-bold font-inter hover:text-pink-400 transition	duration-700	ease-in	delay-150"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky bg-deep-purple inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex container items-center justify-between text-pink-400-900">
          <Link href={'/'} className="mr-4  cursor-pointer py-1.5 font-medium">
            <>
              <svg
                // width={202}
                // height={23}
                className=" w-[100px] lg:w-[202px] h-[23px]"
                viewBox="0 0 202 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.344 1.2V2.32C2.584 2.544 2.872 2.768 2.872 5.488V17.744C2.872 20.464 2.584 20.688 0.184 20.912V22H10.104V20.912C7.384 20.688 7.096 20.464 7.096 17.744V13.328L9.272 13.872C9.624 13.872 10.104 13.872 10.584 13.808C13.976 13.392 17.144 11.44 17.144 7.152C17.144 5.072 16.28 3.472 14.776 2.448C13.496 1.552 11.704 1.2 9.176 1.2H0.344ZM7.096 3.76C7.096 3.28 7.16 2.96 7.384 2.768C7.576 2.608 7.96 2.448 8.568 2.448C10.52 2.448 12.536 3.632 12.536 7.248C12.536 11.568 9.976 12.4 8.824 12.4C8.152 12.4 7.48 12.24 7.096 12.08V3.76ZM39.12 21.264C38.416 21.008 37.872 20.624 37.168 19.888C36.56 19.216 35.856 18.192 34.736 16.4C33.776 14.928 32.592 12.816 32.112 11.856C34.256 10.992 36.112 9.456 36.112 6.64C36.112 4.656 35.248 3.248 33.968 2.384C32.656 1.52 31.056 1.2 28.24 1.2H19.248V2.32C21.584 2.544 21.872 2.864 21.872 5.424V17.712C21.872 20.368 21.52 20.656 19.12 20.88V22H28.784V20.88C26.352 20.656 26.064 20.368 26.064 17.712V13.04H26.672C27.696 13.04 28.272 13.456 28.784 14.416C29.712 16.112 30.576 17.84 31.408 19.152C32.72 21.168 33.936 22.064 37.968 22.256C38.384 22.256 38.736 22.288 38.928 22.288L39.12 21.264ZM26.064 11.76V3.984C26.064 3.312 26.128 2.992 26.352 2.8C26.544 2.608 26.992 2.48 27.792 2.48C29.584 2.48 31.568 3.696 31.568 7.12C31.568 8.752 31.12 10.032 30.032 10.928C29.328 11.536 28.24 11.76 26.896 11.76H26.064ZM51.233 0.751999C43.905 0.751999 39.969 6.16 39.969 11.664C39.969 17.776 44.417 22.48 50.817 22.48C56.865 22.48 61.825 18.288 61.825 11.376C61.825 5.072 57.057 0.751999 51.233 0.751999ZM50.593 2.096C54.337 2.096 56.897 5.904 56.897 12.272C56.897 18.16 54.433 21.136 51.393 21.136C47.297 21.136 44.897 16.528 44.897 11.024C44.897 5.488 47.393 2.096 50.593 2.096ZM90.1138 22V20.88C87.6178 20.624 87.4578 20.4 87.3938 17.456L87.1058 5.488C87.0418 2.832 87.1698 2.576 89.7298 2.32V1.2H83.2658L76.9938 15.216L70.8498 1.2H64.2258V2.32C66.9778 2.576 67.2018 3.024 66.9458 6.64L66.4338 12.976C66.1778 16.336 65.9538 18.032 65.7618 19.024C65.5378 20.176 64.9618 20.72 63.1378 20.88V22H70.8498V20.88C68.7058 20.688 68.0978 20.4 67.9698 18.96C67.8418 17.968 67.8098 16.464 67.9698 13.808L68.3538 5.456H68.4818L75.0098 21.776H75.9058L82.9778 5.136H83.1378L83.2018 17.456C83.2018 20.4 83.0418 20.624 80.6418 20.88V22H90.1138ZM103.452 0.751999C96.1238 0.751999 92.1878 6.16 92.1878 11.664C92.1878 17.776 96.6358 22.48 103.036 22.48C109.084 22.48 114.044 18.288 114.044 11.376C114.044 5.072 109.276 0.751999 103.452 0.751999ZM102.812 2.096C106.556 2.096 109.116 5.904 109.116 12.272C109.116 18.16 106.652 21.136 103.612 21.136C99.5158 21.136 97.1158 16.528 97.1158 11.024C97.1158 5.488 99.6118 2.096 102.812 2.096Z"
                  fill="#C4BFCD"
                />
                <path
                  d="M135.056 6.608C134.896 4.56 134.736 1.744 134.704 0.4H133.904C133.36 1.008 132.912 1.2 132.08 1.2H119.216C118.288 1.2 117.872 1.104 117.392 0.4H116.592C116.528 2.032 116.336 4.368 116.208 6.704H117.392C117.808 5.104 118.192 4.016 118.736 3.472C119.184 2.928 119.76 2.608 122.416 2.608H123.504V17.744C123.504 20.464 123.184 20.656 120.496 20.88V22H130.928V20.88C128.112 20.656 127.792 20.464 127.792 17.744V2.608H129.232C131.12 2.608 131.92 2.768 132.496 3.344C133.072 3.92 133.52 5.008 133.904 6.672L135.056 6.608ZM147.733 0.751999C140.405 0.751999 136.469 6.16 136.469 11.664C136.469 17.776 140.917 22.48 147.317 22.48C153.365 22.48 158.325 18.288 158.325 11.376C158.325 5.072 153.557 0.751999 147.733 0.751999ZM147.093 2.096C150.837 2.096 153.397 5.904 153.397 12.272C153.397 18.16 150.933 21.136 147.893 21.136C143.797 21.136 141.397 16.528 141.397 11.024C141.397 5.488 143.893 2.096 147.093 2.096ZM182.387 1.2H174.579V2.288C176.947 2.416 177.587 2.96 177.747 4.336C177.843 5.264 178.003 6.768 178.003 9.616V15.248H177.907L165.651 1.2H159.731V2.288C161.107 2.416 161.811 2.672 162.419 3.44C163.027 4.208 163.059 4.784 163.059 6.896V13.552C163.059 16.368 162.867 17.808 162.739 18.864C162.611 20.24 161.875 20.752 160.083 20.88V22H167.923V20.88C165.555 20.784 165.011 20.176 164.851 18.768C164.755 17.808 164.595 16.368 164.595 13.552V6.384H164.691L178.003 22.32H179.539V9.616C179.539 6.768 179.731 5.264 179.827 4.272C179.987 2.832 180.659 2.384 182.387 2.288V1.2ZM200.026 16.464C199.45 17.872 198.874 18.896 198.234 19.6C197.498 20.4 196.378 20.624 194.714 20.624C193.498 20.624 192.41 20.56 191.834 20.304C191.194 19.984 191.066 19.216 191.066 17.68V12.112H193.21C195.93 12.112 196.346 12.24 196.762 14.544H197.914V8.112H196.762C196.346 10.352 195.898 10.512 193.21 10.512H191.066V3.728C191.066 2.672 191.194 2.608 192.378 2.608H193.914C195.706 2.608 196.57 2.832 197.114 3.408C197.69 3.984 198.106 5.04 198.394 6.16L199.578 6C199.45 4.016 199.29 1.776 199.258 1.2H184.186V2.32C186.458 2.512 186.778 2.672 186.778 5.456V17.744C186.778 20.464 186.458 20.656 183.738 20.88V22H200.058C200.314 21.04 200.954 18.128 201.178 16.688L200.026 16.464Z"
                  fill="white"
                />
              </svg>
            </>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className=" items-center gap-5 md:flex hidden">
              <button className="btn-primary">Login</button>
              <button className="btn-secondary">Sign Up</button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
