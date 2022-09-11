<template>
  <div>
    <b-container fluid class="home-principal">
      <b-row>
        <VitrinaComponent/>
      </b-row>
      <b-row class="mt-2">
        <InfoHomeComponent :dataInfoGeneral="getPlanes"/>
      </b-row>
      <b-row class="home-principal__opiniones">
        <InfoHomeComponent :dataInfoGeneral="getOpiniones" class="mt-2"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VitrinaComponent from '@/components/VitrinaComponent.vue'
import InfoHomeComponent from '@/components/InfoHomeComponent.vue';

export default {
  name: 'HomeView',
  data(){
    return {
      infoGeneralPlanes: [],
      planesTitle: "",
      opinionesTitle: "",
      imagePlanes: "https://mediablog.cdnpk.net/sites/5/2021/12/Psychological-Impact-Natural-Images.jpg",
      imageOpiniones: "https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png"
    }
  },
  components: {
    VitrinaComponent,
    InfoHomeComponent
  },
  computed: {
    getPlanes(){
      const planes = this.$store.getters.getPlanes;
      return ['Planes Flexibles',planes, this.imagePlanes];
    },
    getOpiniones(){
      const opiniones = this.$store.getters.getOpiniones;
      return ['Qué dicen de nosotros',opiniones, this.imageOpiniones];
    }
  },
}
</script>

<style lang="scss">
  .home-principal{
    padding: 5px 1px !important;
    
    &__opiniones{
      background-color:  #dcdcd6eb !important;
    }
    &__opiniones .card {
      background-color:  #dcdcd6eb !important;
    }
  }

</style>
