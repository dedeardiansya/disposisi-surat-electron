export default function guest({ next, store }) {
  if (store.getters.isLogin) {
    return next('/')
  }

  return next()
}
