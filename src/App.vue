<template lang="pug">
.container-fluid(style="height: 100vh;")
  .row
    .col.d-flex.flex-column.justify-content-start.m-auto
      .text-light 遺跡: 來自灰燼 資訊網
    .col.brand.text-center
      img.logo(src="@/assets/img/Remnant_Logo.png")
    .col.d-flex.align-items-center.justify-content-end
      span.text-info 繁體中文
      span.mr-2.ml-2 |
      span.text-warning English
  .row
    .col.p-0.pl-2(v-for="(item, i) in menu" :class="{'pr-2': i==menu.length-1}")
      button.btn.btn-block(@click="$router.push({ path: item.path })" :class="[checkPath(item.path) ? 'btn-light text-dark' : 'btn-dark']") {{ item.name }}
  .row.mt-2(style="height: 780px;")
    .col(style="height: 100%;")
      transition(name="fade" mode="out-in")
        router-view
  .row.mt-2
    .col.text-light.text-center 
      span Copyright © 2019
      a.ml-2.text-light(href="http://sherlockmax.com" target="_blank") sherlockmax.com
      a.ml-3.text-success(href="https://m.me/SherlockWebStudio?fbclid=IwAR0A1qCRUTBUJx6y4A6BU0bKz54H9NJ2FNRhPp9V2-AWuIq2M0rLKHjAx1g" target="_blank") Report Issue
      a.ml-3.text-info(href="https://www.facebook.com/SherlockWebStudio/" target="_blank") Facebook
      a.ml-3.text-warning(href="mailto:sherlockmaxwork@gmail.com" target="_blank") Contact US
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: '人物', path: '/character' },
        { name: '物品', path: '/inventory' },
        { name: '特性', path: '/traits' },
        { name: '地圖', path: '/ashes_map' },
        { name: '其他', path: '/other' }
      ]
    }
  },
  methods: {
    checkPath(path) {
      return this.$route.path.startsWith(path)
    }
  }
}
</script>

<style lang="scss">
.container-fluid {
  width: 980px !important;
  overflow: hidden;
}

.brand {
  height: 80px;
  overflow: hidden;
}

.brand .logo {
  height: 100px;
  margin-top: -10px;
}
</style>
