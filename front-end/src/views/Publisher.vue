<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Ubisoft')" href="#/Publisher" class="pure-menu-link">Ubisoft</a></li>
      <li class="pure-menu-item"><a @click="select('Wired Productions')" href="#/Publisher" class="pure-menu-link">Wired Productions</a></li>
      <li class="pure-menu-item"><a @click="select('505 Games')" href="#/Publisher" class="pure-menu-link">505 Games</a></li>
      <li class="pure-menu-item"><a @click="select('2k')" href="#/Publisher" class="pure-menu-link">2k</a></li>
      <li class="pure-menu-item"><a @click="select('Sony')" href="#/Publisher" class="pure-menu-link">Sony</a></li>
      <li class="pure-menu-item"><a @click="select('Activision')" href="#/Publisher" class="pure-menu-link">Activision</a></li>
      <li class="pure-menu-item"><a @click="select('Bandai Namco')" href="#/Publisher" class="pure-menu-link">Bandai Namco</a></li>
      <li class="pure-menu-item"><a @click="select('Bethesda')" href="#/Publisher" class="pure-menu-link">Bethesda</a></li>
      <li class="pure-menu-item"><a @click="select('EA')" href="#/Publisher" class="pure-menu-link">EA</a></li>
      <li class="pure-menu-item"><a @click="select('Nighthawke')" href="#/Publisher" class="pure-menu-link">Nighthawke</a></li>
      <li class="pure-menu-item"><a @click="select('Mad Dog')" href="#/Publisher" class="pure-menu-link">Mad Dog</a></li>
      <li class="pure-menu-item"><a @click="select('Deep Silver')" href="#/Publisher" class="pure-menu-link">Deep Silver</a></li>
      <li class="pure-menu-item"><a @click="select('Square Enix')" href="#/Publisher" class="pure-menu-link">Square Enix</a></li>
      <li class="pure-menu-item"><a @click="select('WB Games')" href="#/Publisher" class="pure-menu-link">WB Games</a></li>
      <li class="pure-menu-item"><a @click="select('Konami')" href="#/Publisher" class="pure-menu-link">Konami</a></li>
      <li class="pure-menu-item"><a @click="select('Capcom')" href="#/Publisher" class="pure-menu-link">Capcom</a></li>
      <li class="pure-menu-item"><a @click="select('Gearbox')" href="#/Publisher" class="pure-menu-link">Gearbox</a></li>
      <li class="pure-menu-item"><a @click="select('THQ')" href="#/Publisher" class="pure-menu-link">THQ</a></li>
      <li class="pure-menu-item"><a @click="select('Codemasters')" href="#/Publisher" class="pure-menu-link">Codemasters</a></li>
      <li class="pure-menu-item"><a @click="select('PUBG Corp')" href="#/Publisher" class="pure-menu-link">PUBG Corp</a></li>
      <li class="pure-menu-item"><a @click="select('Rebellion')" href="#/Publisher" class="pure-menu-link">Rebellion</a></li>
      <li class="pure-menu-item"><a @click="select('Sega')" href="#/Publisher" class="pure-menu-link">Sega</a></li>
      <li class="pure-menu-item"><a @click="select('Microsoft')" href="#/Publisher" class="pure-menu-link">Microsoft</a></li>
      <li class="pure-menu-item"><a @click="select('Valve')" href="#/Publisher" class="pure-menu-link">Valve</a></li>
      <li class="pure-menu-item"><a @click="select('LucasArts')" href="#/Publisher" class="pure-menu-link">LucasArts</a></li>
      <li class="pure-menu-item"><a @click="select('Disney')" href="#/Publisher" class="pure-menu-link">Disney</a></li>
      <li class="pure-menu-item"><a @click="select('CD Projekt Red')" href="#/Publisher" class="pure-menu-link">CD Projekt Red</a></li>
      <li class="pure-menu-item"><a @click="select('Devolver Digital')" href="#/Publisher" class="pure-menu-link">Devolver Digital</a></li>
      <li class="pure-menu-item"><a @click="select('Flyhigh')" href="#/Publisher" class="pure-menu-link">Flyhigh</a></li>
      <li class="pure-menu-item"><a @click="select('Grasshopper')" href="#/Publisher" class="pure-menu-link">Grasshopper</a></li>
      <li class="pure-menu-item"><a @click="select('Hi-Rez')" href="#/Publisher" class="pure-menu-link">Hi-Rez</a></li>
      <li class="pure-menu-item"><a @click="select('Image & Form')" href="#/Publisher" class="pure-menu-link">Image & Form</a></li>
      <li class="pure-menu-item"><a @click="select('Inti Creates')" href="#/Publisher" class="pure-menu-link">Inti Creates</a></li>
      <li class="pure-menu-item"><a @click="select('Jupiter')" href="#/Publisher" class="pure-menu-link">Jupiter</a></li>
      <li class="pure-menu-item"><a @click="select('Jackbox')" href="#/Publisher" class="pure-menu-link">Jackbox</a></li>
      <li class="pure-menu-item"><a @click="select('Nicalis')" href="#/Publisher" class="pure-menu-link">Nicalis</a></li>
      <li class="pure-menu-item"><a @click="select('Nintendo')" href="#/Publisher" class="pure-menu-link">Nintendo</a></li>
      <li class="pure-menu-item"><a @click="select('Qubic')" href="#/Publisher" class="pure-menu-link">Qubic</a></li>
      <li class="pure-menu-item"><a @click="select('Wayforward')" href="#/Publisher" class="pure-menu-link">Wayforward</a></li>
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
  name: 'Publisher',
  components: {
    
  },
  data() {
    return { 
      publisher: '',
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    games() {
      return this.items.filter(game => game.publisher === this.publisher);
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
    select(publisher) {
      this.publisher = publisher;
    }
  }
}
</script>