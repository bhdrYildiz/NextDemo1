import React from "react";
import Link from "next/link";

import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/bhdrYildiz" target="_blank">
        Bahadır Yıldız
      </Link>
    </footer>
  );
}

export default Footer;
