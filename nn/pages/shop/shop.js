// pages/shop/shop.js
// var data =require("../../static/detal-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barnnerData:{}
      // {
      //   "id":"1",
      //   "imageUrl":"../../image/xi.jpg",
      //   "bannerimg":"../../image/xi.h.jpg",
      //   "title":"《西游记》",
      //   "price":"100.00",
      //   "author":"吴承恩",
      //   "time":"明代",
      //   "introduce":"《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。现存明刊《西游记》均无作者署名。"
      // },
      // {
      //   "id":"2",
      //   "imageUrl":"../../image/shui.jpg",
      //   "bannerimg":"../../image/shui.h.jpg",
      //   "title":"《水浒传》",
      //   "price":"100.00",
      //   "author":"施耐庵",
      //   "time":"明代",
      //   "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      // },
      // {
      //   "id":"3",
      //   "imageUrl":"../../image/shui.jpg",
      //   "bannerimg":"../../image/xi.h.jpg",
      //   "title":"《水浒传》",
      //   "price":"100.00",
      //   "author":"施耐庵",
      //   "time":"明代",
      //   "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      // },
      // {
      //   "id":"4",
      //   "imageUrl":"../../image/shui.jpg",
      //   "bannerimg":"../../image/xi.h.jpg",
      //   "title":"《水浒传》",
      //   "price":"100.00",
      //   "author":"施耐庵",
      //   "time":"明代",
      //   "introduce":"《水浒传》主要讲述了已宋江为首的108位好汉如何被逼上梁山及其始末。"
      // }
    
  },
  gotoComment :function(event){
    //跳转下一个界面，本界面保存
    var index=event.currentTarget.dataset.index;
    console.log("index:"+index)
    wx.navigateTo({
      url: `../xiangq/xiangq?index=`+index,
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp();
    this.setData({
      barnnerData:app.globalData.barnnerData
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})