//index.js
//获取应用实例
const app = getApp()
var toVote = require('../../utils/toVote.js')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
  },
  onLoad: function (option) {
    var that = this;
    wx.request({
      url: 'http://localhost/wx/index.php', //仅为示例，并非真实的接口地址
      data: {
      },
      success: function (res) {
        that.setData({
          items: res.data.items,
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toVote: function(event){
    toVote.toVote(event.currentTarget.dataset.id)
    console.log(event.currentTarget.dataset.id);
  },
  
})
