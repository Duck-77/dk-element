import { computed, ref } from 'vue'

const zIndex = ref(0)

export const usezIndex = (initVal = 2000) => {
    const init = ref(initVal)
    const current = computed(() => zIndex.value + init.value)
    const next = () => {
        zIndex.value++
        return current.value
    }

    return {
        init,
        current,
        next,
    }
}

