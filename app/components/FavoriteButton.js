import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from 'react-native-svg';

export default function FavoriteButton ({ onPress, isFavorite }) {
    <TouchableOpacity onPress={onPress}>
        {isFavorite ? (
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#ff0000"
        />
      </Svg>
    ) : (
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="none"
          stroke="#ff0000"
          strokeWidth="2"
        />
      </Svg>
    )}
    </TouchableOpacity>
};