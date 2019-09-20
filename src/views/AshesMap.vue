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
        { name: '地球', path: '/ashes_map/earth' },
        { name: '洛姆', path: '/ashes_map/rhom' },
        { name: '耶莎', path: '/ashes_map/yaesha' }
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
