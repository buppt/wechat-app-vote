//logs.js
const app = getApp();
var toVote = require('../../utils/toVote.js')
Page({
  data: {
  },
  voteTitle: function(e){
    this.data.voteTitle = e.detail.value;
  },
  voteIntro: function(e){
    this.data.voteIntro = e.detail.value;
  },
  voteWeek: function (e) {
    this.data.voteWeek = e.detail.value;
  },

  submit: function(e){
    if (this.data.voteTitle==null){
      wx.showToast({
        title: '请输入投票标题',
        icon: 'loading',
        duration: 1000
      })
    } else if (this.data.voteWeek==null){
      wx.showToast({
        title: '请输入投票周次',
        icon: 'loading',
        duration: 1000
      })
    }else{
      var open_id = wx.getStorageSync('open_id');
      wx.request({
        url: 'http://localhost/wx/create.php',
        method: "POST",
        data: {
          voteTitle: this.data.voteTitle,
          voteIntro: this.data.voteIntro,
          voteWeek: this.data.voteWeek,
          open_id: open_id,
        },
        success: function(res) {
          toVote.toVote(res.data);
        },
        fail: function(res) {
          console.log("发起投票失败");
        },
        complete: function(res) {},
      })
    }
  }

})
