import {} from 'vue'

export function useCount () {
    const count = ref(0)

    function addCount () {
        count.value ++
    }

    onMounted(() => {
        addCount()
    })
    
    return {count, addCount}
}