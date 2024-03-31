import CustomButton from '@/components/customButton/CustomButton'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import GradientText from '@/components/makedText/MaskedText'
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import Lamborghini_Pic from '@/theme/assets/images/dummy_home/Lamborghini_Pic.png'
import { LISTING_DESCRIPTION } from '@/utils/Constants'
import { navigate } from '@/utils/RootNavigation'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const AdvertisementCard = () => {
    const { layout, colors, fonts, gutters } = useTheme()

    return (
        <CustomTouchableOpacity onPress={() => navigate(LISTING_DESCRIPTION)} style={[layout.row, styles.shadow, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16, layout.alignItemsCenter]}>
            <Image style={[{ width: 111, height: 80, borderRadius: 8 }]} source={Lamborghini_Pic} />
            <View style={[gutters.marginLeft_10]}>
                <Text style={[fonts.size_14, fonts.bold, { color: colors.gray800 }]}>Arthur Pascua</Text>
                <Text style={[{ color: colors.red500, marginTop: 4, marginBottom: 8 }]}>
                    <GradientText style={[fonts.bold, fonts.size_14]}>AED 90,000</GradientText>
                </Text>
                <View style={[layout.row, layout.justifyContentAround]}>
                    <CustomButton
                        title="Make Offer"
                        // type="secondary"
                        onPress={() => { }}
                        style={[gutters.marginTop_16, { borderWidth: 1, borderColor: colors.danger500, width: '36%', height: 28 }]} type={''} disabled={false} isLoading={false} textStyle={undefined} IconLeft={undefined} styleText={undefined} customHeight={0} />
                    <CustomButtonGradient
                        title="SMS/Call"
                        onPress={() => { }}
                        style={[gutters.marginTop_16, { width: '38%', height: 28 }]} textStyle={undefined} />

                </View>
            </View>
        </CustomTouchableOpacity>
    )
}

export default AdvertisementCard

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    }
})