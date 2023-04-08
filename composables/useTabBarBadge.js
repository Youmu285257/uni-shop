import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'

export default function useTabBarBadge() {
  const store = useStore()

  // 使用 computed 函数获取购物车中商品总数
  const total = computed(() => store.getters['m_cart/total'])
  
  // 在页面刚展示的时候，设置数字徽标
  onMounted(() => {
    setBadge()
  })

  // 调用 uni.setTabBarBadge() 方法，为购物车设置右上角的徽标
  const setBadge = () => {
    uni.setTabBarBadge({
      index: 2,
      text: total.value + '', // 注意：text 的值必须是字符串，不能是数字
    })
  }

  // 监听 total 的变化，当 total 发生变化时自动更新徽标
  watch(total, () => {
    setBadge()
  })
  
  return {
    total,
    setBadge,
  }
}

