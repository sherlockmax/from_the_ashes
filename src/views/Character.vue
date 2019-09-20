<template lang="pug">
  .row(style="height: 100%;")
    .col(style="height: 100%;")
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
        { name: '短槍', path: '/character/short_gun' },
        { name: '長槍', path: '/character/long_gun' },
        { name: '近戰武器', path: '/character/melee_wepon' },
        { name: '套裝', path: '/character/armor' },
        { name: '項鍊', path: '/character/amulet' },
        { name: '戒指', path: '/character/ring' }
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
