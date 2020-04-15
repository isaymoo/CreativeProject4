<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('E')" href="#/ESRB" class="pure-menu-link">E</a></li>
      <li class="pure-menu-item"><a @click="select('E10')" href="#/ESRB" class="pure-menu-link">E10</a></li>
      <li class="pure-menu-item"><a @click="select('T')" href="#/ESRB" class="pure-menu-link">T</a></li>
      <li class="pure-menu-item"><a @click="select('M')" href="#/ESRB" class="pure-menu-link">M</a></li>
    </ul>
  </div>
  <section class="image-gallery">
    <div class="image" v-for="item in games" :key="item.id" >
      <h2>{{item.title}}</h2>
      <img :src="item.path" />
      <h2>ESRB: {{item.esrb}}<br></h2>
      <p>Console: {{item.console}}<br>Publisher: {{item.publisher}}</p>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ESRB',
  components: {
    
  },
  data() {
    return { 
      esrb: '',
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    games() {
      return this.items.filter(game => game.esrb === this.esrb);
    }
  },
   methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    select(esrb) {
      this.esrb = esrb;
    }
  }
}
</script>
