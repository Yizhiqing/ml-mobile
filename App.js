import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/1200px-Cavendish_Banana_DS.jpg'
    };
    return (
      <View style={{flex: 1}}>
        <View style={{flex:2}}>
          <View style={styles.container}>
            <Text>This is my first mobile application.</Text>
            <Text>这是我的第一个移动应用。</Text>
            <Text>俺の初めてのモバイルアプリだよ。</Text>
            <Image source={pic} style={{width: 193, height: 110}}/>
            <Greeting name='Rexxar' />
          </View>
        </View>
        <View style={{flex:1, width: 150, height: 150, backgroundColor: 'steelblue'}} >
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between',alignItems: 'center',}}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          </View>
        </View>
        <View style={{flex:1, width: 150, height: 150, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : 'I show!';
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
        <Text style={styles.red}>{display}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'red',
  },
});
