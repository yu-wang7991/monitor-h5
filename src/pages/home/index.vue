<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div v-if="item.areaList.length != 0" style="padding-left: 14px;background-color: #f7f8fa;line-height: 60px;height: 60px;color: #323233;}">
        {{ item.categoryName }}
      </div>
      <van-collapse v-for="(itemx, index1) in item.areaList" :key="index1" v-model="activeName" accordion @change="getVideo(itemx)">
        <van-collapse-item :title="itemx.areaName" :name="itemx.areaId">
          <van-list v-if="videoList.length !== 0">
            <van-cell v-for="(itemxl, indexl) in videoList" :key="indexl" :title="itemxl.municipalName" @click="go(itemxl)">
              <img style="width: 30px" src="../../assets/images/播放.png" alt="">
            </van-cell>
          </van-list>
          <div v-else>无</div>
        </van-collapse-item>
      </van-collapse>
      <div>
        <div v-if="item.areaList.length == 0" style="padding-left: 14px;background-color: #f7f8fa;line-height: 60px;height: 60px;color: #323233;}">
          {{ item.categoryName }}
        </div>
        <van-list v-if="item.areaList.length == 0">
          <van-cell v-for="(itemx, indexl) in skyVideoList" :key="indexl" :title="itemx.municipalName" @click="go(itemx)">
            <img style="width: 30px" src="../../assets/images/播放.png" alt=""> </van-cell></van-list>
      </div>
    </div>
    <!-- <div v-for="(item,index) in list" :key="index" class="list" @click="go(item)"> -->
    <!-- <span><img class="tou" src="../../assets/images/摄像头@3x.png" alt=""></span> -->
    <!-- <span class="name">{{ item.municipalName }}</span> -->
    <!-- <span class="name">{{ item[0] }}</span> -->
    <!-- <span class="btn">播放<img src="../../assets/images/三角@3x.png" alt=""></span> -->
    <!-- </div> -->
  </div>
</template>
<script>
import { getList, getmunicipalList } from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      filterVideoList: [],
      videoList: [],
      list: [],
      activeName: '',
      skyVideoList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    go(itemxl) {
      // this.$bus.$emit('changePageTitle', item.municipalName)
      this.$router.push({
        path: '/Monitor',
        query: {
          // title: item.municipalName,
          // url: item.municipalUrl
          url: itemxl.municipalUrl
        }
      })
    },
    // changeIndex(array, index1, index2) {
    //   [array[index1], array[index2]] = [array[index2], array[index1]]
    // },
    async getList() {
      const res = await getList()
      // this.changeIndex(res, 1, 2)
      this.list = res
      let qm = null
      res.forEach(item => {
        if (item.categoryName === '高空视频监控') {
          qm = item
        }
      })
      this.skyVideoList = await getmunicipalList(qm.areaId ? item.areaId : 0, qm.categoryId)
      // this.skyVideoList = this.videoList.filter(i => i.category_id === qm.categoryId)
    },
    async getVideo(item) {
      const res = await getmunicipalList(item.areaId ? item.areaId : 0, item.categoryId)
      this.videoList = res
      // this.filterVideoList = this.videoList.filter(i => i.area_id === item.areaId && i.category_id === item.categoryId)
    }
  }
}
</script>

<style lang="scss" scoped>
.heightSky .van-cell {
  background-color: #0a317e;
}
.van-cell {
  align-items: center;
}
.van-cell__value {
  display: flex;
  justify-content: flex-end;
}
.list {
  position: relative;
  .tou {
    position: absolute;
    width: 14px;
    height: 17px;
    left: 15px;
    top: 19px;
  }
  .name {
    position: absolute;
    left: 36px;
  }
  background: -webkit-linear-gradient(360deg, rgb(154, 195, 255) 0%, rgba(154, 196, 255, 0.93) 8%, rgba(154, 196, 255, 0.11) 100%);
  width: 355px;
  height: 55px;
  margin: 10px;
  line-height: 55px;
  .btn {
    position: absolute;
    display: inline-block;
    width: 58px;
    height: 24px;
    border-radius: 240px;
    background-color: #fff;
    line-height: 22px;
    padding-left: 10px;
    border: 0.5px #1571f0 solid;
    right: 15px;
    top: 16px;
    img {
      margin-left: 3px;
      width: 10px;
      height: 10px;
    }
  }
}
</style>

