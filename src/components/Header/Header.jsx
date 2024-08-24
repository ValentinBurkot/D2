import React from "react";
import Logo from "../../assets/logo/DotaLogo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={Logo} alt="Logo" className={styles.logo}></img>
        <div className={styles.name}>
          <p>Dota 2</p>
          <p>Heroes</p>
        </div>
      </div>
      <input placeholder="Search" className={styles.search}></input>
      <div className={styles.profile}>Avatar</div>
    </div>
  );
}
