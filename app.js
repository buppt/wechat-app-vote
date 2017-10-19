//app.js
App({
  onLaunch: function () {
    let that = this;
    let open_id = null;
    //用户登陆
    wx.login({
      success: function (res) {
        if (res.code) {
          //console.log(res.code);
          //发起网络请求
          wx.request({
            url: 'http://localhost:8080/main',
            data: {
              code: res.code
            },
            method:"POST",
            success:function(res){
               open_id = res.data.open_id;
               wx.setStorage({
                 key: "open_id",
                 data: open_id
               })
               console.log(open_id);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    this.globalData.open_id = open_id;
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    open_id: null,
    session_key: null,
  }
})