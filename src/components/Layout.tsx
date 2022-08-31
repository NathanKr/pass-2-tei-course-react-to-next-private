import { FC, ReactNode } from "react";
import styles from '../../styles/Layout.module.css'

interface IProps{
    children : ReactNode
}

const Layout : FC<IProps> = ({ children }) => {
    return (
      <div className={styles.App}>
        {/* <Navbar /> */}
        <h2>Put here Navbar</h2>
        <main>{children}</main>
        <h2>Put here Footer</h2>
        {/* <Footer /> */}
      </div>
    )
  }

  export default Layout;