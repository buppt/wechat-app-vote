const app = getApp();
var toVoteV = require('../../utils/toVote.js')
Page({
  data: {
    lists: [{}, {}],
  },
  voteTitle: function (e) {
    this.data.voteTitle = e.detail.value;
  },
  voteIntro: function (e) {
    this.data.voteIntro = e.detail.value;
  },
  bindKeyInput: function (e) {
    let id = e.currentTarget.dataset.id;
    this.data.lists[id].index = id;
    this.data.lists[id].value = e.detail.value;
    console.log(id + "+");
  },
  addList: function () {
    var lists = this.data.lists;
    var newData = {};
    lists.push(newData);
    this.setData({
      lists: lists,
    })
  },
  delList: function () {
    var lists = this.data.lists;
    lists.pop();
    this.setData({
      lists: lists,
    })
  },
  submit: function (e) {
    wx.request({
      url: 'http://localhost',
      data: {
        voteTitle: this.data.voteTitle,
        voteIntro: this.data.voteIntro,
        lists: this.data.lists,
      },
      success: function (res) {
        toVoteV.toVoteV(res.data);
      },
      fail: function (res) {
        console.log("发起投票失败");
      },
      complete: function (res) { },
    })
  }

})