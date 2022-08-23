import classes from "./Header.module.css";
import Logo from "./Images/Logo.png";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.mainDiv}>
        <img src={Logo} alt="Logo.png" width={100} height={40}></img>
      </div>
    </header>
  );
}
export default Header;
