import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/theme'
import GradientText from '@/components/makedText/MaskedText'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import LineBreak from '@/components/CustomLineBreak/LineBreak'
import ListItem from './ListItem'

const BottomSheetCard = () => {
    const { colors, fonts, gutters, layout } = useTheme()
    return (
        <ScrollView style={[]}>
            <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: colors.danger200, alignSelf: 'center', marginVertical: 10 }} />
            <View style={[gutters.paddingHorizontal_16]}>
                <View style={[layout.row, layout.alignItemsCenter, gutters.marginTop_16]}>
                    <Text style={[{ color: colors.red500, }, gutters.marginRight_12]}>
                        <GradientText style={[fonts.bold, fonts.size_16,]}>AED 99,000</GradientText>

                    </Text>
                    <CustomButtonGradient
                        title='Preminum'
                        style={{ width: 94, height: 23, borderRadius: 4 }}
                        textStyle={{ fontSize: 14 }} onPress={() => { }} />
                </View>
                <Text style={[{ color: colors.gray800, fontWeight: '600', marginTop: 5 }, fonts.size_16]}>
                    Lamborghini Aventador
                </Text>

            </View>
            <View style={[{ height: 5, width: '100%', backgroundColor: colors.gray200 }, gutters.marginVertical_16]} />
            <View style={[gutters.paddingHorizontal_16]}>
                <Text style={[{ color: colors.gray800, fontWeight: '600', marginTop: 5 }, fonts.size_16]}>
                    Details
                </Text>
                <ListItem
                    item={"Trim"}
                    value={"J"}
                />
                <ListItem
                    item={"Year"}
                    value={"2021"}
                />
                <ListItem
                    item={"Killometers"}
                    value={"600"}
                />
                <ListItem
                    item={"Regional Specs"}
                    value={"Europian Specs"}
                />
                <ListItem
                    item={"Doors"}
                    value={"2 Doors"}
                />
                <ListItem
                    item={"Posted On"}
                    value={"March 23 , 2024"}
                />
                <ListItem
                    item={"Body Type"}
                    value={"Sports Car"}
                />
                <ListItem
                    item={"Fuel Type"}
                    value={"Petrol"}
                />
                <ListItem
                    item={"Seller Type"}
                    value={"Showroom"}
                />

                <ListItem
                    item={"Transmission Type"}
                    value={"Automatic Transmission"}
                />
                <ListItem
                    item={"Horsepower"}
                    value={"700-799 HP"}
                />
                <ListItem
                    item={"No. of Cylinders"}
                    value={"12"}
                />
                <ListItem
                    item={"Warranty"}
                    value={"No"}
                />
                <ListItem
                    item={"Exterior Color"}
                    value={"Blue"}
                />
                <ListItem
                    item={"Interior Color"}
                    value={"Black"}
                />
                <ListItem
                    item={"Target Market"}
                    value={"UAE"}
                />



            </View>
        </ScrollView>
    )
}

export default BottomSheetCard

const styles = StyleSheet.create({})