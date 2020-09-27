import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Alert} from 'react-native'
import * as WeChat from 'react-native-wechat'
export default class My extends Component {
  componentDidMount(){
    WeChat.registerApp('wxe35e2737ce81d4c7');
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
  wx_login(){
     //发送授权请求
     WeChat.sendAuthRequest('snsapi_userinfo', 'wechat_sdk_demo')
     .then(responseCode => {
     //返回code码，通过code获取access_token
      // console.log(responseCode.code);
      this.getAccessToken(responseCode.code);
      })
      .catch(err => {
        Alert.alert('登录授权发生错误：', err.message, [
         {text: '确定'}
      ]);
   })
  }
  
  // 获取 access_token
  getAccessToken(responseCode){
  // ToastUtil.showShort(responseCode, true);
  const appid = 'wxe35e2737ce81d4c7'
  const secretID = 'c909ea0d577893a7587838c865ea485a'
  var AccessTokenUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+secretID+'&code='+responseCode+'&grant_type=authorization_code';
  // console.log('AccessTokenUrl=',AccessTokenUrl);

  fetch(AccessTokenUrl,{
    method:'GET',
    timeout: 2000,
    })
    .then((response)=>response.json())
    .then((responseData)=>{
        console.log(responseData)
        console.log('responseData.refresh_token=',responseData);
        // this.getRefreshToken(responseData.refresh_token);
    })
    .catch((error)=>{
        if(error){
            console.log('error=',error);
        }
    })
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
        <TouchableOpacity
        style={{padding:10,backgroundColor:'blue',color:'#fff',marginTop:20}}
          onPress={()=>this.wx_login()}
        >
          <Text>微信登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
