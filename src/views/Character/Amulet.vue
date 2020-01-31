<template lang="pug">
.row.h-100
  .col-8.p-2.h-100
    ul.list-group.item-list.pr-2.h-100-scroll
      li.list-group-item(v-for="(gun, i) in items" :class="{'mb-2': i < items.length-1, 'item-active': i == selectedItemIndex}" @click="setItem(i)")
        .row
          .gun-name {{ gun.name }}
          .col.text-center
            img(:src="require(`@/assets/img/amulet/${gun.img}.png`)")
  .col.p-0.pr-2.pt-2.h-100-scroll
    ul.list-group
      li.list-group-item.text-center.mb-2
        h5.mb-0 {{ selectedItem.name }}
    .row.mb-2
        .col.pr-1
          .btn.btn-block.btn-block(:class="[rightPanel == 'info' ? 'btn-light text-dark' : 'btn-dark']" @click="rightPanel = 'info'") 武器資訊
        .col.pl-1
          .btn.btn-block.btn-block(:class="[rightPanel == 'howToGet' ? 'btn-light text-dark' : 'btn-dark']" @click="rightPanel = 'howToGet'") 取得方式
    ul.list-group
      li.list-group-item.text-center.mb-2
        .row
          .col.text-center 裝備效果
        .row.mt-3
          .col.mod-info
            .text-light(v-if="selectedItem.img == 'storm_amulet'") 
              | 使所有
              span.text-warning 元素
              | 傷害提高
              span.text-number 20%
              | 。
            
            .text-light(v-if="selectedItem.img == 'galenic_charm'") 
              | 當受到來自敵人的傷害時，傷害量的
              span.text-number 300%
              | 轉化為改裝威力。
            
            .text-light(v-if="selectedItem.img == 'pocket_watch'") 
              | 每秒體力回復增加
              span.text-number 15
              | ，體力消耗減少
              span.text-number 15%
              | 。
            
            .text-light(v-if="selectedItem.img == 'twisted_idol'") 
              | 護甲強度增加
              span.text-number 15%
              | 。
            
            .text-light(v-if="selectedItem.img == 'gunslinger_charm'") 
              | 射速增加
              span.text-number 10%
              | ，而且裝彈速度增加
              span.text-number 20%
              | 。
            
            .text-light(v-if="selectedItem.img == 'mender_charm'") 
              | 在使用時有
              span.text-number 25%
              | 的機率不消耗龍心，並使所有治療物品對自己的治療效率增加
              span.text-number 25%
              | 。
            
            .text-light(v-if="selectedItem.img == 'scavenger_bauble'") 
              | 收集到的廢料增加
              span.text-number 35%
              | 。

            .text-light(v-if="selectedItem.img == 'butcher_fetish'") 
              | 在打出近戰暴擊後，近戰傷害提高
              span.text-number 25%
              | ，持續
              span.text-number 10
              | 秒。

            .text-light(v-if="selectedItem.img == 'cleansing_jewel'") 
              | 龍心可以祛除全部的
              span.text-warning 狀態
              | 效果，同時使
              span.text-warning 狀態
              | 效果累積率降低
              span.text-number 50%
              | 。

            .text-light(v-if="selectedItem.img == 'vengeance_idol'") 
              | 當英雄的生命值低於
              span.text-number 25%
              | 時，遠程和近戰傷害增加
              span.text-number 50%
              | 。

            .text-light(v-if="selectedItem.img == 'brutal_mark'") 
              | 對生命值低於
              span.text-number 50%
              | 的敵人造成的傷害增加
              span.text-number 15%
              | 。

            .text-light(v-if="selectedItem.img == 'rock_of_anguish'") 
              | 在遭受傷害之後，移動速度增加
              span.text-number 20%
              | ，裝彈速度增加
              span.text-number 50%
              | ，持續
              span.text-number 5
              | 秒。

            .text-light(v-if="selectedItem.img == 'leto_amulet'") 
              | 護甲負重降低
              span.text-number 40%
              | ，體力消耗降低
              span.text-number 10%
              | 。

</template>

<script>
import AmuletData from '@/assets/json/amulet.json'

export default {
  data() {
    return {
      rightPanel: 'info',
      items: AmuletData,
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
