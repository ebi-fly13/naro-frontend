import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/NotFound.vue'
import PingPage from './pages/PingPage.vue'
import LoginPage from './pages/LoginPage.vue'
import LogoutPage from './pages/LogoutPage.vue'
import CityPage from './pages/CityPage.vue'
import SelectPage from './pages/SelectPage.vue'
import CountryList from './pages/CountryList.vue'
import CityList from './pages/CityList.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { isPublic: true } },
  { path: '/ping', name: 'ping', component: PingPage },
  { path: '/login', name: 'login', component: LoginPage, meta: { isPublic: true } },
  { path: '/logout', name: 'logout', component: LogoutPage },
  { path: '/city/:cityName', name: 'city', component: CityPage, props: true },
  { path: '/select', name: 'select', component: SelectPage },
  { path: '/country', name: 'country', component: CountryList },
  { path: '/country/:countryCode', name: 'cityList', component: CityList, props: true },
  { path: '/:path(.*)', component: NotFound, meta: { isPublic: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta.isPublic) {
    return true
  }
  const res = await fetch('/api/me')
  if (res.ok) return true
  return '/login'
})

export default router
