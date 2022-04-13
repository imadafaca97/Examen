<template>
  <div class="row justify-center">
    <div style="margin-left: 10%; display: flex;
                align-items: start; flex-wrap: wrap;">
        <q-card
          class="my-card q-mr-lg q-mb-lg"
          style=" width: 300px; "
          v-for="(item, index) in imagenesCargadas"
          :key="item"
        >
          <q-img :src="item.img_src" >
            <div class="absolute-bottom text-subtitle2 text-center">
              {{item.earth_date}}
            </div>
          </q-img>
        
          <q-card-section >
            <div class="text-h6">Camara: {{item.camera.name}}</div>
            <div class="text-subtitle2">Rover: {{item.rover.name}}</div>
          </q-card-section>
        <q-card-actions class="column justify-center" >
            <q-btn round color="red" icon="delete" @click="deleteItem(index)"/>
        </q-card-actions>
        </q-card>
    </div>
    <q-btn color="primary" label="Mas imagenes" @click="loadMore" class="q-mb-lg" outline style="width: 500px;"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FotosAPI from '../api/photos';

export default defineComponent({
  name: 'Imagenes',
  data() {
    return {
      array: [1, 2, 3],
      fotos: [],
      length: 12,
    };
  },
  computed: {
    imagenesCargadas(): Array<object>{
        return this.fotos.slice(0, this.length);
    },
  },
  async created() {
    await FotosAPI.getPhotos().then((res) => {
          this.fotos = res.photos
      });
  },
  methods: {
    loadMore() {
      if (this.length > this.fotos.length) return;
      this.length = this.length + 12;
    },
    deleteItem(index: number){
        this.fotos.splice(index,1)
    }
  },
  
});
</script>
