import * as React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AppContainer from './src/containers/AppContainer';
import Expo from 'expo';

interface IState {
    loading: boolean;
}

const initialState: IState = {
    loading: true
};

export default class App extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = initialState
    }

    /**
     * Apparently, this will be deprecated soon.... cool?
     */
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({
            loading: false
        });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }

        return (
            /**Pretty ghetto, but if the OS is Android, we need the padding to consider the status bar lol**/
            <View style={{ paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
                <AppContainer />
            </View>
        );
    }
}