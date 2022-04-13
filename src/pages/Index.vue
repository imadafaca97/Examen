<template>
  <q-page class="row items-center justify-evenly">
    <nasa-imagenes />
  </q-page>
</template>

<script lang="ts">
import NasaImagenes from 'components/Imagenes.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { NasaImagenes },
});
</script>