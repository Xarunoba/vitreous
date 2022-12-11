<script setup>
import { useUserStore } from '@/store/user'

const name = ref()
const router = useRouter()
const store = useUserStore()
const user = ref(store.getName())

const go = () => {
    if (name.value) {
        router.push(`/u/${encodeURIComponent(name.value.toString().toLowerCase())}`)
    }
}

const newName = () => {
    user.value = ''
    store.setName(user.value)
}
</script>

<template>
    <div>
        <Transition name="fade" appear mode="out-in">
            <div v-if="!user">
                Hello there! What is your name?
                <form @submit.prevent="go">
                    <input type="text" placeholder="Your name..." v-model="name" autofocus>
                    <button class="mx-2" type="submit" :disabled="!name">Go</button>
                </form>
            </div>
            <div v-else>
                <p>Welcome back, <span class="text-effect">{{
                        user
                }}</span>!
                </p>
                <p class="text-sm text-white/70">Not you? <a class="cursor-pointer text-white/70"
                        @click="newName">Identify
                        here</a>.
                </p>
            </div>
        </Transition>
    </div>
</template>