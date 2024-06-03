<!-- <template>
    <div>
        <div>现在数量：{{ count }}</div>
        <div @click="addCount">点击增加1</div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useCount } from './hook/自定义hook_vue3';
export default defineComponent({
    setup() {
        const {count, addCount} = useCount()

        return {
            count,
            addCount
        }
    }
})
</script> -->

import React from 'react'
import useAddCount from '/hook/自定义hook_react'

function App () {
    const { count, changeCount } = useAddCount()

    return (
        <div>
            <div>当前数字: { count }</div>
            <button onClick={changeCount}>点击+1</button>
        </div>
    )
}

export default App