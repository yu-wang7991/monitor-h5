<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="list" @click="go(item)">
      <span><img class="tou" src="../../assets/images/摄像头@3x.png" alt=""></span>
      <!-- <span class="name">{{ item.municipalName }}</span> -->
      <span class="name">{{ item[0] }}</span>
      <span class="btn">播放<img src="../../assets/images/三角@3x.png" alt=""></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      list: new Map([
        ['高铁东站', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000003.m3u8'],
        // ['双博馆', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000006.m3u8'],
        ['西区大润发', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000009.m3u8'],
        ['文昌阁', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000001.m3u8'],
        ['万达广场', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000018.m3u8'],
        ['东关街城楼', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000019.m3u8'],
        // ['弘扬广场', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000007.m3u8'],
        ['蒋王收费站', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000010.m3u8'],
        ['润扬互通', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000011.m3u8'],
        ['三湾公园', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000012.m3u8'],
        ['文昌阁金鹰', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000015.m3u8'],
        ['文昌路工行', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000016.m3u8'],
        ['文昌路首席国际', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000017.m3u8'],
        ['文昌路与国庆路交叉口', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000013.m3u8']
        // ['扬州北', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000002.m3u8'],
        // ['迎宾馆', 'http://yzdxspy.yzty.mobi:9999/live/sysdk/813668d7602341672bebc350350315c6/4/34020000001320000004.m3u8']
      ])
      // list: []
    }
  },
  created() {

  },
  methods: {
    go(item) {
      // this.$bus.$emit('changePageTitle', item.municipalName)
      this.$router.push({
        name: 'Test',
        query: {
          // title: item.municipalName,
          // url: item.municipalUrl
          url: item[1]
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
    position: relative;
    .tou{
        position: absolute;
        width: 14px;
        height: 17px;
        left: 15px;
        top: 19px;
    }
    .name{
         position: absolute;
         left: 36px;
        }
    background: -webkit-linear-gradient(360deg, rgb(154, 195, 255) 0%, rgba(154, 196, 255, 0.93) 8%, rgba(154, 196, 255, 0.11) 100%);
    width: 355px;
    height: 55px;
    margin: 10px;
    line-height: 55px;
    .btn{
        position: absolute;
        display: inline-block;
        width: 58px;
        height: 24px;
        border-radius: 240px;
        background-color: #fff;
        line-height: 22px;
        padding-left: 10px;
        border: 0.5px #1571F0 solid;
        right: 15px;
        top: 16px;
    img{
        margin-left: 3px;
        width: 10px;
        height: 10px;
    }
    }
}
</style>

