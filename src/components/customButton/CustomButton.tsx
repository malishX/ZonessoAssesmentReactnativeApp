import React from 'react';
// import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
// import theme from "../../../theme/theme";
import {
  PRIMARY,
  QUATERNARY,
  QUINARY,
  SECONDARY,
  TERTIARY,
} from '../../utils/Constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';
import { useTheme } from '@/theme';

const CustomButton = ({
  title,
  type,
  onPress,
  disabled,
  isLoading,
  style,
  textStyle,
  IconLeft,
  styleText,
  customHeight,
  ...rest
}: {
  title: string,
  type: string,
  onPress: () => void,
  disabled: boolean,
  isLoading: boolean,
  style: any,
  textStyle: any,
  IconLeft: any,
  styleText: any,
  customHeight: number,
}) => {
  const { colors, fonts, } = useTheme();
  const getTypography = (type: string) => {
    return type === TERTIARY
      ? fonts.size_12
      : type === QUATERNARY
      ? fonts.danger500
      : fonts.size_14;
  };

  const getActivityIndicatorColor = (type: string) => {
    let color;
    switch (type) {
      case SECONDARY:
        color = colors.blue500;
        break;
      case TERTIARY:
        color = colors.danger500;
        break;
      case QUATERNARY:
        color =  colors.danger500;
        break;
      case QUINARY:
        color =  colors.danger500;
        break;
      default:
        color = colors.white;
        break;
    }

    return color;
  };

  return (
    <CustomTouchableOpacity
      style={[styles(type, disabled).button, style]}
      disabled={isLoading || disabled}
      onPress={!isLoading && !disabled ? onPress : undefined}
    >
      {isLoading && !disabled ? (
        <ActivityIndicator color={getActivityIndicatorColor(type)} />
      ) : (
        <Text
          style={[
            getTypography(type),
            styles(type, disabled).buttonText,
            textStyle,
            styleText,
          ]}
        >
          {IconLeft} {title}
        </Text>
      )}
    </CustomTouchableOpacity>
  );
};

export const styles = (type, disabled) => {
  const { colors, fonts, layout, components } = useTheme();
  const eitherredOrGrey = disabled ? colors.gray800 : colors.danger200;
  const height = RFPercentage(5.5);

  const common = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  };
  let style = {
    button: {
      ...common,
      backgroundColor: eitherredOrGrey,
      height,
      // borderWidth: 1,
      // borderColor: colors.red500,
    },
    buttonText: {
      color: colors.danger500,
      fontWeight: 'bold',
    },
  };

  if (type === SECONDARY) {
    style = {
      button: {
        ...common,
        backgroundColor: colors.blue500,
        height,
        // borderWidth: 2,
        // borderColor: Colors.error,
      },
      buttonText: {
        color: colors.white,
        fontWeight: 'bold',
      },
    };
  } else if (type === TERTIARY) {
    style = {
      button: {
        ...common,
        backgroundColor: disabled ? colors.gray100 : colors.red500,
        height,
      },
      buttonText: {
        color: disabled ? colors.gray200: colors.white,
        fontWeight: 'bold',
      },
    };
  } else if (type === QUATERNARY) {
    style = {
      button: {
        ...common,
        backgroundColor: colors.white,
        height,
      },
      buttonText: {
        color: disabled ? colors.textGray800 : colors.red900,
      },
    };
  } else if (type === QUINARY) {
    style = {
      button: {
        ...common,
        backgroundColor: 'transparent',
        height,
        borderWidth: 1,
        borderColor: colors.gray200,
      },
      buttonText: {
        color: disabled ? colors.gray800 : colors.red500,
      },
    };
  }

  return StyleSheet.create(style);
};



export default CustomButton;
