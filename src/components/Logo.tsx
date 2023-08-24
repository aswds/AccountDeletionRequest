import { styles } from "../screens/AccountDeletion/styles.js";
import logoImage from "../assets/logo23.png"; // Replace with the correct path

const Logo = () => {
  return (
    <div style={styles.imageContainer}>
      <img
        src={logoImage}
        alt="Logo"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Logo;
