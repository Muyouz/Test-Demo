<template>
    <div>
        <div>这里显示数字：{{ count }}</div>
        <button @click="addCount">这里按一次之后+1</button>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import useAddCount from '@/hooks/useAddCount';
export default defineComponent({
    setup() {
        const { count, addCount } = useAddCount()

        return {
            count, addCount
        }
    }
})
</script>