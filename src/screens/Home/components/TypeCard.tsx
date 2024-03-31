import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/theme';
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface TypeCardProps {
  image: string;
  name: string;
}

const TypeCard: React.FC<TypeCardProps> = ({ image, name }) => {
    const { colors, layout } = useTheme();

    return (
        <CustomTouchableOpacity style={[styles.main_view, layout.center]}>
            <View style={styles.inner_view}>
                {image && <Image source={ image } style={styles.image} />}
                <Text style={[styles.text, { color: colors.textblack }]}>{name}</Text>
            </View>
        </CustomTouchableOpacity>
    );
};

export default TypeCard;

const styles = StyleSheet.create({
  main_view: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    margin: 2,
    width:wp(29),// 100,
    height: hp(11),//88,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  inner_view: {
    flex: 1,
    backgroundColor: 'white',
    width: wp(28),
    height: 88,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 10,
  },
});