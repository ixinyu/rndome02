import React, { Component } from 'react'
import {View ,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'


export default class Login extends Component {
  setInputAccount(text){
    console.log(text)
  }
  setInputPassword(text){
    console.log(text)
  }
  getCode(){

  }
  login(){
    this.props.navigation.navigate('TabNav')
  }
  render() {
    return (
      <View style={styles.login}>
        <View style={styles.pwd_wrap}>
          <TextInput 
          style={styles.input}
          placeholder='请输入手机号'
          placeholderTextColor="#666"
          autoCapitalize="none"
          onChangeText={()=>this.setInputAccount()}/>
        </View>
        <View style={styles.pwd_wrap}>
          <TextInput 
          style={[styles.input,{flex:1}]}
          placeholder='请输入验证码'
          placeholderTextColor="#666"
          autoCapitalize="none"
          onChangeText={()=>this.setInputPassword()}/>
          <TouchableOpacity
              style={styles.button}
              onPress={()=>this.getCode()}
            >
              <Text style={styles.btn_txt}>获取验证码</Text>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
              style={styles.btn_login}
              onPress={()=>this.login()}
            >
              <Text style={styles.btn_txt}>登录</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.w_login}>
          <Text style={{textAlign:'center',color:'#999',marginBottom:30}}>--------------- 第三方授权登录 ---------------</Text>
          <Image style={{width:50,height:50,resizeMode:'cover'}}  source={require('../../assets/weixin.png')} />
        </View>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  login:{
    padding:15,
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
  },
  pwd_wrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  input:{
    height:60,
    lineHeight:60
  },
  button:{
    height:40,
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:'#06C1AE',
    justifyContent:'center',
    borderRadius:8
  },
  btn_txt:{
    color:'#fff'
  },
  btn_login:{
    width:'100%',
    marginTop:30,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#06C1AE',
    borderRadius:8
  },
  w_login:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:60
  }
})

