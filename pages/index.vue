<script setup lang="ts">
import { dataToEsm } from '@rollup/pluginutils';
import { config } from 'process';
import { Config, Data } from '~/models';
// import { useConfigStore } from '~/store/config';

// const configStore = useConfigStore()
const data= ref()
const homeConfig = ref()
const about= ref<boolean>()
const contact= ref<boolean>()
const lang = ref([])
const title = ref()


data.value = await fetch('https://bibliotech.bymotto.com/api/hubs')
                    .then(res => res.json())
                    .then(data => data.data)

homeConfig.value = await fetch('http://bibliotech.bymotto.com/api/config')
                    .then(res => res.json())
                    .then(data => data.data)   
                    
                    
about.value = homeConfig.value.hide_about_us
contact.value = homeConfig.value.hide_contact
lang.value = homeConfig.value.languages_availables
title.value = homeConfig.value.title


async function changeLang(item: string){
  let response = await fetch(`http://bibliotech.bymotto.com/api/config/${item}`)
                    .then(res => res.json())
                    .then(data => data.data)  
  title.value = response.title
}

</script>



<template>
    <div>
      <nav>
        <ul>
          <li v-if="about"><RouterLink :to="'/about'">About us</RouterLink></li>
          <li v-if="contact"><RouterLink :to="'/contact'">Contact</RouterLink></li>
          <li><RouterLink :to="'/filter'">Filtro</RouterLink></li>
        </ul>
        <ul>
          <li v-for="(item, i) in lang" :key="i"
              @click="changeLang(item)"
          >
            {{ item }}
          </li>
        </ul>
      </nav>
      <br><br>
      <h2>{{ title }}</h2>
      <br><br>
      <div class="productContainer">
        <div class="product" v-for="(product, i) in data" :key="i">
          <RouterLink :to="`/details/${product.id}`">
            <div>
              {{  product.name  }}
            </div>
          </RouterLink>
          <div v-html="product.description"></div>
        </div>
      </div>
  </div>

</template>

<style scoped>
nav{
  display: flex;
  flex-direction: row;
}

ul{
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
}

li{
  margin-left: 1rem;
  list-style: none;
  cursor: pointer;
}


</style>