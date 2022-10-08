<template>
<teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <template #title>
          Add New User
        </template>
        <template #body>
            <form @submit.prevent='submit'>
                <div class="p-2">
                    <label>Name</label>
                    <input class="w-full p-2 rounded border" placeholder="User Name" type="text"
                 v-model="state.form.name"
                    >
                </div>
                <label>Email</label>
                <div class="p-2">
                    <input class="w-full p-2 rounded border" placeholder="User Email" type="email"
                    v-model="state.form.email"
                    >
                </div>
                <label>Avatar</label>
                <div class="p-2">
                    <input class="w-full p-2 rounded border" placeholder="Avatar Url" type="text"
                v-model="state.form.avatar">

                </div>
                <div class="p-2">
                    <input class="w-full p-2 rounded border hover:bg-gray-300"
                     value="Create"
                     type="submit">
                </div>
            </form>

        </template>
    </Modal>
    </teleport>  
</template>

<script>
import Modal from "../ModalApp.vue"

export default {
    
components: {Modal},
setup(){
        const isModalOpen = ref(false)

}
}
</script>

<style>

</style>