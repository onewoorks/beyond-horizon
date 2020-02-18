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
                
                <div>{{marker.id}}</div>
                <div><a href="">Go To Detail Report</a></div>
                </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  components: {
    "l-map": LMap,
    "l-tile-layer": LTileLayer,
    "l-marker": LMarker,
    "l-popup": LPopup
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
          id: "tower A1 - 13401 VF",
          position: [4.594079, 103.448067],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "m2",
          position: [4.592621, 103.443398],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "m3",
          position: [4.592202, 103.441450],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "m4",
          position: [4.591893, 103.440286],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "m5",
          position: [4.591722, 103.438805],
          visible: true,
          icon: myMarkerIcon
        },
        {
          id: "m2",
          position: [4.591150, 103.435576],
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
  }
};
</script>