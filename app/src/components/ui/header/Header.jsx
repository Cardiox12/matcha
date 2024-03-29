import { useContext } from "react";
import styles from "./Header.module.css";
import AppContext from "../../../store/AppContext";
import { useNavigate } from "react-router-dom";

const variants = ['center', 'left', 'right'];

function Header({ value = "MATCHA", variant = "center" }) {
    const { theme } = useContext(AppContext);
    const themeClass = styles[`header__${theme}`];
    const navigage = useNavigate();

    if (!variants.includes(variant))
        throw new Error(`Header: unknown variant ${variant}`);

    const leftLineStyle = styles[`${variant}__left-line`];
    const rightLineStyle = styles[`${variant}__right-line`];

    const onTitleClick = () => {
        navigage("/");
    }
    
    return (
        <header className={`${styles.header} ${themeClass}`}>
            <div className={`${styles["header__line"]} ${leftLineStyle}`}>
            </div>
            <h1 onClick={onTitleClick}>{value}</h1>
            <div className={`${styles["header__line"]} ${rightLineStyle}`}></div>
        </header>
    );
}

export default Header;