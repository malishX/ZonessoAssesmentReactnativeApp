import LineBreak from '@/components/CustomLineBreak/LineBreak';
import { useTheme } from '@/theme';
import React, { useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import RangeSlider from '@/components/rn-range-slider';

const CustomRangeSlider = ({
  style,
  heading,
  min=0,
  max=10000,
  unit="AED"
}: {
  style?: React.CSSProperties;
  heading: string;
  min: number;
  max: number;
  unit: string;
}) => {
  const { layout, colors, fonts, gutters } = useTheme();
  const [low, setLow] = useState(10);
  const [high, setHigh] = useState(10000);

  const renderThumb = () => (
    <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray' }}>
    </View>
  );

  const renderRail = () => (
    <View style={{ height: 4, width: '100%', backgroundColor: colors.gray200 }} />
  );

  const renderRailSelected = () => (
    <View style={{ height: 4, backgroundColor: colors.danger500 }} />
  );
  const renderNotch = (value: any) => (
    <View style={{ height: 'auto', width: 'auto', overflow: 'visible' }} >
      <Text style={{ color: colors.danger500 }}>{unit} {value}</Text>
    </View>
  );

  return (
    <View style={[gutters.marginTop_16, style as ViewStyle]}>
      <Text style={[{ color: colors.black, }, fonts.size_16, fonts.bold, gutters.marginBottom_12]}>{heading}</Text>
      <RangeSlider
        style={{ width: "100%", height: 80 }}
        min={min}
        max={max}
        step={1}
        onValueChanged={(low, high) => {
          setLow(low);
          setHigh(high);
        }}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderNotch={renderNotch}

        renderToHardwareTextureAndroid={true}


      />
      <LineBreak />
    </View>
  );
};

export default CustomRangeSlider;