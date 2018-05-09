import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoreLayout from '../layouts/CoreLayout';

class AppContainer extends React.Component<{}> {
    render() {
        return (
            <View>
                <CoreLayout />
            </View>
        );
    }
}

export default AppContainer;