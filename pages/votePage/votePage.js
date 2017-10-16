const app = getApp()

Page({
  data: {
   voteId: null,
   myVote: null,
   voteWeek: ['', '一', '二', '三', '四', '五'],
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
        console.log(res.data.myVote)
        that.setData({
          voteTitle: res.data.voteTitle,
          voteNum: res.data.voteNum,
          myVote: res.data.myVote,
          'voteWeek[0]': '第'+res.data.voteWeek+'周',   
        });
      }
    });
  },
  vote: function(e){
    let that = this;
    let row = e.currentTarget.dataset.id[0];
    let col = e.currentTarget.dataset.id[1];
    if(that.data.myVote[row][col] == 0){
      that.data.voteNum[row][col] += 1;
      that.data.myVote[row][col] = 1;
    }else{
      that.data.voteNum[row][col] -= 1;
      that.data.myVote[row][col] = 0;
    }
    that.setData({
      voteNum: that.data.voteNum,
      myVote: that.data.myVote
    });
  },
  voteConfirm: function(e) {
    wx.request({
      url: 'http://localhost/wx/index.php',
      data: {
        voteId: this.data.voteId,
        voteNum: this.data.voteNum,
        myVote: this.data.myVote
      },
      success: function(res) {
        console.log("投票成功");
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        })
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
