import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import styles from "./Place.style";

const Place = ({ source, title, content, note }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} resizeMethod="resize" />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

Place.propTypes = {};

export default Place;
