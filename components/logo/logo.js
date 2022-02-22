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
        {/*<Image*/}
        {/*  src={'/img/logo.svg'}*/}
        {/*  alt={'23 studio logo'}*/}
        {/*  width={178}*/}
        {/*  height={50}*/}
        {/*  className={styles.logo_glitch}*/}
        {/*/>*/}

        {/*<svg className={styles.logo_glitch}>*/}
        {/*  <image href={'./img/logo.svg'} width="178" height="50" />*/}
        {/*</svg>*/}
        {/*<svg className={styles.logo_glitch}>*/}
        {/*  <use href={'./img/logo.svg'} />*/}
        {/*</svg>*/}
        {/*<svg className={styles.logo_glitch}>*/}
        {/*  <use href={'/img/logo.svg'} style={}/>*/}
        {/*</svg>*/}

        {/*<img src={'/img/logo.svg'} alt={'23 studio logo'} height={'50px'} width={'178px'} className={styles.logo_glitch}/>*/}
        {/*<img src={'/img/logo.svg'} alt={'23 studio logo'} height={'50px'} width={'178px'} className={styles.logo_glitch}/>*/}
        {/*<img src={'./img/logo.svg'} alt={'23 studio logo'} height={'50px'} width={'178px'} className={styles.logo_glitch}/>*/}
      </a>
    </div>

  )
}