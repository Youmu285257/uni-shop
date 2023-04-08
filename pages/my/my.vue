<template>
  <view>
   My 
  </view>
</template>

<script>
  import useTabBarBadge from '@/composables/useTabBarBadge'
  
  export default {
    setup() {
      const { setBadge } = useTabBarBadge()  
      // 在需要设置 tabBar 徽标的时候，调用 setBadge 方法即可
      setBadge()
      },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">

</style>
