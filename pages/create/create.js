//logs.js
const app = getApp();
var toVote = require('../../utils/toVote.js')
Page({
  data: {
    lists:[{},{}],
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
    wx.request({
      url: 'http://localhost/wx/create.php',
      data: {
        voteTitle: this.data.voteTitle,
        voteIntro: this.data.voteIntro,
        voteWeek: this.data.voteWeek,
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

})
