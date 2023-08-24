import { colors } from "../../colors/colors";

export const styles = {
  container: {
    flex: 1,
    flexGrow: 1,
  },
  styledButtonStyle: {
    height: 60,
    borderRadius: 999,
    backgroundColor: colors.accentColor,
    width: "100%",
    marginVertical: 20,
  },
  styledButtonTextStyle: {
    fontFamily: "Baloo 2",
    fontWeight: "700",
    fontSize: 20,
    color: "#E7E0C9",
  },
  forgotPasswordContainer: { alignSelf: "flex-end", paddingVertical: 10 },
  forgotPasswordTextStyle: {
    color: "#416194",
    fontSize: 13,
    fontFamily: "Baloo 2",
    fontWeight: "700",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  registerContainer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsg: {
    color: "red",
  },
  deletionContainer: {
    display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    fontVariant: ["small-caps"],
  },
  imageStyle: {
    flex: 1,
    overflow: "hidden",
  },
  innerText: {
    justifyContent: "center",
    borderRadius: 15,
    height: 30,
    backgroundColor: colors.input,
    borderWidth: 0,
    color: colors.text,
    padding: 10,
    fontWeight: 700,
    marginBottom: "10%",

    width: "100%",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  inputField: {
    justifyContent: "center",
    color: colors.text,
    fontFamily: "Baloo 2",
    fontWeight: "400",
    width: "100%",
  },
  linearGradientStyle: {
    flex: 1,
  },
  imageContainer: {
    height: 90,
    aspectRatio: 1,
  },
  animationStyle: {
    alignItems: "flex-start",
    width: 100,
    height: 20,
    marginVertical: 5,
  },
  styledButtonContainer: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 30,
  },
  styledButton: {
    height: 50,
    marginTop: 20,
    backgroundColor: "grey",
    borderRadius: 10,
  },
};
