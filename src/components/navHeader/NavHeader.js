import React from "react";
import Classes from "./NavHeader.module.css";
import logo from "../../assets/icon.png";
export default function NavHeader() {
  return (
    <div className={Classes.nav}>
      <h1>Expense Tracker</h1>
      <div className={Classes.nav__logo__wrapper}>
        <img src={logo} className={Classes.nav__logo} alt="Logo" />
      </div>
      <label className={Classes.nav__label}>
        Made By:&nbsp;<span>Muhammad Arslan</span>
      </label>
    </div>
  );
}
