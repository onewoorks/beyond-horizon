<template>
  <div>
    <div id="divmap">
      <l-map ref="map" :zoom="zoom" :center="center" style="height:800px">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="[51.81416, -2.27936]"></l-marker>
        <l-marker
          v-for="marker in markers"
          :key="marker.id"
          :visible="marker.visible"
          :lat-lng="marker.position"
          :icon="marker.icon"
        >
          <l-popup>
            <div>{{ marker.id }}</div>
            <br>
            <div><a @click="open_mini_report()">Go To Detail Report</a></div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
    <div class="mini-report">
      <DetailReport />
    </div>
  </div>
</template>

<style>
  .mini-report {
        width: 45%;
    height: 100vh;
    right: 0;
    top: 0;
    z-index: 1000;
    background-color: ghostwhite;
    position: fixed;
    display: none;
    overflow: scroll;
    overflow-x: hidden
  }
  
</style>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import DetailReport from '@/pages/Reports/Gis/DetailReport'

export default {
  components: {
    "l-map": LMap,
    "l-tile-layer": LTileLayer,
    "l-marker": LMarker,
    "l-popup": LPopup,
    DetailReport
  },
  data() {
    const myMarkerIcon = L.icon({
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png")
    });
    return {
      title: "Vue2-Leaflet map",
      map: null,
      zoom: 15,
      center: L.latLng(4.594079, 103.448067),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; Onewoorks and <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      myMarkerIcon: L.icon({
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png")
      }),
      markers: [
        {
          id: "TOWER A1 - 13400 VF",
          position: [4.594079, 103.448067],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "TOWER A1 - 13401 VF",
          position: [4.592621, 103.443398],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "TOWER A1 - 13402 VF",
          position: [4.592202, 103.44145],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "TOWER A1 - 13403 VF",
          position: [4.591893, 103.440286],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "TOWER A1 - 13404 VF",
          position: [4.591722, 103.438805],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "TOWER A1 - 13405 VF",
          position: [4.59115, 103.435576],
          visible: true,
          icon: myMarkerIcon
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject;
    });
  },
  methods: {
    open_mini_report: function(){
      document.getElementsByClassName('mini-report')[0].style.display = 'block'
    }
  }
};
</script>
