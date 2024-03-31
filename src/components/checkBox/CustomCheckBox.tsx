import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';
import { Tick_Icon_black } from '@/theme/assets/Svgs/Icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';
const CustomCheckbox = ({
  value,
  onValueChange,
  style,
  ...props
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: any;
  [key: string]: any;
}) => {
  const { colors } = useTheme();
  const CheckBox = ({
    value = false,
    disabled,
    onValueChange,
    tintColors,
    boxType,
    lineWidth,
  }: {
    value?: boolean;
    disabled?: boolean;
    onValueChange?: (value: boolean) => void;
    tintColors?: any;
    boxType?: string;
    lineWidth?: number;
  }) => {
    return (
      <>
        <CustomTouchableOpacity
          style={{
            width: RFPercentage(2.5),
            height: RFPercentage(2.5),

            backgroundColor: colors.white,

            borderWidth: lineWidth ? lineWidth : 1.5,
            borderRadius: boxType == "circle" ? RFPercentage(2) : RFPercentage(0.1),
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: value ? colors.danger500 : colors.gray800,
          }}
          disabled={disabled}
          onPress={() => {
            onValueChange && onValueChange(!value);
          }}
        >
          {value && (
            <Tick_Icon_black />
          )}
        </CustomTouchableOpacity>
      </>
    );
  };
  return (
    <CheckBox
      // style={[styles.checkbox, style]}
      value={value}
      disabled={false}
      onValueChange={onValueChange}

      // boxType={'circle'}
      // lineWidth={2}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: RFPercentage(5),
    height: RFPercentage(5),
  },
});

export default CustomCheckbox;
