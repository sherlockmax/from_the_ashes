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
      button.btn.btn-block(@click="chooseMainMenu(item, item.subMenu[0].path)" :class="[checkPath(item) ? 'btn-light text-dark' : 'btn-dark']") {{ item.name }}
  .row.mt-2
    .col-auto.p-0.pl-2
      button.btn.btn-dark.icon-stone
    .col.p-0.pl-2(v-for="(item, i) in currentMainMenu.subMenu" :class="{'pr-2': i==currentMainMenu.subMenu.length-1}")
      button.btn.btn-block(@click="chooseSubMenu(item.path)" :class="[checkPath(item) ? 'btn-light text-dark' : 'btn-dark']") {{ item.name }}
  .row.main-container
    .col(style="height: 100%")
      transition(name="fade" mode="out-in")
        router-view
  .row.fixed-bottom(style="background: #222;")
    .col.text-light.text-center.pt-2.pb-2
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
        {
          name: '人物',
          path: '/character',
          subMenu: [
            { name: '短槍', path: '/character/short_gun' },
            { name: '長槍', path: '/character/long_gun' },
            { name: '近戰武器', path: '/character/melee_wepon' },
            { name: '套裝', path: '/character/armor' },
            { name: '項鍊', path: '/character/amulet' },
            { name: '戒指', path: '/character/ring' }
          ]
        },
        {
          name: '物品',
          path: '/inventory',
          subMenu: [
            { name: '消耗品', path: '/inventory/consumables' },
            { name: '材料', path: '/inventory/materials' },
            { name: '任務物品', path: '/inventory/quest_items' }
          ]
        },
        {
          name: '特性',
          path: '/traits',
          subMenu: [{ name: '全部', path: '/traits/all' }]
        },
        {
          name: '地圖',
          path: '/ashes_map',
          subMenu: [
            { name: '地球', path: '/ashes_map/earth' },
            { name: '洛姆', path: '/ashes_map/rhom' },
            { name: '耶莎', path: '/ashes_map/yaesha' }
          ]
        },
        {
          name: '其他',
          path: '/other',
          subMenu: [{ name: '世界資料分析', path: '/other/world_analysis' }]
        }
      ],
      currentMainMenu: {}
    }
  },
  created() {
    this.menu.forEach(item => {
      item.subMenu.forEach(subItem => {
        if (subItem.path == this.$route.path) {
          this.chooseMainMenu(item, this.$route.path)
          return
        }
      })
    })
  },
  methods: {
    chooseMainMenu(menu, path) {
      this.currentMainMenu = menu
      this.chooseSubMenu(path)
    },
    chooseSubMenu(path) {
      if (this.$route.path != path) {
        this.$router.push({ path: path })
      }
    },
    checkPath(menuItem) {
      return this.$route.path.startsWith(menuItem.path)
    }
  }
}
</script>

<style lang="scss">
.container-fluid {
  width: 980px !important;
  max-width: 980px !important;
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

.main-container {
  height: calc(100vh - 195px) !important;
}
</style>
