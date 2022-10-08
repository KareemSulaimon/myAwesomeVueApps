<template>
  <section class="mt-5 text-center">
                <button class="border px-2 rounded"
                @click="lorginWithGoogle">Lorgin With Google</button>
            </section>
</template>

<script>
import firebase from "../../utilities/firebase"
export default {
methods: {
  lorginWithGoogle() { 
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider).then(() => {
    this.$emit("close-login-from-google");
  })
}
}
}
</script>

<style>

</style>