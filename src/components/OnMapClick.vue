<template>

  <div style="height: 350px;">
    <l-map
        style="height: 80%; width: 100%"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="suppliersLocation">

      </l-marker>
      <suppliers
          v-for="supplier in suppliers" :key="supplier.id"
          :supplier="supplier"
          :name="supplier.name"
          :date="supplier.updated_at"
          :latitude="supplier.latitude"
          :longitude="supplier.longitude"
          :status="supplier.status">
      </suppliers>
    </l-map>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import {LMap, LTileLayer, LMarker} from '@vue-leaflet/vue-leaflet';
import suppliers from "@/components/suppliersLocation";
import axios from "axios";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    suppliers,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.413220, -1.219482],
      suppliersLocation: [],
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    getPage() {
      axios
          .get('https://heroku-campus-suppliers.herokuapp.com/api/suppliers')
          .then(response => {
            this.suppliers = response.data;
          })
    },
    getLocations(suppliersLocation){
      suppliersLocation.push(suppliers.latitude,suppliers.longitude);
    },
  }
}
</script>

<style scoped>
</style>