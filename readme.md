##  React-native项目使用逍遥游模拟器运行
// 连接，运行
1. adb connect 127.0.0.1:21503 
2. yarn android 

## RN 调用相机拍照功能
本地dome: index.js
参考地址：
https://www.jianshu.com/p/e0cdc0cdd0b9

## 跳转webview页面
本地dome: webview.js 和 index.js ,再路由中添加webview 的路由才能跳转

注意事项： 
ReactNative webview组件android不支持type="file" 打开相机和相册
ReactNative WebView里面type="file"安卓版本无效，因为ReactNative的WebView组件里面使用的是原生组件，而安卓的webview原生组件默认是不支持上传和下载的，IOS是支持的，所以才会出现这种问题。

解决办法：ReactNative里面的webview使用第三方组件：https://github.com/lucasferreira/react-native-webview-android

## 微信功能需在微信开放平台创建移动应用
//(my-release-key.keystore：build时生成的文件) 
包名：在android/app/build.gradle中可以查看  applicationId "xxx"
创建移动应用时的签名 ： keytool -list -v -keystore my-release-key.keystore 
密钥生成参考方法：https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/game-preparation-v4#certificate