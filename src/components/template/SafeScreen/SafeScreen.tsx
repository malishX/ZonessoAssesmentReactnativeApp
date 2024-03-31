import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

function SafeScreen({ style, children }: PropsWithChildren & { style?: any }) {
	const { layout, variant, navigationTheme } = useTheme();

	return (
		<ScrollView>
		<SafeAreaView
			style={[
				style,
				layout.fill,
				{ backgroundColor: navigationTheme.colors.background },
			]}
		>
			<StatusBar
				barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={navigationTheme.colors.background}
			/>
		
				{children}
	
		</SafeAreaView>
		</ScrollView>
	);
}

export default SafeScreen;
