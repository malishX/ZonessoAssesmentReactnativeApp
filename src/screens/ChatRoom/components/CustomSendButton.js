import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity';
import { useTheme } from '@/theme';
import Send_btn from '@/theme/assets/images/chat/Send_btn.png';
import React from 'react';
import { Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const CustomSendButton = ({  onSend,style,...props }) => {
    const { colors } = useTheme();
    return (
        <CustomTouchableOpacity style={[{ backgroundColor: colors.white, borderRadius: RFPercentage(10),alignSelf:'center', padding: 5, marginLeft: 10, marginRight: 10 },style]}  onPress={onSend} {...props} >
            <Image source={Send_btn} style={{ width: RFPercentage(4), height: RFPercentage(4) }} />
        </CustomTouchableOpacity>
    );
};

export default CustomSendButton;
