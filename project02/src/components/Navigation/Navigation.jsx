import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="Logo" />
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">CONTACT</li>
        <li href="#">ABOUT</li>
      </ul>
    </nav>
  );
}

export default Navigation;
