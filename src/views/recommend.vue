<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider v-if="sliders.length" :sliders="sliders" />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/base/slider/slider'
import { getRecommend } from '@/service/recommend'
export default {
  name: 'recommend',
  components: {
    Slider
  },
  data() {
    return {
      sliders: []
    }
  },
  async created() {
    const result = await getRecommend()
    this.sliders = result.sliders
    console.log('result :>> ', result)
  }
}
</script>
<style scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
}
</style>
