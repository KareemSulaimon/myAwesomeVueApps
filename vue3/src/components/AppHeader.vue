<template> 
<nav class="w-full bg-gradient-to-r
from-blue-800 to-blue-600 text-white
px-4 py-2">
<router-link v-for="item in list" :key="item.to" 
class="mx-2" :to="item.to" >{{ item.title}} </router-link>
<button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
<button v-else class="mx-2" @click="openLogin">Login</button>
</nav>
</template>
<script> 
import firebase from "../utilities/firebase"
export default { 
 data() {
    return {
        list:[
           
            {title: "DC Heroes", to:"/dc-heroes"},
            {title: "Calendar", to:"/calendar-app"},
            {title: "Markdown", to:"/markdown-app"},
            {title: "Slider", to:"/slider-app"},
            {title: "Calculator", to:"/calculator-app"},
            {title: "Modal", to:"/reuseable-modal"},
            {title: "Chat", to:"/chat-app"},
            {title: "UserCrud", to:"/user-crud"},
            {title: "TensorFlow", to:"/tensor-flow"},
        ],
      
    };
 },
     computed: {
      isLoggedIn() {
         return this.$store.state.isLoggedIn
}
 },
 methods: {
    logout() {
        firebase.auth().signOut()
        
    },
    openLogin() {
        this.$store.commit('setLoginModal', true)
    }
 }
};
</script>

<style></style>