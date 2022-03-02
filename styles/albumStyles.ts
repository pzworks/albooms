import { StyleSheet} from "react-native";
import { mainColor, screenWidth} from "./common";

export const albumStyles = StyleSheet.create({
  albumTitle: {
    fontSize: 14,
    textAlign: "center"
  },
  album: {
    margin: screenWidth/10,
    borderWidth: 1,
    borderColor: mainColor,
    padding: screenWidth/20,
    borderRadius: screenWidth/50,
  }
})
