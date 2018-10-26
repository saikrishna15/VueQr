<template>
  <header id="header">
    <ul class="header-inner">
      <li id="menu-trigger" data-target="mainmenu" data-toggle-sidebar data-model-left="mactrl.sidebarToggle.left" data-ng-class="{ 'open': mactrl.sidebarToggle.left === true }" class="p-t-10" ng-click="toggleNavigaion()">
        <div class="line-wrap">
          <div class="line top"></div>
          <div class="line center"></div>
          <div class="line bottom"></div>
        </div>
      </li>
      <li class="pull-right">
        <ul class="top-menu">
        <li>
            <a href="#login" tooltip-placement="bottom" tooltip="Signin">
              <i class="fa fa-sign-in fa-3x"></i>
            </a>
          </li>
        </ul>
      </li>
    </ul>


    <div id="top-search-wrap">
      <span></span>
    </div>
  </header>
</template>

<script>
  import axios from 'axios'
  export default {

    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  #header {
    background: #25275e;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    z-index: 1002;

  .header-inner {
    padding: 0px;

  ul.top-menu {
    > li {
      vertical-align: top;
      margin-top: 5px;  > a {
      margin-top: 10px;
      color: white;
      text-align: center;
      }
    }
  }
  ul.top-menu > li:not(#toggle-width):before {
    margin-top: 5px;
  }
  .logo a {
    font-size: 18px;
    > span {
          vertical-align: middle;
          height: 40px;
          line-height: 40px;
          width: 40px;
          text-align: center;
        }
      }
    }
  }



</style>
