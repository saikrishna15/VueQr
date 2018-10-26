<template>
  <div id="app">
    <top></top>
    <!-- start content -->
    <div class="container">
      <div class="row">
        <!-- start left sidebar -->

        <!-- end left sidebar -->
        <!-- start main content -->
        <div class="col-sm-6 col-md-6 col-lg-6">
          <router-view/>
          <div class="" style="width:100%;height:60px;">

          </div>
        </div>
        <!-- end main content -->
      </div>
    </div>
    <!-- end content -->
    <bottom></bottom>
  </div>
</template></template>
<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import top from "./components/layout/top.vue"
  import bottom from "./components/layout/bottom.vue"

  export default {
    name: 'app',
    components:{
      top,
      bottom,
    },
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #9d9d9d;*/
    background: #21252b;
    height: 100%;
  }
  *{color:#9d9d9d }
  *:focus {outline:none}

  body {background-color: #21252b;}
</style>
