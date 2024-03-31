import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, Welcome } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import BottomTabs from './BottomTab';
import { navigationRef } from '@/utils/RootNavigation';
import ProDuctFilter from '@/screens/Filter/ProductFilter';
import { CHAT_ROOM, LISTING_DESCRIPTION, PRODUCT_FILTER } from '@/utils/Constants';
import ChatRoom from '@/screens/ChatRoom/ChatRoom';
import ListingDescription from '@/screens/ListingDescription/ListingDescription';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme}>
			<Stack.Navigator 
			initialRouteName='Welcome'
			// initialRouteName={LISTING_DESCRIPTION}
			key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Tabs" component={BottomTabs} />
				<Stack.Screen name={PRODUCT_FILTER} component={ProDuctFilter} />
				<Stack.Screen name={CHAT_ROOM} component={ChatRoom} />
				<Stack.Screen name={LISTING_DESCRIPTION} component={ListingDescription} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
