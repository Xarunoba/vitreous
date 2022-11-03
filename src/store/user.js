import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const name = useStorage('user', '')
    const setName = (newName) => {
        name.value = newName.toString().toLowerCase()
    }
    const getName = () => {
        return name.value
    }
    return {
        setName,
        getName
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))