// pages/songList/songList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义图片的数组
    imgList:[
      'http://p1.music.126.net/FkD6gSPjxAjOBBf8hPeGAA==/109951167872148175.jpg?imageView&quality=89',
      'http://p1.music.126.net/Nb19mIYnr07A0r1QQXaMhw==/109951167872153545.jpg?imageView&quality=89',
      'http://p1.music.126.net/vRO1GKjblG7uaFj0y8Skug==/109951167872149367.jpg?imageView&quality=89',
      'http://p1.music.126.net/8KhJjG0muzWNbw-rPlew7Q==/109951167872220323.jpg?imageView&quality=89'
    ],
    songList:[
      {"name":"当我遇上你","id":"1847231361","singer":"刘德华","img":"https://i.hexuexiao.cn/up/e4/2d/80/c8557f657a3ce433d584918118802de4.jpg.300.jpg"},
      {"name":"Moonglow","id":"3950050","singer":"Bandari","img":"https://up.bizhizu.com/pic_360/fc/b2/55/fcb2558c7ab246a3b46ec93341b435ea.jpg"},
      {"name":"还魂门","id":"420513275","singer":"胡彦斌","img":"http://p1.music.126.net/QGKRlAUTS7e1DcrppNoxLQ==/109951167164478865.jpg?param=130y130"},
      {"name":"海航中国风","singer":"支爽","id":"40257805","img":"https://up.bizhizu.com/pic_360/44/78/11/447811b1f74d574266e44b25cb9c6c8f.jpg"},
      {"name":"画","singer":"赵雷","id":"202369","img":"https://img.bizhizu.com/up/30/ae/bf/30aebfc81b97a4cc0af8224cd2c4924a.jpg.230.350.jpg"},
      {"name":"Rolling in the deep","singer":"廖佳琳","id":"424262521","img":"http://p2.music.126.net/6XwLGVMkba8z98ebHN8KFg==/3437073356535831.jpg?param=130y130"}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  goToPlay:function(events){
    var name = events.target.dataset.name
    var singer = events.target.dataset.singer
    var img = events.target.dataset.img
    var id = events.target.dataset.id
    wx.navigateTo({
      url: '/pages/play/play?id='+id,
    })
    console.log(img)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})