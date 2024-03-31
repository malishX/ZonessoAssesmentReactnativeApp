import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTextInput from '@/components/customTextInput/CustomTextInput'
import { Search_Icon_2 } from '@/theme/assets/Svgs/Icons'
import { useTheme } from '@/theme'
import CustomTags from '@/components/CustomTags/CustomTags'
import { ScrollView } from 'react-native-gesture-handler'
import LineBreak from '@/components/CustomLineBreak/LineBreak'

const Kayword = () => {
    const { layout, colors, fonts, gutters } = useTheme()
    const arr = [1]
    return (
        <>
            <View style={[{}, gutters.marginHorizontal_16, gutters.marginVertical_16]}>
                <Text style={[{ color: colors.black, }, fonts.size_16, fonts.bold, gutters.marginBottom_16]}>Keyword</Text>
                <CustomTextInput
                    placeholder='Search Keyword'
                    leftComponent={<Search_Icon_2 />} label={''} error={''} multiline={false} numberOfLines={undefined} style={[gutters.marginBottom_16]} pressableProps={undefined} isPassword={false}
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[gutters.paddingBottom_14]}>
                    {
                        arr.map((item, index) => {
                            return (
                                <CustomTags
                                />
                            )
                        })
                    }
                </ScrollView>
                <LineBreak />
            </View>
           
        </>
    )
}

export default Kayword

const styles = StyleSheet.create({})