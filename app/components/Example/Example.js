import { View, Text, NavigationExperimental } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import Action from '../../Action/Index';
import { bindActionCreators } from 'redux';
import { fetchuserdetails } from '../../Action/Index';

const { Header: NavigationHeader, CardStack: NavigationCardStack } = NavigationExperimental;

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchuserdetails
    }, dispatch);
  }

  function mapStateToProps(state) {
    return {
        navigation: state.get('tabs'),
        AppReducers: state.get('AppReducers')
    };
  }

class Example extends Component {

    constructor() {
        super();
        this._renderScene = this._renderScene.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
    }

    _renderScene(props) {

            return (
                <View>
                    <Text>
                        HERE WE BODY PART
                    </Text>
                </View>
            );
    }

    _renderHeader(){
        return (
            <View>
                <Text>
                    HERE IS MY HEADER
                </Text>
            </View>
        );
    }


    render() {

        console.log('value of reducer is',this.props.AppReducers);

        return (
            <NavigationCardStack
                onNavigate={ () => {} }
                direction={'horizontal'}
                navigationState={this.props.navigation}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader} />
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Example);