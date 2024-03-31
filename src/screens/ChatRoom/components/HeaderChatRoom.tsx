import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import { Back_Icon, Call_Icon_2 } from '@/theme/assets/Svgs/Icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Avatar from '@/theme/assets/images/chat/Avatar.png'
import Lamborghini_Pic from '@/theme/assets/images/dummy_home/Lamborghini_Pic.png'
import GradientText from '@/components/makedText/MaskedText'
import CustomButton from '@/components/customButton/CustomButton'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import AdvertisementCard from './AdvertisementCard'

const HeaderChatRoom = ({
    onPressCall
}: {
    onPressCall: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    const navigation = useNavigation()
    return (
        <>
            <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16, layout.alignItemsCenter]}>
                <View style={[layout.row, layout.alignItemsCenter]}>
                    <CustomTouchableOpacity onPress={() => navigation.goBack()}>
                        <Back_Icon />
                    </CustomTouchableOpacity>

                </View>
                <View style={[{ width: '60%', }, layout.center, layout.row]}>
                    <Image style={[{ width: 48, height: 48, borderRadius: 200 }]} source={Avatar} />
                    <View style={[gutters.paddingLeft_10]}>
                        <Text style={[fonts.size_10, fonts.bold, { color: colors.black }]}>Arthur Pascua</Text>
                        <Text style={[fonts.size_10, { color: colors.gray600, fontWeight: '300' }]}>Online</Text>
                    </View>
                </View>

                <View style={[layout.row]}>
                    <CustomTouchableOpacity onPress={onPressCall} style={[gutters.paddingHorizontal_10]}>
                        <Call_Icon_2 />
                    </CustomTouchableOpacity>
                </View>
            </View>
         <AdvertisementCard/>
        </>
    )
}

export default HeaderChatRoom

const styles = StyleSheet.create({})