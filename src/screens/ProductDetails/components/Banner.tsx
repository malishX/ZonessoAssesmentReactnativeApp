import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BannerImage from '@/theme/assets/images/product_details/banner_pic.png'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import { useTheme } from '@/theme'
import { Heart_Icon_White, Share_Icon_White } from '@/theme/assets/Svgs/Icons'
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import CustomButton from '@/components/customButton/CustomButton'
import { SECONDARY } from '@/utils/Constants'

const Banner = ({index}) => {
    const { gutters, layout } = useTheme()
    return (
        <View>
            <ImageBackground
                source={BannerImage}
                resizeMode='contain'

                style={{
                    width: wp(91.6)//360
                    , height: hp(28.5),//223,
                    borderRadius: 8,

                }}
            >
                <View style={[gutters.marginTop_10, gutters.marginHorizontal_10, layout.row, layout.justifyContentBetween]}>
                    {index==1?
                    <CustomButton
                    title='Featured'
                    type={SECONDARY}
                    style={{ width: 94, height: 23, borderRadius: 4 }}
                    textStyle={{ fontSize: 14 }} onPress={() => { }}
                    />
                    :<CustomButtonGradient
                        title='Preminum'
                        style={{ width: 94, height: 23, borderRadius: 4 }}
                        textStyle={{ fontSize: 14 }} onPress={() => { }} />}
                    <View style={[layout.row]}>
                        <CustomTouchableOpacity style={[gutters.paddingHorizontal_10]}>
                            <Share_Icon_White />
                        </CustomTouchableOpacity>
                        <Heart_Icon_White />


                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({})