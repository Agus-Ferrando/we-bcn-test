<script setup lang="ts">

const data = await fetch('https://bibliotech.bymotto.com/api/hubs')
                     .then(res => res.json())
                     .then(data => data.data)
console.log(data)
</script>



<template>
    <div>
      <nav>
        <ul>
          <li><RouterLink :to="'/about'">About us</RouterLink></li>
        </ul>
      </nav>

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