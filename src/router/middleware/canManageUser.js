export default function isSuperadmin({ next, store }) {
  if (!store.getters.canManageUser) {
    return next('/')
  }
  return next()
}
