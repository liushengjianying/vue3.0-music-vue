<template>
  <div>111</div>
</template>

<script>
import { getRecommend } from '@/service/recommend';
export default {
  name: 'recommend',
  data() {
    return {

    }
  },
  async created() {
    const result = await getRecommend()
    console.log('result :>> ', result);
  }
}
</script>
<style scoped>
</style>
