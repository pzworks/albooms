import React, { useEffect } from "react";
import { FlatList, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../model/entities";
import { fetchPhotos } from "../store/album/action";
import { albumStyles } from "../styles/albumStyles";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AlbumPhotos = ({ albumId }) => {
  const dispatch = useDispatch();
  const photos = useSelector((state: StoreState) => state.album.photos).slice(
    0,
    10
  );

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [albumId]);

  return (
    <FlatList
      horizontal={true}
      data={photos}
      renderItem={({ item, index }) => (
        <View>
          <Image
            key={index}
            // source={{uri: item.thumbnailUrl, method: 'GET'}} //via.placeholder.com doesn't support HTTPS correctly,
            // for testing purposes I replaced actual uri with working test image.
            source={{ uri: "https://picsum.photos/200", method: "GET" }}
            style={albumStyles.image}
          />
        </View>
      )}
    />
  );
};

AlbumPhotos.propTypes = {
  albumId: PropTypes.number.isRequired
};

export default AlbumPhotos;
