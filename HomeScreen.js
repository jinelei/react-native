import React, {Component} from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'Home Screen',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Second"
                    onPress={() => this.props.navigation.navigate('Second')}
                />
            </View>
        );
    }
}

