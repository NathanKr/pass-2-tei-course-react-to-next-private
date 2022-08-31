import { FC, ReactNode } from "react";
import styles from 'styles/Layout.module.css'
import Footer from 'src/components/Footer'
import Top from 'src/components/Top'

interface IProps{
    children : ReactNode
}

const Layout : FC<IProps> = ({ children }) => {
    return (
      <div className={styles.App}>
        <Top/>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }

  export default Layout;