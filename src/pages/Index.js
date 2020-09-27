// rfn 快速创建rn 函数组件
// fcc 快速创建react 类组件
import React, { Component} from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,SafeAreaView,FlatList} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import http from '../../utils/request'

export class Index extends Component {
  state = {
    imgUrl:'',
    list:[],
    hasNextPage:true,
    pageNo:1
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
      if(this.state.hasNextPage){
        http.get('api_hotellist',{
          start_date: '2020-09-27',
          end_date: '2020-09-28',
          lng:'120.12979',
          lat:'30.25949',
          pageNo:this.state.pageNo,
          pageSize:3
        }).then((res)=>{
          var data = this.state.list.concat(res.data.list) 
          this.state.hasNextPage = res.data.hasNextPage
          // console.log(data)
          // this.state.list = data
          
          this.setState({
            list:data
          })
        })
      }
  }
  upload(){
    const options = {
      title: '请选择',
      cancelButtonTitle:'取消',
      takePhotoButtonTitle:'拍照',
      chooseFromLibraryButtonTitle:'从相册选择',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // console.log('aa')
      } else if (response.error) {
        // console.log('bb')
      } else if (response.customButton) {
        // console.log('cc')
      } else {
        // console.log('dd')
        this.state.imgUrl = response.uri
        console.log(response.uri)
      }
    });
  }
  goWeb(){
    this.props.navigation.navigate('Webview')
  }
  render() {

    return (
      <View style={styles.index}>
      <Text>首页</Text>
      <TouchableOpacity style={styles.imgwrap}
      onPress={()=>this.upload()}>
        {
          this.state.imgUrl?<Image style={{width: 100, height: 100}} source={{uri:this.state.imgUrl}}/>:<Image source={require('../../assets/jia.png')}/>
        }
      </TouchableOpacity>
      <Text onPress={()=>this.goWeb()}>跳转到web页面</Text>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({item})=>{
            return (
              <TouchableOpacity style={{height:200,borderWidth:1,borderColor:'#eee'}}>
                 <Text style={styles.title}>
                   {item.hotel_name}
                  </Text>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => JSON.stringify(item.hotel_id)}
          onEndReachedThreshold={1}
          // onRefresh={refreshData}
          // refreshing={isRefresh}
          onEndReached={()=>{
            //上啦加载
            if(this.state.hasNextPage){
              this.state.pageNo = this.state.pageNo +1
              this.getData()
            }
          }}
        />
      </SafeAreaView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  index:{
    height:'100%',
    backgroundColor:'#fff',
    padding:15
  },
  imgwrap:{
    marginTop:20,
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  },
  container: {
    flex: 1,
    flexDirection:  'row' ,
  },
  preview: {
    flex: 1,
    justifyContent:  'space-between' ,
    alignItems:  'flex-end' ,
    flexDirection:  'row' ,
  },
  toolBar: {
    width: 200,
    margin: 40,
    backgroundColor:  '#000000' ,
    justifyContent:  'space-between' ,
  },
  button: {
    flex: 0,
    backgroundColor:  '#fff' ,
    borderRadius: 5,
    color:  '#000' ,
    padding: 10,
    margin: 40,
  }
})
export default Index