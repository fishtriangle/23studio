import Image from "next/image";
import styles from './logo.module.scss'
import Logo_img from "./logo_img";

export default function Logo() {

  return (
    <div className={'position-relative d-flex justify-content-center justify-content-lg-start'}>
      <a href={'/'} className={styles.logo_box}>
        <Logo_img />
        <Logo_img />
        <Logo_img />
      </a>
    </div>

  )
}