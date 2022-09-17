// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action:{
      method:"play"
    },
    state:"play",
    song:'',
    geciArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      name:options.name,
      singer:options.singer,
      img:options.img,
      id:options.id
    })
    console.log(options.img)
    this.getData();
    this.getLyricbyid();
  },

getData:function(){
  var id = this.data.id;
  var that = this;
  wx.request({
    url: 'https://music.163.com/api/song/detail/?id='+id+'&ids=['+id+']',
    success: (result) => {
      var musicInfo = result.data.songs[0];
      that.setData({
        song:musicInfo
      })
    },
    fail: (res) => {},
    complete: (res) => {},
  })
},

getLyricbyid:function(){
  var id = this.data.id;
  var that = this;
  wx.request({
    url: 'https://music.163.com/api/song/lyric?os=pc&id='+id+'&lv=-1&kv=-1&tv=-1',
    success: (result) => {
      var geci = result.data.lrc.lyric;
      var results = that.parselyric(geci);
      console.log(results)
      var finalResult = that.sliceNull(results);
      console.log(finalResult)
      that.setData({
        geciArray:finalResult
      })
    },
    fail: (res) => {},
    complete: (res) => {},
  })
},

// 解析歌词的方法使用正则表达式
parselyric:function(lyric){
  var lyricResult=[];
  //将所有歌词组成数组的字符串切割成每句歌词组成的数组
  var geciArray = lyric.split('\n');
  //判断最后一个字符是否为空字符串，如果为空则删除
  if(geciArray[geciArray.length-1] == ''){
    //删除元素 队列：先进先出  栈：先进后出
    geciArray.pop();
  }
  //满足时间歌词：【XXX：xxx：xxx】规律 正则表达式通常用来检索、替换那些字符符合某个格式（规律）
  var pattern=/\[\d{2}:\d{2}\.\d{2,3}\]/;
  //v数组中每一个元素，i下标 ，a正在遍历的数组
  geciArray.forEach(function(v,i,a){
    var real_lyric = v.replace(pattern,"");
    var time = v.match(pattern);
    if(time!=null){
      var timeResult = time[0].slice(1,-1);
      //对result结果按冒号进行切割 得到一个数组长度2位的数组
      //第一个元素是分，第二个元素是秒
      var timeArray = timeResult.split(":");
      var finaltime = parseFloat(timeArray[0])*60+parseFloat(timeArray[1]);
      lyricResult.push([finaltime,real_lyric]);
    }
  })
  //返回歌词数组
  return lyricResult;
},

//去掉空歌词，保留非空歌词
sliceNull:function(lyricArray){
  var result = [];
  for(var i=0;i<=lyricArray.length;i++){
    //判断歌词是否为空
    // if(lyricArray[i][1]!=''){
      result.push(lyricArray[i]);
    // }
  }
  return result;
},

  playOrPause:function(){
    var musicState = this.data.state
    if(musicState == "play"){
      this.setData({
        action:{
          method:"pause",
        },
        state:"pause"
      })
    }else{
      this.setData({
        action:{
          method:"play",
        },
        state:"play"
      })
    }
  },

  // 根据ID获取歌曲信息
  getSongByID:function(){
    var currenId = this.data.id;

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