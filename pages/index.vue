<script setup lang="ts">

const data = await fetch('https://fakestoreapi.com/products')
                     .then(res => res.json())
                     .then(data => data)

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
              {{  product.title  }}
            </div>
          </RouterLink>
          <div>{{ product.description }}</div>
        </div>
      </div>
  </div>
</template>