//index.js
//获取应用实例
const app = getApp()
var toVote = require('../../utils/toVote.js')
Page({
  data: {

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
  },
  toVote: function (event) {
    toVote.toVote(event.currentTarget.dataset.id)
    console.log(event.currentTarget.dataset.id);
  },

})