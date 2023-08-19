<template>
  <div>
    <app-header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in"><!-- needs <main></main> into component to work -->
        <component :is="Component"></component>
      </transition>
    </router-view>
    <music-player />
    <app-auth />
  </div>
</template>

<script>
import AppAuth from './components/AppAuth.vue'
import AppHeader from './components/AppHeader.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'
import MusicPlayer from './components/MusicPlayer.vue'

export default {
  name: "App",
  components: { AppHeader, AppAuth, MusicPlayer },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }

}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>