import { useTheme } from '@/theme';
import React from 'react';
import { Bubble } from 'react-native-gifted-chat';

const CustomBubble = (props:any) => {
    const { currentMessage } = props;
    const { colors } = useTheme();

    const backgroundColor = currentMessage.user._id === 1 ? colors.danger500 : colors.gray200; // Customize the colors based on the sender (user._id)

    return (
        <Bubble
        textStyle={{
            right:{
                color:colors.white,
                
            }
        }}
       
            {...props}
            wrapperStyle={{
                
                left: {
                    marginVertical: 10,
                    backgroundColor: backgroundColor, // Background color for received messages
                },
                right: {
                    backgroundColor: backgroundColor, // Background color for sent messages
                },
            }}
        />
    );
};

export default CustomBubble;
