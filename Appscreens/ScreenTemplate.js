import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';

const ScreenTemplate = ({ children, headerPadding }) => {
    //useHeaderHeight is a hook that gives you the height of the header
    const headerHeight = useHeaderHeight();

    return (
        <LinearGradient
            colors={['#1EB5C6', '#445BCC']}
            style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
        >
            {children}
        </LinearGradient>
    )
}

export default ScreenTemplate;