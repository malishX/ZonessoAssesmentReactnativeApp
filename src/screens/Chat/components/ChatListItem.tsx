import { useTheme } from '@/theme'
import Toyota_Pic from '@/theme/assets/images/dummy_home/Toyota_Pic.png'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Avatar from '@/theme/assets/images/chat/Avatar.png'
import Lamborghini_Pic from '@/theme/assets/images/dummy_home/Lamborghini_Pic.png'
import GradientText from '@/components/makedText/MaskedText'
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'

const ChatListItem = ({
    onPress
}: {
    onPress: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    return (
        <>
            <CustomTouchableOpacity onPress={onPress} style={[gutters.marginTop_16, layout.row, layout.justifyContentBetween, layout.alignItemsCenter]}>
                <View style={[layout.row, layout.alignItemsCenter]}>
                    <Image style={[{ width: 60, height: 60, borderRadius: 200 }]} source={Avatar} />
                    <View style={[gutters.marginLeft_10]}>
                        <Text style={[fonts.size_10, fonts.bold, { color: colors.black }]}>Arthur Pascua <Text style={[{ fontWeight: '300' }]}> 1h</Text></Text>
                        <Text style={[{ color: colors.red500, marginTop: 4, marginBottom: 8 }]}>
                            <GradientText style={[fonts.bold, fonts.size_14]}>Lamborghini Aventado</GradientText>
                        </Text>
                        <Text style={[fonts.size_10, { color: colors.gray600, fontWeight: '300' }]}>You: I made an offer!</Text>

                    </View>
                </View>
                <Image style={[{ width: 78, height: 62, borderRadius: 8 }]} source={Lamborghini_Pic} />
            </CustomTouchableOpacity>
            
        </>
    )
}

export default ChatListItem

const styles = StyleSheet.create({})