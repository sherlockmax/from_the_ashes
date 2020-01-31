<template lang="pug">
.row.h-100
  .col-8.p-2.h-100
    ul.list-group.item-list.pr-2.h-100-scroll
      li.list-group-item(v-for="(gun, i) in items" :class="{'mb-2': i < items.length-1, 'item-active': i == selectedItemIndex}" @click="setItem(i)")
        .row
          .gun-name {{ gun.name }}
          .col.text-center
            img(:src="require(`@/assets/img/rings/${gun.img}.png`)")
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
            .text-light(v-if="selectedItem.img == 'band_of_strength'") 
              | 在完成一次近戰擊殺後，近戰傷害提高
              span.text-number 10%
              | ，持續
              span.text-number 10
              | 秒。最多堆疊
              span.text-number 3
              | 層。
            
            .text-light(v-if="selectedItem.img == 'ring_of_the_admiral'") 
              | 受到的傷害增加
              span.text-number 300%
              | 。輸出的遠程和近戰傷害增加
              span.text-number 15%
              | 。
            
            .text-light(v-if="selectedItem.img == 'leech_ember'") 
              | 近戰攻擊可以吸取敵人的生命值。
            
            .text-light(v-if="selectedItem.img == 'stone_of_balance'") 
              | 遠程和近戰傷害增加
              span.text-number 10%
              | 。
            
            .text-light(v-if="selectedItem.img == 'mother_ring'") 
              | 你受到的遠程傷害減少
              span.text-number 20%
              | 。
            
            .text-light(v-if="selectedItem.img == 'pillar_of_stone'") 
              | 武器搖晃減少
              span.text-number 50%
              | ，後座力減少
              span.text-number 25%
              | 。
            
            .text-light(v-if="selectedItem.img == 'ring_of_evasion'") 
              | Moderately increases evade window and increases evade speed by 
              span.text-number 10%
              | 。
              | (暫譯：略微增加閃避時間，並使閃避速度提高
              span.text-number 10%
              | )

            .text-light(v-if="selectedItem.img == 'guardian_ring'") 
              | 你受到的近戰傷害降低
              span.text-number 20%
              | 。

            .text-light(v-if="selectedItem.img == 'keeper_ring'") 
              | 所有元素傷害的抗性增加
              span.text-number 20
              | 。

            .text-light(v-if="selectedItem.img == 'ezlan_band'") 
              | 最大生命增加
              span.text-number 25
              | 。

            .text-light(v-if="selectedItem.img == 'blood_font'") 
              | 每秒回復
              span.text-number 0.476
              | 生命。

            .text-light(v-if="selectedItem.img == 'devouring_loop'") 
              | 暴擊有
              span.text-nubmer 5%
              | 的機率造成
              span.text-number +300%
              | 的額外傷害。

            .text-light(v-if="selectedItem.img == 'sagestone'") 
              | 獲得的經驗值增加
              span.text-number 25%
              | 。
            
            .text-light(v-if="selectedItem.img == 'razorstone'") 
              | 近戰暴擊會造成
              span.text-danger 流血
              | 效果，在
              span.text-number 10
              | 秒內造成
              span.text-number 100%
              | 近戰傷害。
            
            .text-light(v-if="selectedItem.img == 'gravity_stone'") 
              | 當穿戴者附近
              span.text-number 10
              | 米內至少有
              span.text-number 2
              | 名敵人時，傷害增加
              span.text-number 20%
              | 。

            .text-light(v-if="selectedItem.img == 'root_circlet'") 
              | 近戰攻擊速度增加
              span.text-number 15%
              | 。

            .text-light(v-if="selectedItem.img == 'heart_of_the_wolf'") 
              | 體力增加
              span.text-number 25
              | ，移動速度增加
              span.text-number 10%
              | 。

            .text-light(v-if="selectedItem.img == 'heartseeker'") 
              | 對被動怪物的暴擊率為
              span.text-number 100%
              | ，並使暴擊傷害增加
              span.text-number 15%
              | 。

            .text-light(v-if="selectedItem.img == 'jewel_of_the_black_sun'") 
              | 在完成一次遠程擊殺後，遠程傷害增加
              span.text-number 5%
              | ，持續
              span.text-number 10
              | 秒。可以堆疊
              span.text-number 4
              | 層。

            .text-light(v-if="selectedItem.img == 'braided_thorns'") 
              | 在成功擊殺敵人後，暴擊率提高
              span.text-number 15%
              | ，持續
              span.text-number 6
              | 秒。
            
            .text-light(v-if="selectedItem.img == 'hunter_halo'") 
              | 所有槍械的有效射程加
              span.text-number 20%
              | 。
            
            .text-light(v-if="selectedItem.img == 'hunter_band'") 
              | 從
              span.text-number 15
              | 米外擊中目標弱點時，弱點傷害增加
              span.text-number 25%
              | 。
</template>

<script>
import RingsData from '@/assets/json/rings.json'

export default {
  data() {
    return {
      rightPanel: 'info',
      items: RingsData,
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
