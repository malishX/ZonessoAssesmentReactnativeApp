import React, { useState } from 'react';
import { DimensionValue, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { useTheme } from '@/theme';

const CustomTextInput = ({
  label,
  error,
  multiline,
  numberOfLines,
  style,
  pressableProps,
  isPassword,
  placeholder,
  bottomBorder = true,
  border = true,
  rightComponent,
  topRightComponent,
  textInputWidth = "90%",
  required = false,
  backgroundNeutral = true,
  leftComponent,
  ...props
}: {
  label: string,
  error: string,
  multiline: boolean,
  numberOfLines: number|undefined,
  style: any,
  pressableProps: any,
  isPassword: boolean,
  placeholder: string,
  bottomBorder?: boolean,
  border?: boolean,
  rightComponent?: any,
  topRightComponent?: any,
  textInputWidth?: string,
  required?: boolean,
  backgroundNeutral?: boolean,
  leftComponent?: any,
}) => {
  const ref = useRef(null);
  const {
    fonts,
    colors,

  } = useTheme();
  const [showPass, setShowPass] = useState(true);
  return (
    <View style={style}>

      {/* {topRightComponent} */}
      <View style={{ alignItems: 'flex-end' }}>
        {topRightComponent}
      </View>

      <Pressable
        style={
          [styles(multiline, numberOfLines, bottomBorder, border)
            .container,{backgroundColor:colors.gray200}]
        }
        onPress={() => {
          if (ref.current) {
            (ref.current as TextInput).focus();
          }
          //   alert("45678")

        }}
        {...pressableProps}
      >

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 3,
          }}
        >
          {leftComponent}
          <TextInput
            style={[
              // theme.typography.h3m,
              styles(multiline, numberOfLines, bottomBorder, border).textInput,
              { width: textInputWidth as DimensionValue | undefined }
            ]}
            selectionColor={colors.gray800}
            ref={ref}

            autoCapitalize="none"
            autoCorrect={false}
            multiline={multiline}
            secureTextEntry={isPassword && showPass ? true : false}
            numberOfLines={numberOfLines}
            placeholder={placeholder}
            placeholderTextColor={colors.gray400}
            {...props}
          />
          {isPassword && (
            <>
              {/* <Feather
                name={showPass ? 'eye-off' : 'eye'}
                onPress={() => {
                  setShowPass(!showPass);
                }}
                style={{ marginLeft: 5, padding: 5 }}
                size={20}
                color={colors.gray600}
              /> */}
            </>
          )}
          {rightComponent}
        </View>
      </Pressable>
      {error && (
        <Text
          style={[
            fonts.red900,
            // { color: Colors.error }
          ]}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = (multiline: boolean, numberOfLines: number, bottomBorder: boolean, border: boolean) =>
  StyleSheet.create({
    container: {
      minHeight: bottomBorder ? RFPercentage(5.5) : RFPercentage(4),
      justifyContent: 'center',
      paddingHorizontal: RFPercentage(2),
      paddingVertical: bottomBorder
        ? multiline && numberOfLines
          ? RFPercentage(4)
          : RFPercentage(0)
        : 0,
      // backgroundColor: colors.inputBackground,
      // backgroundColor:"red",
      // borderColor: colors.inputBorder,
      // borderBottomWidth:bottomBorder?1: 0,
      borderRadius: RFPercentage(1),
      // borderWidth: !border ? 0 : multiline ? 1 : 1,
    },
    // label: {
    // //   color:Colors.darkGrey,
    // },
    textInput: {
      height:
        multiline && numberOfLines
          ? RFPercentage(numberOfLines * 5)
          : RFPercentage(5),
      padding: 0,
      margin: 0,
      marginLeft: wp(2),

      // color: colors.red900,
      textAlignVertical: multiline && numberOfLines ? 'top' : undefined,
    },
  });

export default CustomTextInput;
