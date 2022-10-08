<template>
 <section class="flex flex-wrap w-full">
    <div class="m-auto">
    <h1 class="text-2xl my-5 w-full">
        Reusable Modal</h1>    
    <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false" >
   <template  #title>
  Red Modal
   </template>
   <template #body>
<p>This is the body slot</p>
   </template>

   
    </Modal>
    <button @click="isRedModalOpen=true ">Open Modal</button>

    <Modal v-if="isBlueModalOpen" @close="isBlueModalOpen = false" >
        <template #title>
  Blue Modal
   </template>
   <template #body>
<p>This is the body slot</p>
   </template>
    </Modal>
    <button @click="isBlueModalOpen=true ">Open Modal</button>
    </div>
 </section>
</template>

<script>
import Modal from "../components/ModalApp.vue"
import {ref} from "vue"
export default {
components: {Modal},
setup() {
    const isRedModalOpen = ref(true)
    const isBlueModalOpen = ref(true)
    return {isRedModalOpen, isBlueModalOpen}
}

}
</script>

<style>

</style>