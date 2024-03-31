import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toyota_Pic from '@/theme/assets/images/dummy_home/Toyota_Pic.png'
import Toyota_Logo from '@/theme/assets/images/dummy_home/Toyota_Logo.png'
import { useTheme } from '@/theme'
import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity'

const ShowRoomCard = ({
    index,
    onPress
}: {
    index: number,
    onPress: () => void
}) => {
    const { layout, colors, fonts,gutters } = useTheme()
    return (
        <CustomTouchableOpacity onPress={onPress} style={[index==0 && gutters.marginLeft_24,gutters.marginRight_10,index==9 &&gutters.marginRight_14]}>
            <Image style={[{ width: 152, height: 120, borderRadius: 8 }]} source={Toyota_Pic} />
            <View style={[layout.row,gutters.marginTop_10]}>
                <Image style={[{ width: 32, height: 32, borderRadius: 8 }]} source={Toyota_Logo} />
                <View style={[gutters.marginLeft_10]}>
                    <Text style={[fonts.size_12,{fontWeight:'600',color:colors.gray800}]}>Toyota Motors</Text>
                    <Text style={[fonts.size_10,{fontWeight:'500'}]}>1.2km away</Text>
                </View>
            </View>
        </CustomTouchableOpacity>
    )
}

export default ShowRoomCard

const styles = StyleSheet.create({})