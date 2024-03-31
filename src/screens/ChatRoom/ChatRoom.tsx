import { Image, View } from 'react-native'
import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import HeaderChatRoom from './components/HeaderChatRoom'
import CustomBubble from './components/CustomBubble'
import CustomTextInput from '@/components/customTextInput/CustomTextInput'
import CustomSendButton from './components/CustomSendButton'
import Gallary from '@/theme/assets/images/chat/gallary.png'
import { useTheme } from '@/theme'
import CustomAvatar from './components/CustomAvatar'

const ChatRoom = () => {
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        
        
    ])
    
    const [text, setText] = useState('');
    const { layout, colors, fonts, gutters } = useTheme()
    const initialize = () => {
        // setMessages([
        //     {
        //         _id: "1",
        //         text: 'Hello developer',
        //         createdAt: new Date(),
        //         user: {
        //             _id: "2",
        //             name: 'React Native',
        //             avatar: 'https://placeimg.com/140/140/any',
        //         },
        //     },
        // ])
    }
    useEffect(() => {
        initialize()
    }, [])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <HeaderChatRoom
                onPressCall={() => { }}
            />
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                renderBubble={(props) => <CustomBubble {...props} />}
                renderAvatar={CustomAvatar}
                renderSend={(props) => (
                    <CustomSendButton
                     
                     
                      onSend={() => {
                        if (text.trim() === '') return;
                        const newMessage: IMessage = {
                          _id: Math.random().toString(),
                          text: text,
                          createdAt: new Date(),
                          user: {
                            _id: 1,
                            name: 'React Native',
                            avatar: 'https://placeimg.com/140/140/any',
                          },
                        }
                        onSend([newMessage]);
                        setText('');
        
                      }}
                    />
                  )}
                  
                renderComposer={(props) => (
                    <>
                    <View style={[layout.row,layout.alignItemsCenter,{width:'85%',paddingVertical:5}]}>
                    <Image source={Gallary} style={[{width:60}]} resizeMode='contain' />
                    <CustomTextInput
                      {...props}
                      placeholder='Type a message...'
                      style={{width:'80%'}}
                      value={text}
                      onChangeText={setText}
                    />
             </View>
                  </>
                       )
                  }
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
}

export default ChatRoom
