import { createRouter, createWebHistory } from 'vue-router'
import startView from '@/views/startView.vue'
import dataView from '@/views/dataView.vue'
import infoView from '@/views/infoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "start",
    component: startView
    },
    {
      path: "/data",
      name: "data",
      component: dataView
    },
    {
      path: "/info",
      name: "info",
      component: infoView
    }
  ],
})

export default router
