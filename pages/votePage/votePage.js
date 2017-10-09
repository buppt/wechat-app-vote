const app = getApp()

Page({
  data: {
   voteId: null,
  },
  onLoad: function (option){
    var that=this;
    that.setData({
      voteId: option.voteId,
    });
    wx.request({
      url: 'http://localhost/wx/votePage.php', //仅为示例，并非真实的接口地址
      data: {
        voteId: that.data.voteId,
      },
      success: function (res) {
        that.setData({
          voteTitle: res.data.voteTitle,
          voteIntro: res.data.voteIntro,
          userNumber: res.data.userNumber,
          voteList: res.data.voteList,
          voteUser: res.data.voteUser
        });
      }
    });
  },
  vote: function(e){
    let index = e.currentTarget.dataset.id;
    wx.request({
      url: 'http://localhost/wx/index.php',
      data: index,
      success: function(res) {
        console.log(index);
      },
      fail: function(res) {
        console.log("投票失败");
      },
      complete: function(res) {},
    })
  },
  onShareAppMessage: function () {
    return {
      title: '投票'+this.data.voteTitle,
      desc: this.data.voteIntro,
      path: '/page/votePage?voteId='+this.data.voteId,
    }
  }
})
