import Vue from 'vue'
import Router from 'vue-router'

import NotReady from './views/NotReady.vue'

// character
import ShortGun from './views/Character/ShortGun.vue'
import LongGun from './views/Character/LongGun.vue'
import MeleeWeapon from './views/Character/MeleeWeapon.vue'
import Armor from './views/Character/Armor.vue'
import Amulet from './views/Character/Amulet.vue'
import Rings from './views/Character/Rings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/character/short_gun',
      component: ShortGun
    },
    {
      path: '/character/long_gun',
      component: LongGun
    },
    {
      path: '/character/melee_wepon',
      component: MeleeWeapon
    },
    {
      path: '/character/armor',
      component: Armor
    },
    {
      path: '/character/amulet',
      component: Amulet
    },
    {
      path: '/character/ring',
      component: Rings
    },
    {
      path: '/inventory/consumables',
      component: NotReady
    },
    {
      path: '/inventory/materials',
      component: NotReady
    },
    {
      path: '/inventory/quest_items',
      component: NotReady
    },
    {
      path: '/traits/all',
      component: NotReady
    },
    {
      path: '/ashes_map/earth',
      component: NotReady
    },
    {
      path: '/ashes_map/rhom',
      component: NotReady
    },
    {
      path: '/ashes_map/yaesha',
      component: NotReady
    },
    {
      path: '/other/world_analysis',
      component: NotReady
    },
    {
      path: '*',
      redirect: '/character/short_gun'
    }
  ]
})
