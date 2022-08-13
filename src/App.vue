<template>
<BeseHeader @show-sidBar="handelSidbar"/>

  <router-view />

<BeasFooter :showSidbar="isShowsidBar"/>

</template>

<script>
import BeseHeader from './components/BeseHeader.vue'
import BeasFooter from './components/BeasFooter.vue'

export default {
  name:"App",
     components:{
        BeseHeader,
        BeasFooter
    },
    data:()=>({
      isShowsidBar:false
    }),
    methods:{
      handelSidbar(showsidbar){       
        this.isShowsidBar = showsidbar;
      }
    }

}
</script>

<style>

</style>