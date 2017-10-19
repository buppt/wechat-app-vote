//index.js
//获取应用实例
const app = getApp()
var toVote = require('../../utils/toVote.js')
Page({
  data: {

  },
  onLoad: function (option) {
    var that = this;
    var open_id = wx.getStorageSync('open_id')
    console.log("bbb:" + open_id);
    wx.request({
      url: 'http://localhost:8080/inbox', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        open_id: open_id,
      },
      success: function (res) {
        that.setData({
          items: res.data.items,
        });
      }
    });
  },
  onShow: function(){
    var that = this;
    var open_id = wx.getStorageSync('open_id');
    wx.request({
      url: 'http://localhost:8080/inbox', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        open_id: open_id,
      },
      success: function (res) {
        that.setData({
          items: res.data.items,
        });
      }
    });
  },
  launch: function () {
    wx.showActionSheet({
      itemList: ['按周次投票', '自主填写'],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '../create/create'
          })
        } else {
          wx.navigateTo({
            url: '../createV/createV'
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg);
      }
    })
  },
  toVote: function (event) {
    toVote.toVote(event.currentTarget.dataset.id)
    console.log(event.currentTarget.dataset.id);
  },

})