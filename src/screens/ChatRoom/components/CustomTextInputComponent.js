// CustomTextInput.js
import CustomTextInput from '@/components/customTextInput/CustomTextInput';
import { useTheme } from '@/hooks';
import { SendRedIcon } from '@/theme/assets/Svgs/Icons';
import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInputComponent = ({ text, onChangeText, onSend,...props }) => {
  const { Colors, Layout, Fonts, Gutters } = useTheme();
  return (

    <View style={{ width: wp(80), marginLeft: wp(4), }}>

      <CustomTextInput
        style={{ backgroundColor: Colors.white, borderRadius: RFPercentage(1), }}
        value={text}
        multiline={true}
        placeholder={'Type a message...'}
        onChangeText={onChangeText}
        {...props}
      />
    </View>


  );
};

export default CustomTextInputComponent;
