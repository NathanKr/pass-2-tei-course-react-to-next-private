import { useState } from "react";
import styles from "styles/Top.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Top = () => {
  const [navExpended, setNavExpended] = useState(false);

  return (
    <div className={styles.Top}>
      <header className={styles.header}>
        {
          <Navbar
            expanded={navExpended}
            collapseOnSelect
            expand="xl"
            variant="dark"
          >
            <Navbar.Brand>
              <h2>
                <span className={styles.nameColor}>Nathan</span> Krasney
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setNavExpended(navExpended ? false : true)}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Link href="/">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/About">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    About
                  </a>
                </Link>
                <Link href="/Contact">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Contact
                  </a>
                </Link>
                <Link href="/Courses">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Courses
                  </a>
                </Link>
                <Link href="/Mentoring">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Mentoring
                  </a>
                </Link>
                <Link href="/Testimonials">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Testimonials
                  </a>
                </Link>
                <Link href="/Events">
                  <a
                    onClick={() => setNavExpended(false)}
                    className={styles.navigationLink}
                  >
                    Events
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        }
      </header>
    </div>
  );
};

export default Top;
