<template>
  <div class="test-videojs">
    <video id="videoPlayer" class="video-js vjs-big-play-centered" :controls="false" muted style="width: 100%" />
  </div>
</template>
<script>
import Videojs from 'video.js'
import 'videojs-contrib-hls'
export default {
  name: 'Test',
  props: {
    url: String
  },
  data() {
    return {
      nowPlayVideoUrl: '',
      myPlyer: null
    }
  },
  mounted() {
    this.nowPlayVideoUrl = this.$route.query.url
    this.initVideo(this.nowPlayVideoUrl)
  },
  beforeDestroy() {
    this.myPlyer.dispose()
  },
  methods: {
    initVideo(nowPlayVideoUrl) {
      const options = {
        autoplay: true, // 设置自动播放
        controls: true, // 显示播放的控件
        sources: [
          {
            src: nowPlayVideoUrl,
            type: 'application/x-mpegURL' // 告诉videojs,这是一个hls流
          }
        ]
      }
      this.myPlyer = Videojs('videoPlayer', options, function onPlayerReady() {
        this.on('loadstart', function() {
          console.log('开始请求数据 ')
          this.play()
        })
        this.on('canplaythrough', function() {
          console.log('视频源数据加载完成')
        })
      })
    }
  }
}
</script>

<style lang="scss">
#videoPlayer {
  width: 500px;
  height: 300px;
  margin: 50px auto;
}
</style>

