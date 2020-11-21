export default function auth({ next, store }) {
  if (!store.getters.isLogin) {
    return next('/login')
  }

  return next()
}
