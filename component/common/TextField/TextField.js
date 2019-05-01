import React from "react";
import { TouchableOpacity, TextInput, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./TextField.styles";

const TextField = ({ title, placeholder, value, onChangeText, inputProps }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...inputProps}
        value={value}
      />
    </TouchableOpacity>
  );
};

TextField.propTypes = {};

export default TextField;
