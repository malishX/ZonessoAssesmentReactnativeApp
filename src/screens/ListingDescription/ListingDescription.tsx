import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import CustomCarousel from './components/CustomCarousal'
import { useTheme } from '@/theme'
import GradientText from '@/components/makedText/MaskedText'
import CustomButtonGradient from '@/components/customButton/CustomButtonGradient'
import LineBreak from '@/components/CustomLineBreak/LineBreak'
import ListItem from './components/ListItem'
import CustomButton from '@/components/customButton/CustomButton'
import RBSheet from "react-native-raw-bottom-sheet"
import BottomSheetCard from './components/BottomSheetCard'

const ListingDescription = () => {
    const { colors, fonts, gutters, layout } = useTheme()
    const refRBSheet = useRef();
    return (
        <>
            <View style={[layout.fill]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CustomCarousel />
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
                        {/* <Text style={[{ color: colors.gray600, fontWeight: '400', marginTop: 5 }, fonts.size_12]}>
                    AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR
                </Text> */}

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
                            value={"March 23 , 2024"}
                        />
                        <Text onPress={() => refRBSheet.current.open()} style={[{ color: colors.red500, marginRight: 10 }, layout.selfCenter, gutters.marginVertical_10]}>
                            <GradientText style={[fonts.bold, fonts.size_14,]}>Show more details</GradientText>

                        </Text>
                        <LineBreak />
                        <Text style={[{ color: colors.gray800, fontWeight: '600', marginTop: 5 }, fonts.size_16, gutters.marginVertical_10]}>
                            Description
                        </Text>
                        <Text style={[{ color: colors.gray600, fontWeight: '400', marginTop: 5 }, fonts.size_12, gutters.marginBottom_10]}>
                            2020 LAMBORGHINI AVENTADOR SVJ ONE ONLY 600KM
                        </Text>
                        <LineBreak />
                        <Text style={[{ color: colors.gray800, fontWeight: '600', marginTop: 5 }, fonts.size_16, gutters.marginVertical_10]}>
                            Location
                        </Text>
                        <View
                            style={[{ height: 200, width: '100%', backgroundColor: colors.gray200, borderRadius: 5 }, gutters.marginVertical_16]}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={[layout.row, layout.justifyContentAround, gutters.marginBottom_10, gutters.marginHorizontal_16]}>
                <CustomButton
                    title="Chat"
                    // type="secondary"
                    onPress={() => { }}
                    style={[gutters.marginTop_16, { borderWidth: 1, borderColor: colors.danger500, width: '48%', }]} type={''} disabled={false} isLoading={false} textStyle={undefined} IconLeft={undefined} styleText={undefined} customHeight={0} />
                <CustomButtonGradient
                    title="Call"
                    onPress={() => { }}
                    style={[gutters.marginTop_16, { width: '48%', }]} textStyle={undefined} />

            </View>
            <RBSheet
                ref={refRBSheet}
                keyboardAvoidingViewEnabled={true}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={"slide"}

                customStyles={{
                    wrapper: { backgroundColor: 'rgba(0,0,0,0.4)' },
                    draggableIcon: { backgroundColor: 'gray' },
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: 'white',
                        height: '80%',
                    },
                }}>
                <BottomSheetCard onPress={() => refRBSheet?.current?.close()} />
            </RBSheet>
        </>
    )
}

export default ListingDescription

const styles = StyleSheet.create({})