<template>
  <section class="w-full flex ">
    <div class="m-auto">
        <div class="mt-10">
        <div class="text-center w-full">
            <h1 class="text-2xl mt-4">Tensorflow Object Detention</h1>
            <small>Try with Cellphone Only</small>
        </div>
            <div class="flex flex-wrap justify-center my-2">
              <div class="w-full flex justify-center">
            <button 
            v-if="!isStreaming"
            @click="openCamera"
            class="w-30 rounded shadow-md bg-gradient-to-r
              from-blue-800 to-indigo-800 text-white px-2 py-1">
               Open Camera
               </button>
               <div v-else class="flex justify-between ">
            <button 
            @click="closeCamera"
            class="w-30 rounded shadow-md bg-gradient-to-r
              from-green-800 to-indigo-800 text-white mx-2  my-2 px-2 py-1">
               Close Camera
               </button>
            <button 
            @click="snapShot"
            class="w-30 rounded shadow-md bg-gradient-to-r
              from-green-800 to-indigo-800 text-white mx-2  my-2 px-2 py-1">
              Snap Shot
               </button>
               </div>
               </div>
               <!-- this is where the video is screenshot -->
              <video ref="videoRef" autoplay="true" width="200" />
              </div>
            <div class="flex flex-wrap justify-center">
            <img
            ref="imgRef"
             src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
             width="200"
             crossorigin="anonymous" />
             <div class="w-full text-center my-4">
             <button @click="detect" class="w-30 rounded shadow-md bg-gradient-to-r
              from-red-800 to-pink-800 text-white p-2">
              <span v-if="isLoading">Loading..</span>
              <span v-else>
              Detect Object
                </span> 
              </button>
             <div v-if="result.length > 0" class="w-full text-center">
             <p>{{result[0].class}}</p>
           </div>
            </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {
    setup() {
      const imgRef = ref("");
      const videoRef = ref("");
      const result = ref([]);
      const isLoading = ref(false);
      const isStreaming = ref(false);
        

    async function detect() { 
    const img = imgRef.value
    isLoading.value = true
    const model = await cocoSsd.load();
    const predictions = await model.detect(img);
     result.value = predictions
     isLoading.value = false
      }

     async function openCamera() {
     if(navigator.mediaDevices.getUserMedia){ 
     const devices =  await navigator.mediaDevices.enumerateDevices() 
     const cams = devices.filter((device) => device.kind === "videoinput")
     const camId = (cams[0].deviceId);
      navigator.mediaDevices
      .getUserMedia({ video: {deviceId: {exact: camId}}})
      .then((stream) =>  {
        isStreaming.value = true
        videoRef.value.srcObject = stream
      })
     }
}
  function closeCamera(){
   const stream = videoRef.value.srcObject
   const tracks = stream.getTracks()
   tracks.map((track) => track.stop())
   isStreaming.value = false
  }
  function snapShot() {
     const canvas = document.createElement('canvas');
     const ctx = canvas.getContext("2d");
     ctx.drawImage(videoRef.value, 0, 0, 200, 200);
     const data = canvas.toDataURL("image/png");
     imgRef.value.setAttribute("src", data)

  }

      return {imgRef, result, detect ,isLoading,openCamera,
       videoRef,isStreaming,closeCamera,snapShot }
    
    }
    
}
</script>

<style>

</style> 