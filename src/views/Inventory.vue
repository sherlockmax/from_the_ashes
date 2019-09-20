<template lang="pug">
  .row(style="height: 100%;")
    .col
      .row
        .col-auto.p-0.pl-2
          button.btn.btn-dark.icon-stone
        .col.p-0.pl-2(v-for="(item, i) in menu" :class="{'pr-2': i==menu.length-1}")
          button.btn.btn-block(@click="$router.push({ path: item.path })" :class="[checkPath(item.path) ? 'btn-light text-dark' : 'btn-dark']") {{ item.name }}
      .row(style="height: 780px;")
        .col(style="height: 780px;")
          transition(name="fade" mode="out-in")
            router-view
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: '消耗品', path: '/inventory/consumables' },
        { name: '材料', path: '/inventory/materials' },
        { name: '任務物品', path: '/inventory/quest_items' }
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

<style lang="scss"></style>
