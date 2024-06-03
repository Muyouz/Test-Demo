import { ref, onMounted } from 'vue'

export default function useAddCount() {
    const count = ref(0)

    const addCount = () => {
        count.value++
    }

    onMounted(() => {
        addCount()
    })

    return {
        count, addCount
    }
}