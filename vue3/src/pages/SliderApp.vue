<template>
  <div class="flex flex-wrap w-full relative">
    <div class=" absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
    <div v-if="currentSlide == index" :class="color"  style="height:350px"></div>
      </transition> 
  </div>
  <div class="w-full" style="height: 340px">
    <div class="absolute bottom-0 w-full flex justify-center">
    <div class="w-4  m-3 h-4 rounded-full cursor-pointer shadow-md" 
    @click="makeActive(index)"
    v-for="(slider, index) in sliders" :key="slider" 
    :class="currentSlide == index ? 'bg-black':'bg-white'">

    </div>
  </div>
  </div>
  <!-- <div class="my-10 flex w-full">
  <div class="m-auto">
    <transition name="fade">
    <h1 v-if="isTitleShowing"> Slide Carousel</h1>
    </transition>
    <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text </button>
  </div>
  </div> -->
  </div>
</template>

<script> 
export default {
 data() { 
    return {
        currentSlide: 1,
        sliders: ['bg-green-600','bg-blue-600','bg-yellow-600'],
        interval:"",
        isTitleShowing: true,
    }
 },

methods: {
makeActive(index) {
  this.currentSlide = index
}
},

mounted() {
    this.interval = setInterval(() => { 
this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;  
    }, 2000);
},
beforeUnmount(){
    clearInterval(this.interval)
}
}
</script>

<style>
.fade-enter-active,
 .fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
 .fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>