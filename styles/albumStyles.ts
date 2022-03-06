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
  },
  addAlbumButton: {
    width: screenWidth/2,
    margin: 20,
    marginBottom: 0,
    textAlign: "center",
    backgroundColor: mainColor,
    padding: 8,
    borderRadius: 5,
    alignSelf: "center"
  },
  addAlbumButtonText: {
    textAlign: "center",
    fontWeight: 'bold',
    color: '#fff',
  }
})
