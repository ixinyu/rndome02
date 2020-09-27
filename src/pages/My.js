import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Alert} from 'react-native'
import * as WeChat from 'react-native-wechat'

export default class My extends Component {
  componentDidMount(){
    WeChat.registerApp('wxc1fe13c816c9e1f2');
  }
  wx_share(){
    WeChat.isWXAppInstalled()
      .then((isInstalled) => {
          if (isInstalled) {
              WeChat.shareToSession({type: 'text', description: '测试微信好友分享的文本内容'})
                  .catch((error) => {
                      Alert.alert(error.message);
                  });
          } else {
              Alert.alert('请安装微信');
          }
    });
  }
  render() {
    return (
      <View>
        <Text>我的</Text>
        <TouchableOpacity
        style={{padding:10,backgroundColor:'pink',color:'#fff'}}
          onPress={()=>this.wx_share()}
        >
          <Text>微信分享</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
