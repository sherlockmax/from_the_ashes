import Vue from 'vue'
import Router from 'vue-router'

import Character from './views/Character.vue'
import Inventory from './views/Inventory.vue'
import Traits from './views/Traits.vue'
import AshesMap from './views/AshesMap.vue'
import Other from './views/Other.vue'
import NotReady from './views/NotReady.vue'

// character
import ShortGun from './views/Character/ShortGun.vue'
import LongGun from './views/Character/LongGun.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/character',
      component: Character,
      children: [
        {
          path: 'short_gun',
          component: ShortGun
        },
        {
          path: 'long_gun',
          component: LongGun
        },
        {
          path: 'melee_wepon',
          component: NotReady
        },
        {
          path: 'armor',
          component: NotReady
        },
        {
          path: 'amulet',
          component: NotReady
        },
        {
          path: 'ring',
          component: NotReady
        },
        {
          path: '',
          redirect: '/character/short_gun'
        }
      ]
    },
    {
      path: '/inventory',
      component: Inventory,
      children: [
        {
          path: 'consumables',
          component: NotReady
        },
        {
          path: 'materials',
          component: NotReady
        },
        {
          path: 'quest_items',
          component: NotReady
        },
        {
          path: '',
          redirect: '/inventory/consumables'
        }
      ]
    },
    {
      path: '/traits',
      component: Traits,
      children: [
        {
          path: 'all',
          component: NotReady
        },
        {
          path: '',
          redirect: '/traits/all'
        }
      ]
    },
    {
      path: '/ashes_map',
      component: AshesMap,
      children: [
        {
          path: 'earth',
          component: NotReady
        },
        {
          path: 'rhom',
          component: NotReady
        },
        {
          path: 'yaesha',
          component: NotReady
        },
        {
          path: '',
          redirect: '/ashes_map/earth'
        }
      ]
    },
    {
      path: '/other',
      component: Other,
      children: [
        {
          path: 'world_analysis',
          component: NotReady
        },
        {
          path: '',
          redirect: '/other/world_analysis'
        }
      ]
    },
    {
      path: '*',
      redirect: '/character'
    }
  ]
})
