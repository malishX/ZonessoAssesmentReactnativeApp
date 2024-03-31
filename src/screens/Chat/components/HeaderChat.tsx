import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'
import { useTheme } from '@/theme'
import { Back_Icon, Mail_Icon_2 } from '@/theme/assets/Svgs/Icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderChat = ({
    onPressChat
}: {
    onPressChat: () => void
}) => {
    const { layout, colors, fonts, gutters } = useTheme()
    const navigation = useNavigation()
    return (
        <View style={[layout.row, layout.justifyContentBetween, gutters.marginHorizontal_16, gutters.marginTop_10, gutters.marginBottom_16,layout.alignItemsCenter]}>
            
            <Text style={[{color:colors.gray600,},fonts.size_24,fonts.bold]}>
                Chats
            </Text>
            <View style={[layout.row]}>
                <CustomTouchableOpacity onPress={onPressChat} >
               <Mail_Icon_2/>
                </CustomTouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderChat

const styles = StyleSheet.create({})