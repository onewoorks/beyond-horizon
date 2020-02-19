<template>
  <div  class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar v-if="this.$router.currentRoute.name!='login'">
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard" style=''>
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>

      <sidebar-link to="/reports">
        <md-icon>assessment</md-icon>
        <p>Reports Generated</p>
      </sidebar-link>

      <sidebar-link to="/gis">
        <md-icon>assessment</md-icon>
        <p>GIS Reports</p>
      </sidebar-link>

      <br>
      <br>

      <sidebar-link to="/equipments">
        <md-icon>people</md-icon>
        <p>Staffs</p>
      </sidebar-link>

      <sidebar-link to="/equipments">
        <md-icon>card_travel</md-icon>
        <p>Equipments</p>
      </sidebar-link>

    </side-bar>

    <div class="main-panel" v-if="this.$router.currentRoute.name!='login'" >
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>

    <div v-if="this.$router.currentRoute.name=='login'">
       <dashboard-content> </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  data: {
    mainpanel: false
  },
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
  },
  mounted: function(){
    if(this.$router.currentRoute.name==='login'){
    //  this,main-panel
    }
    console.log(this.$sidebar.showSidebar)
  }
};
</script>
