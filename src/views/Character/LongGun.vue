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
            img(:src="require(`@/assets/img/weapons/long_gun/${gun.img}.png`)")
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
            .text-light(v-if="selectedItem.modInfo.descKey == 'repulsor'") 
              | 發射一枚彈藥，將目標傳送到異次元
              span.text-number 4
              | 秒。當目標返回後，他受到的反擊者武器主攻擊時，傷害為
              span.text-number 1.6
              | 倍，持續
              span.text-number 10
              | 秒。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'eye_of_the_storm'") 
              | 發射一枚彈藥，造成
              span.text-number 96
              span.text-info 電擊
              | 傷害，並造成
              span.text-info 超載
              | 效果。帶有
              span.text-info 超載
              | 效果的多名敵人靠近時會發生爆炸，對
              span.text-number 4.5
              | 範圍內的所有敵人造成
              span.text-number 200
              span.text-info 電擊
              | 傷害。
              
            .text-light(v-if="selectedItem.modInfo.descKey == 'sporebloom'") 
              | 射出一發爆炸性彈藥，在爆炸時對
              span.text-number 3
              | 米內的所有敵人造成
              span.text-number 140
              span.text-warning 腐壞
              | 傷害，並在原地留下一片致命的毒煙，持續
              span.text-number 7
              | 秒。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'ruin'") 
              | 在蓄力之後，如果施放者死亡，他會被立刻復活，並恢復
              span.text-number 100%
              | 生命。使用者在接下來的
              span.text-number 11
              | 秒內收到的傷害減少
              span.text-number 10%
              | ，並對
              span.text-warning 狀態
              | 效果免疫。

            .text-light(v-if="selectedItem.modInfo.descKey == 'particle_accelerator'") 
              | 發出一枚濃縮的重力核心，可以造成
              span.text-number 70
              | 傷害，並可以升成一個黑洞，將敵人拖向中心，持續
              span.text-number 5
              | 秒。隨著吸入的能量越來越多，黑洞會變得越發不穩定，並最終爆炸，對
              span.text-number 5
              | 米範圍內的敵人造成
              span.text-number 700
              | 傷害。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'devastator'") 
              | 射出一根大釘子，造成
              span.text-number 375
              | 傷害，同時造成
              span.text-number 300%
              | 額外的硬質傷害，並對目標造成
              span.text-danger 流血
              | 效果，在
              span.text-number 15
              | 秒內造成
              span.text-number 450
              | 傷害。
              
          .col.mod-info(v-else)
            .text-light 無
</template>

<script>
import WeaponLongGunData from '@/assets/json/weapon_long_gun.json'

export default {
  data() {
    return {
      rightPanel: 'info',
      items: WeaponLongGunData,
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
