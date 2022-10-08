   <template>
  <div class="m-auto">
 <h1 class=" text-2xl text-center m-5" >Vue Calendar </h1>
 <section class="mx-2 flex justify-between">
 <h2 class="font-bold" >{{currentMonthName }}</h2>
 <h2 class="font-bold" >{{ currentYear }}</h2>
 </section>
   <section class="flex">
    <p class="text-center" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</p>
  </section>

  <section class="flex flex-wrap">
    <p class="text-center" 
    style="width: 14.28%"
     v-for="num in startDay()" 
     :key="num">
     
     </p>
    <p class="text-center" 
    style="width: 14.28%"
     v-for="num in dayInMonths(currentYear, currentMonth)" 
     :key="num"
     :class="currentDayClass(num)">
     {{num}}
     </p>
     
  </section>
  <section class="flex justify-between my-4">
    <button class="px-2 border rounded" @click="prev">Prev</button>
    <button class="px-2 border rounded" @click="next">Next</button>
  </section>
   </div>
</template>

<script>
export default { 
     methods: {
       dayInMonths() {
           return new Date(this.currentYear,  this.currentMonth , 0).getDate()
     },
      startDay() {
          return new Date(this.currentYear, this.currentMonth ,  1).getDay()
     },
      next() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear++
        }
        else {    this.currentMonth++

        }
          
     },
      prev() {
     if (this.currentMonth == 0) {
            this.currentMonth = 11
            this.currentYear--
          
        }
        else {  
        this.currentMonth--

        }
     },
     currentDayClass(num) {
          const calendarFullDate = new Date(
            this.currentYear,this.currentMonth,num).toDateString();
         const currentFullDate = new Date().toDateString();
         return calendarFullDate === currentFullDate ? 'text-red-600' : 'text-blue-600';
         
     }
     },

     computed: {
          currentMonthName() {
            return new Date(this.currentYear,this.currentMonth).
            toLocaleString('default',{month: "long"})
          }                              
     },

    data() {
        return {
          currentDay: new Date().getUTCDate(),
          currentMonth: new Date().getMonth() ,
          currentYear: new Date().getFullYear(),
          days: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
          
        }
    }
}

</script>

<style>

</style>