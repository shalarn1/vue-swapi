import { createRouter, createWebHistory } from 'vue-router'
import FilmsView from '../views/FilmsView.vue'
import PeopleView from '../views/PeopleView.vue'
import VehiclesView from '../views/VehiclesView.vue'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/films',
      children: [
        { path: '', component: FilmsView },
        { path: '/films/:id', component: DetailsView },
      ]
    },
    {
      path: '/people',
      children: [
        { path: '', component: PeopleView },
        { path: '/people/:id', component: DetailsView },
      ]
    },
    {
      path: '/vehicles',
      children: [
        { path: '', component: VehiclesView },
        { path: '/vehicles/:id', component: DetailsView},
      ]
    },
    {
      path: '/planets',
      children: [
        { path: '/planets/:id', component: DetailsView},
      ]
    },
    {
      path: '/starships',
      children: [
        { path: '/starships/:id', component: DetailsView},
      ]
    },
    {
      path: '/species',
      children: [
        { path: '/species/:id', component: DetailsView},
      ]
    },
    { path: '/', redirect: '/films' },
    { path: '/home', redirect: '/films' },
  ],
})

export default router
