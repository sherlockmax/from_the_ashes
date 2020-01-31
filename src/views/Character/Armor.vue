<template lang="pug">
.row.h-100
  .col-8.p-2.h-100
    ul.list-group.item-list.pr-2.h-100-scroll.list-inline
      li.list-group-item.list-inline-item
        .gun-name aaa
        .col.text-center
          img(:src="require(`@/assets/img/armor/body/adventurer_tunic.png`)")
      li.list-group-item.list-inline-item
          .gun-name aaa
          .text-center
            img(:src="require(`@/assets/img/armor/body/adventurer_tunic.png`)")
      li.list-group-item.list-inline-item
        .gun-name aaa
        .text-center
          img(:src="require(`@/assets/img/armor/body/adventurer_tunic.png`)")
  .col.p-0.pr-2.pt-2.h-100-scroll
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
        .row.mt-3
          .col.text-danger 
            h4 {{ selectedItem.damage }}
        hr.bg-light
        .row
          .col-auto 暴擊機率
          .col.text-right.text-info {{ selectedItem.criticalHitChance }} %
      li.list-group-item.text-center.mb-2
        .row
          .col.text-center 武器效果
        .row.mt-3
          .col.text-center
            h4.text-info(v-if="selectedItem.hasMod") {{ selectedItem.modInfo.name }}
            h4.text-light(v-else) 無
        .row
          .col.gun-info-mod
            img(v-if="selectedItem.hasMod" :src="require(`@/assets/img/weapons_mod/${selectedItem.img}_mod.png`)")
        .row.mt-3
          .col.mod-info(v-if="selectedItem.hasMod")
            .text-light(v-if="selectedItem.modInfo.descKey == 'voice_of_the_tempest'") 
              | 有
              span.text-number 36%
              | 的機率對目標造成
              span.text-info 超載
              | 效果，持續
              span.text-number 20
              | 秒。蓄力攻擊造成的
              span.text-info 超載
              | 效果的機率為
              span.text-number 100%
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'the_lost_harpoon'") 
              | 每一次擊中敵人都會使傷害提高
              span.text-number 10%
              | ，持續
              span.text-number 15
              | 秒。可以疊加
              span.text-number 5
              | 層。
              
            .text-light(v-if="selectedItem.modInfo.descKey == 'world_breaker'") 
              | 蓄力攻擊會放出爆炸性衝擊波，將敵人擊退並產生硬質。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'petrified_maul'") 
              | 每一擊都有
              span.text-number 36%
              | 的機率額外造成
              span.text-number 100%
              | 的硬質傷害。蓄力攻擊造成額外硬質傷害的機率為
              span.text-number 100%
              | 。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'cuardian_axe'") 
              | 用斧子造成的傷害的
              span.text-number 100%
              | 會被轉會為兩把槍械上裝備的武器改裝的改裝威力。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'smolder'") 
              | 有
              span.text-number 36%
              | 機率對目標造成
              span.text-danger 燃燒
              | 效果，並在接下來的
              span.text-number 10
              | 秒內造成
              span.text-number 420
              span.text-danger 火焰
              | 傷害。蓄力攻擊造成
              span.text-danger 燃燒
              | 效果的機率為
              span.text-number 100%
              | 。

            .text-light(v-if="selectedItem.modInfo.descKey == 'riven'") 
              | 將對敵人造成的傷害吸收為對自己的治療。
            
            .text-light(v-if="selectedItem.modInfo.descKey == 'scar_of_the_jungle_god'") 
              | 有
              span.text-number 36%
              | 的機率對目標造成
              span.text-danger 流血
              | 效果，並在接下來的
              span.text-number 15
              | 秒內造成
              span.text-number 450
              | 傷害。蓄力攻擊造成
              span.text-danger 流血
              | 效果的機率為
              span.text-number 100%
              | 。

          .col.mod-info(v-else)
            .text-light 無
</template>

<script>
import WeaponMeleeWeapon from '@/assets/json/weapon_melee_weapon.json'

export default {
  data() {
    return {
      rightPanel: 'info',
      items: WeaponMeleeWeapon,
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
