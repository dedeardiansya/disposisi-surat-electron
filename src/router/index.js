import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import Letter from '@/views/letter'
import CreateLetter from '@/views/letter/Create'
import EditLetter from '@/views/letter/Edit'
import User from '@/views/User'
import EditProfile from '@/views/EditProfile'
import Login from '@/views/Login'
import Register from '@/views/Register'

import middlewarePipeline from './middlewarePipeline'
import auth from './middleware/auth'
import guest from './middleware/guest'
import canManageUser from './middleware/canManageUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/letter',
    name: 'Letter',
    component: Letter,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/letter/create',
    name: 'CreateLetter',
    component: CreateLetter,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/letter/edit/:id',
    name: 'EditLetter',
    component: EditLetter,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/users',
    name: 'User',
    component: User,
    meta: {
      middleware: [auth, canManageUser]
    }
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfile,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'hash',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
