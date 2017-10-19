const app = getApp()

Page({
  data: {
    voteId: null,
  },
  onLoad: function (option) {
    var that = this;
    that.setData({
      voteId: option.voteId,
    });
    var open_id = wx.getStorageSync('open_id');
    wx.request({
      url: 'http://localhost/wx/votePage.php', //仅为示例，并非真实的接口地址
      data: {
        voteId: that.data.voteId,
        open_id: open_id,
      },
      success: function (res) {
        that.setData({
          voteTitle: res.data.voteTitle,
          voteIntro: res.data.voteIntro,
          voteList: res.data.voteList,
        
        });
      }
    });
  },
  vote: function (e) {
    let index = e.currentTarget.dataset.id;
    if(this.data.voteList[index].myVote==1){
      this.data.voteList[index].myVote=0;
      this.data.voteList[index].voteNumber -=1;
    }else{
      this.data.voteList[index].myVote = 1;
      this.data.voteList[index].voteNumber += 1;
    }
    this.setData({
      voteList: this.data.voteList,
    })
  },
  voteConfirm: function(){
    var open_id = wx.getStorageSync('open_id');
    wx.request({
      url: 'http://localhost/wx/index.php',
      data: {
        voteId: this.data.voteId,
        voteList: this.data.voteList,
        open_id: open_id,
      },
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        })
      },
      fail: function (res) {
        console.log("投票失败");
      },
      complete: function (res) { },
    })
  },
  onShareAppMessage: function () {
    return {
      title: '投票' + this.data.voteTitle,
      desc: this.data.voteIntro,
      path: '/page/votePage?voteId=' + this.data.voteId,
    }
  }
})