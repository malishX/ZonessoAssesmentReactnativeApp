import { useTheme } from '@/theme';
import AVATAR_RICK from '@/theme/assets/images/chat/Avatar_Rick.png';
import React from 'react';
import { Image, View } from 'react-native';

const CustomAvatar = (props: any) => {
  const { layout, } = useTheme();
  return (
    <View style={[layout.row, ]}>
      <Image
        source={AVATAR_RICK}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </View>
  );
};

export default CustomAvatar;
