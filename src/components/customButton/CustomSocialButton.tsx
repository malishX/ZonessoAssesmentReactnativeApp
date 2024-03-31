import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from '@/theme';

const CustomSocialButton = ({ SvgPath, ImagePath, onPress, label, secondImagePath, borderWidth = 1,style }: { SvgPath: any, ImagePath: any, onPress: any, label: any, secondImagePath: any, borderWidth?: number,style:any }) => {
  const { colors, layout, gutters, fonts } = useTheme();
  return (
    
      <CustomTouchableOpacity
        onPress={onPress}
        style={[
          {
            borderColor: colors.gray200,
            borderWidth: borderWidth,
          },
          styles.btnStyle,
          layout.row,
          layout.justifyContentCenter,
          layout.alignItemsCenter,
          style,
          // layout.smallHPadding,
        ]}
      >
       {SvgPath? SvgPath: <Image source={ImagePath} />}
        <Text style={[fonts.gray700, fonts.size_16,fonts.bold,gutters.paddingLeft_10]}>{label}</Text>
        {secondImagePath ? (
          <Image style={{width:30,height:30,borderRadius:15}} source={secondImagePath} />
        ) : (
          <View style={{ width: RFPercentage(5) }} />
        )}
      </CustomTouchableOpacity>
    
  );
};

export default CustomSocialButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: 40,
    borderRadius: RFPercentage(1),
  },
});
