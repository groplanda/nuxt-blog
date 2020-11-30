export default function (context) {
  context.store.dispatch('checkAuthUser');
  if(!context.store.getters.getToken) {
    context.redirect(302, '/admin/auth/')
  }
}