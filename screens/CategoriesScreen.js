import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGrid from '../components/CategoryGrid';


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGrid 
            title={itemData.item.title} 
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }
                });
            }}
            color={itemData.item.color}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;