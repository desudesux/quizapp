import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import Quiz from '../views/Quiz.vue'
import Vueapp from '../views/Vueapp.vue'
import Aboutproject from '../views/Aboutproject.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView
      },
      {
        path: '/quiz',
        name: 'quiz',
        component: Quiz
        },
        {
          path: '/vueapp',
          name: 'vueapp',
          component: Vueapp
          },
          {
            path: '/aboutproject',
            name: 'aboutproject',
            component: Aboutproject
            },
    
  ]
})

export default router
