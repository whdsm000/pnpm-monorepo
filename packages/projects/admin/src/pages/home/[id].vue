<script setup lang="ts">
defineProps({
  id: String,
});
const router = useRouter();
console.log(router.currentRoute.value);
</script>

<template>
  <div>
    <div>home/[id].vue: {{ id }}</div>
  </div>
</template>

<route>
{
  name: 'home-id',
  meta: {
 
    name:'卢本伟',
    age:123
   
  },
}
</route>
