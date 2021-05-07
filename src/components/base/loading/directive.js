import Loading from './loading'
import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

// import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

// const loadingDirective = createLoadingLikeDirective(Loading)

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    el.instance = instance
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      const title = binding.arg
      if (typeof title !== 'undefined') {
        el.instance.setTitle(title)
      }
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  const style = getComputedStyle(el)
  if (['relative', 'absolute', 'fixed'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
