import CustomTouchableOpacity from '@/components/touchableOpacity/CustomTouchableOpacity';
import { useTheme } from '@/theme';
import { Back_Icon, Heart_Icon_White, Share_Icon_White } from '@/theme/assets/Svgs/Icons';
import BannerImage from '@/theme/assets/images/product_details/banner_pic.png';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const ENTRIES = [
    {
        title: 'Item 1',
    },
    { title: 'Item 2', image: BannerImage },
    { title: 'Item 3', image: BannerImage },
    { title: 'Item 4', image: BannerImage },
    { title: 'Item 5', image: BannerImage },
];

const CustomCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const { layout, gutters, fonts, colors } = useTheme();
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: any }) => (
        <View style={{ borderRadius: 5, height: 260, width: '100%', }}>
            <ImageBackground source={BannerImage} resizeMode='stretch' style={[{ width: '100%', height: '100%' }]} >

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={[{ position: 'absolute', bottom: 0, }]}>
                        <Pagination
                            dotsLength={ENTRIES.length}
                            activeDotIndex={activeSlide}
                            containerStyle={{ backgroundColor: 'transparent' }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 1,
                                backgroundColor: 'white'

                            }}
                            inacactiveDotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 1,
                                backgroundColor: 'red'
                            }}
                            inactiveDotScale={0.6}
                        />
                    </View>
                </View>
            </ImageBackground>

        </View>
    );

    return (
        <View>
            <View style={{ position: 'absolute',width:'100%', zIndex: 2 }}>
                <View style={[layout.row, layout.justifyContentBetween, gutters.marginTop_10, gutters.paddingHorizontal_10]}>

                    <CustomTouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={[{ width: 32, height: 32, backgroundColor: colors.gray200, borderRadius: 5 }, layout.center]}>


                        <Back_Icon />
                    </CustomTouchableOpacity>

                    <View style={[layout.row]}>
                        <CustomTouchableOpacity style={[gutters.paddingHorizontal_10]}>
                            <Share_Icon_White />
                        </CustomTouchableOpacity>
                        <Heart_Icon_White />


                    </View>
                </View>
            </View>
            <Carousel
                data={ENTRIES}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onSnapToItem={(index) => setActiveSlide(index)}
            />

        </View>
    );
};

export default CustomCarousel;