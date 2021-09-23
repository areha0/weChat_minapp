// pages/index/index.js
Page({

  // 1. 小程序中的数据是在Page中的data中定义的
  // 2. 在wxml中使用数据时依然是用mustache语法
  // 3. 在js文件中调用时, 使用this.data.key
  // 4. 修改数据值时, 在this.setData()中进行修改, setData内部传入的数据是一个对象
  // 对象内部是需要修改的  键(直接写键名)以及修改值

  // 一. data数据存储
  data: {
    message: "你好啊, 我是恁爹"
  },

  // 二. 方法的声明位置和data以及生命周期是在同一级
  handleParent() {
    console.log("你好啊, 我是Parent");
  },
  handleChild() {
    console.log("nihaoa, 我是child");
  },

  // 三. 路由跳转, 是在事件中进行跳转操作
  // 这里使用wx.navigateTo({}), 可以返回上一级; 还有wx.redirectTo({}), 不能返回上一级, 可以返回主界面
  toLogs() {
    wx.navigateTo({
      // 使用相对路径
      // url: '../logs/logs',
      // 使用绝对路径, 绝对路径之前加上反斜杠
      url: "/pages/logs/logs"
    })
  },

  // 四. 声明周期函数
  // onLoad(): 页面加载
  // onShow(): 页面加载后执行(此时页面中还没有请求到数据), 页面解除隐藏后执行(路由跳转时可能会被隐藏)
  // onready(): 页面第一次渲染后执行
  // onHide(): 页面隐藏时执行
  // onUnload(): 页面销毁时执行
  onLoad(options) {
    console.log("onLoad");
  },
  onShow() {
    console.log("onShow");
  },
  onReady() {
    console.log("onReady");
  },
  onHide() {
    console.log("onHide");
  },
  onUnload() {
    console.log("onUnload");
  }
})