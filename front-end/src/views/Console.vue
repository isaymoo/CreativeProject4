<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('PS4')" href="#/Console" class="pure-menu-link">PS4</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox')" href="#/Console" class="pure-menu-link">Xbox</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox 360')" href="#/Console" class="pure-menu-link">Xbox 360</a></li>
      <li class="pure-menu-item"><a @click="select('Xbox One')" href="#/Console" class="pure-menu-link">Xbox One</a></li>
      <li class="pure-menu-item"><a @click="select('Gamecube')" href="#/Console" class="pure-menu-link">Gamecube</a></li>
      <li class="pure-menu-item"><a @click="select('Wii')" href="#/Console" class="pure-menu-link">Wii</a></li>
      <li class="pure-menu-item"><a @click="select('Wii U')" href="#/Console" class="pure-menu-link">Wii U</a></li>
      <li class="pure-menu-item"><a @click="select('Switch')" href="#/Console" class="pure-menu-link">Switch</a></li>
      <li class="pure-menu-item"><a @click="select('Gameboy')" href="#/Console" class="pure-menu-link">Gameboy</a></li>
      <li class="pure-menu-item"><a @click="select('Gameboy Advanced')" href="#/Console" class="pure-menu-link">Gameboy Advanced</a></li>
      <li class="pure-menu-item"><a @click="select('DS')" href="#/Console" class="pure-menu-link">DS</a></li>
      <li class="pure-menu-item"><a @click="select('3DS')" href="#/Console" class="pure-menu-link">3DS</a></li>
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
  name: 'Console',
  components: {
    
  },
  data() {
    return { 
      console: '',
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    games() {
      return this.items.filter(game => game.console === this.console);
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
    select(console) {
      this.console = console;
    }
  }
}
</script>