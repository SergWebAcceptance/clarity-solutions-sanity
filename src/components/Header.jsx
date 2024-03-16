"use client";
import "@/public/scss/header.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [pathname]);

  return (
    <>
      <div className={`head-wrap ${menuOpened && "fixed"}`}>
        <div className={`sticky-head ${menuOpened && "fixed"}`}>
          <div className="top-head">
            <div className="_container">
              <div className="top-icons">
                <div className="icons-wrap mob-hidden">
                  <a href="mailto:info@clarity-solutions.io">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 9L12 12.5L17 9"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17Z"
                        stroke="#282828"
                        stroke-width="1.5"
                      />
                    </svg>
                    info@clarity-solutions.io
                  </a>
                  <a href="#" className="dt-hidden mob-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.118 14.702L14 15.5C11.218 14.104 9.49999 12.5 8.49999 10L9.26999 5.87L7.81499 2H4.06399C2.93599 2 2.04799 2.932 2.21699 4.047C2.63699 6.83 3.87699 11.877 7.49999 15.5C11.305 19.305 16.786 20.956 19.802 21.613C20.967 21.866 22 20.958 22 19.765V16.181L18.118 14.702Z"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Phone
                  </a>
                </div>

                <div className="icons-wrap">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 3H3V6M18 3H21V6M6 21H3V18M7 18V17C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12M12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V18M12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM18 21H21V18"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Sign in
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 12H12M12 12L15 15M12 12L15 9M19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V18"
                        stroke="#282828"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <header>
            <div className="_container">
              <div className="header-wrap">
                <Link href="/" className="logo" aria-label="Logo">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>

                <nav className={menuOpened && "opened"}>
                  <Link href="/use-cases">Use Cases</Link>
                  <Link href="/tariffs">Tariffs</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/contacts">Contacts</Link>
                </nav>

                <span className={`mobile-menu-btn ${menuOpened ? 'opened' : ''}`} onClick={handleMenu}>
                  <div>
                      <span className="squere"></span>
                      <span className="vertical"></span>
                      <span className="squere"></span>
                      <span className="horizontal"></span>
                      <span className="squere"></span>
                      <span className="vertical"></span>
                      <span className="squere"></span>
                    </div>
                </span>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
