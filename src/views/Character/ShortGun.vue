<template lang="pug">
.row
  .col-8.p-2
    ul.list-group.item-list.pr-2
      li.list-group-item(v-for="(gun, i) in items" :class="{'mb-2': i < items.length-1, 'item-active': i == selectedItemIndex}" @click="setItem(i)")
        .row
          .gun-name {{ gun.name }}
          .gun-mod
            img(v-if="gun.hasMod" :src="require(`@/assets/img/weapons_mod/${gun.img}_mod.png`)")
            img(v-else :src="require(`@/assets/img/weapons_mod/null_mod.png`)")
          .col.text-center
            img(:src="require(`@/assets/img/weapons/short_gun/${gun.img}.png`)")
  .col.p-0.pr-2.pt-2
    ul.list-group
      li.list-group-item.text-center.mb-2
        h5.mb-0 {{ selectedItem.name }} 
          span.text-warning(v-if="selectedItem.hasMod") +10
          span.text-danger(v-else) +20
    .row.mb-2
      .col.pr-1
        .btn.btn-block.btn-block(:class="[rightPanel == 'info' ? 'btn-light text-dark' : 'btn-dark']" @click="rightPanel = 'info'") 武器資訊
      .col.pl-1
        .btn.btn-block.btn-block(:class="[rightPanel == 'howToGet' ? 'btn-light text-dark' : 'btn-dark']" @click="rightPanel = 'howToGet'") 取得方式
    ul.list-group
      li.list-group-item.text-center.mb-2
        .row
          .col 傷害
          .col 每秒彈數
          .col 彈匣
        .row.mt-3
          .col.text-danger 
            h4 {{ selectedItem.damage }}
          .col.text-info
            h4 {{ selectedItem.rps }}
          .col.text-info
            h4 {{ selectedItem.magazine }}
        hr.bg-light
        .row
          .col-auto 精確度
          .col.text-right.text-info {{ selectedItem.accuracy }} %
        .row
          .col-auto 理想範圍
          .col.text-right.text-info {{ selectedItem.idealRange }} m
        .row
          .col-auto 最大彈藥量
          .col.text-right.text-info {{ selectedItem.maxAmmo }}
        .row
          .col-auto 暴擊機率
          .col.text-right.text-info {{ selectedItem.criticalHitChance }} %
      li.list-group-item.text-center.mb-2
        .row
          .col.text-center 武器改裝
        .row.mt-3
          .col.text-center
            h4.text-info(v-if="selectedItem.hasMod") {{ selectedItem.modInfo.name }}
            h4.text-light(v-else) Empty
        .row
          .col.gun-info-mod
            img(v-if="selectedItem.hasMod" :src="require(`@/assets/img/weapons_mod/${selectedItem.img}_mod.png`)")
            img(v-else :src="require(`@/assets/img/weapons_mod/null_mod.png`)")
        .row.mt-3
          .col.mod-info(v-if="selectedItem.hasMod")
            .text-light(v-if="selectedItem.modInfo.descKey == 'defiler'") 
              | 射出
              span.text-number 6
              | 發具有輻射性的彈藥，可以在碰撞時發生跳彈，並且每一發可以造成
              span.text-number 70
              span.text-warning 輻射
              | 傷害。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'spitfire'") 
              | 噴出火焰，對目標造成
              span.text-danger 燃燒
              | 效果，在
              span.text-number 10
              | 秒的時間內造成
              span.text-number 450
              span.text-danger 火焰
              | 傷害。
              
            .text-light(v-if="selectedItem.modInfo.descKey == 'curse_of_the_jungle_god'") 
              | 發射一枚彈藥，在發生碰撞時變成一隻
              span.text-warning 觸手
              | 。觸手可以造成
              span.text-number 180
              span.text-info 電擊
              | 傷害，並吸取英雄
              span.text-number 2.5%
              | 的生命值。持續存在
              span.text-number 30
              | 秒。(最多
              span.text-number 2
              | )
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'hive_cannon'") 
              | 射出一發蟲巢彈藥，在撞擊時釋放出一片致命的昆蟲，對
              span.text-number 2.5
              | 米內的敵人造成
              span.text-number 56
              span.text-success 腐蝕
              | 傷害。
          .col.mod-info(v-else)
            .text-light 無
</template>

<script>
import WeaponShortGunData from '@/assets/json/weapon_short_gun.json'

export default {
  data() {
    return {
      rightPanel: 'info',
      items: WeaponShortGunData,
      selectedItemIndex: 0,
      selectedItem: {}
    }
  },
  created() {
    this.setItem(0)
  },
  methods: {
    setItem(itemIndex) {
      this.selectedItemIndex = itemIndex
      this.selectedItem = this.items[itemIndex]
    }
  }
}
</script>

<style lang="scss">
ul.item-list {
  height: 740px;
  overflow-x: hidden;
  overflow-y: scroll;
}

ul.item-list li,
li {
  border-width: 2px;
  border-radius: 0.25rem !important;
}

ul.item-list li:hover,
ul.item-list li.item-active {
  border-color: white;
}

ul.item-list li img {
  opacity: 0.2;
  height: 100px;
}

ul.item-list li:hover img,
ul.item-list li.item-active img {
  opacity: 1;
}

.text-number {
  font-weight: bold;
  margin-left: 4px;
  margin-right: 4px;
  color: white;
}

.mod-info {
  height: 178px;
}

.gun-name {
  position: absolute;
  top: 15px;
  left: 15px;
}

.gun-mod {
  position: absolute;
  top: 15px;
  right: 15px;
}

.gun-info-mod img {
  height: 120px;
}
</style>
