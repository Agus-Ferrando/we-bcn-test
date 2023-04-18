<script setup lang="ts">

const route = useRoute();
const itemId = route.params.id

const productDetails = await fetch(`https://fakestoreapi.com/products/${itemId}`).then(res => res.json()).then(data => data);
const title = `${productDetails.title} | ${productDetails.description}`;

  useHead({
    title: title,
    meta: [
        {name: 'title', content: title},
        {name: 'description', content: productDetails.description}
    ]
  })

  useServerSeoMeta({
    ogTitle: () => title,
    title: () => title,
    description: () => productDetails.description,
    ogDescription: () => productDetails.description,
    twitterCard: () => 'summary_large_image',
    twitterTitle: () => title,
    twitterDescription: () => productDetails.description
  })

</script>

<template>
    <nav>
        <ul>
          <li><RouterLink :to="'/'">Home</RouterLink></li>
        </ul>
      </nav>
    <div class="details">
        <h2>
        {{ productDetails.title }}
        </h2>
        <div>
        {{ productDetails.description }}
        </div>
    </div>
    <br><br>
    <i class="material-icons">add_shopping_cart</i>
</template>