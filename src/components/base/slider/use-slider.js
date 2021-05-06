import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
  const currentPageIndex = ref(0)
  const slider = ref(null)

  onMounted(() => {
    const sliderValue = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })

    sliderValue.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return currentPageIndex
}
