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
                <Link
                  href="/"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Home
                  
                </Link>
                <Link
                  href="/About"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    About
                  
                </Link>
                <Link
                  href="/Contact"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Contact
                  
                </Link>
                <Link
                  href="/Courses"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Courses
                  
                </Link>
                <Link
                  href="/Mentoring"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Mentoring
                  
                </Link>
                <Link
                  href="/Testimonials"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Testimonials
                  
                </Link>
                <Link
                  href="/Events"
                  onClick={() => setNavExpended(false)}
                  className={styles.navigationLink}>
                  
                    Events
                  
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
