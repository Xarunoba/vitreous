<script setup>
import { onMounted } from 'vue';

const props = defineProps(['name'])
const router = useRouter()

onMounted(() => {
    store.setName(props.name.toString().toLowerCase())
})
</script>

<template>
    <p>
        Welcome <span class="text-effect">{{
                props.name.toString().toLowerCase()
        }}</span>!
    </p>
    <button @click="router.back()" class="mt-2">Go
        back</button>
</template>