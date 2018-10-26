<template>
    <div   class="nav navbar-fixed-bottom navbar-default bgm-white box-shadow p-5 mofooter" >
      <div  class="c-black f-13 display-inline-block col-sm-3">
        <span class="f-500">Data Current as of - </span>
        <a   am-time-ago="lastUpdated" href="javascript:;"></a>

      </div>
      <div class="col-sm-6">
        <button   class="btn btn-primary pull-middle waves-effec p-0 mo-footer-btn" type="button" >Update Data Display</button>
      </div>

    </div>



</template>

<script>

</script>

<style scoped>

  .mofooter {
    height: 30px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    vertical-align: middle;
  }

</style>
