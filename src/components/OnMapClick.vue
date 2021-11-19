<template>
  <div style="height: 800px;">
    <l-map
        style="height: 100%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="campus"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer,LMarker} from '@vue-leaflet/vue-leaflet';
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright%22%3EOpenStreetMap"</a> contributors',
      zoom: 3,
      center: [47.413220, -1.219482],
      campus : [45.64080539261331, 5.874018113832485],
    };
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
  }
}
</script>