//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
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
    barnnerData:[
      {
        "id":"1",
        "imageUrl":"../../image/xi.jpg",
        "bannerimg":"../../image/xi.h.jpg",
        "title":"《西游记》",
        "price":"100.00",
        "author":"吴承恩",
        "time":"明代",
        "introduce":"《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。现存明刊《西游记》均无作者署名。"
      },
      {
        "id":"2",
        "imageUrl":"../../image/shui.jpg",
        "bannerimg":"../../image/shui.h.jpg",
        "title":"《水浒传》",
        "price":"100.00",
        "author":"施耐庵",
        "time":"明代",
        "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      },
      {
        "id":"3",
        "imageUrl":"../../image/shui.jpg",
        "bannerimg":"../../image/shui.h.jpg",
        "title":"《水浒传》",
        "price":"100.00",
        "author":"施耐庵",
        "time":"明代",
        "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      },
      {
        "id":"4",
        "imageUrl":"../../image/shui.jpg",
        "bannerimg":"../../image/shui.h.jpg",
        "title":"《水浒传》",
        "price":"100.00",
        "author":"施耐庵",
        "time":"明代",
        "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      }
    ]
  }
})

