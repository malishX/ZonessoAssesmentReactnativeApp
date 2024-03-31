import { useTheme } from '@/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTouchableOpacity from '../touchableOpacity/CustomTouchableOpacity';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style: any;
  textStyle: any;
}

const CustomButtonGradient: React.FC<CustomButtonProps> = ({ title, onPress ,style,textStyle}) => {
  const { colors } = useTheme();

  return (
    <CustomTouchableOpacity onPress={onPress} style={[styles.button,style]}>
      <LinearGradient
        colors={[colors.gradient1, colors.gradient2, colors.gradient3, colors.gradient4, colors.gradient5,]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.title,{color:colors.white},textStyle]}>{title}</Text>
      </LinearGradient>
    </CustomTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 40,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomButtonGradient;