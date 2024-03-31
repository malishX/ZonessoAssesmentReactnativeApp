import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderChat from './components/HeaderChat'
import CustomTextInput from '@/components/customTextInput/CustomTextInput'
import { Search_Icon_2 } from '@/theme/assets/Svgs/Icons'
import { useTheme } from '@/theme'
import ChatListItem from './components/ChatListItem'
import { navigate } from '@/utils/RootNavigation'
import { CHAT_ROOM } from '@/utils/Constants'

const Chat = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    const arr = [1, 2, 3, 4]
    return (
        <>
            <View>
                <HeaderChat onPressChat={() => { }} />
                <View style={[gutters.marginHorizontal_16]}>
                    <CustomTextInput
                        placeholder="Search" label={''} error={''} multiline={false} numberOfLines={undefined} style={undefined} pressableProps={undefined} isPassword={false}
                        leftComponent={<Search_Icon_2 />}
                    />
                    <ScrollView>
                        {
                            arr.map((item, index) => {
                                return <ChatListItem onPress={()=>{navigate(CHAT_ROOM)}} key={index} />
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Chat

const styles = StyleSheet.create({})