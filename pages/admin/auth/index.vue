<template>
  <div class="auth">
    <form class="auth__form" @click.prevent="onLogin">
      <AppInput v-model="user.email" type="email" >Логин: </AppInput>
      <AppInput v-model="user.password" type="password">Пароль:</AppInput>
      <AppButton>Войти!</AppButton>
      <Message v-if="message" :message="message" messageClass="error" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      message: null,
    }
  },
  methods: {
    onLogin() {
      this.message = null;
      if(this.onValidate(this.user.email, 'Заполните e-mail') && this.onValidate(this.user.password, 'Заполните пароль')) {
        this.$store.dispatch('authUser', this.user)
        .then(res => {
          if(res.idToken) {
            this.message = null;
            this.$router.push('/admin/');
          } else {
              this.message = res.error.message ? res.error.message : 'Error';
          }
        });
      }
    },
    onValidate(text, errorText) {
      if(text.trim().length === 0) {
        this.message = errorText;
        return false;
      } else {
        return true;
      }
    }
  }
}
</script>
<style lang="scss">
  .auth {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    &__form {
      max-width: 440px;
    }
  }
</style>