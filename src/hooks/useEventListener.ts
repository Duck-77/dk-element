import { onMounted, onUnmounted, watch } from 'vue'
import { unref, type Ref } from 'vue'
import { isRef } from 'vue'

export interface UseEventListener {
    (target: EventTarget | Ref<EventTarget | undefined>, event: string, handler: (e: Event) => void): void
}

export const useEventListener: UseEventListener = (target, event, handler) => {
    if (isRef(target)) {
        watch(target, (cur, pre) => {
            pre?.removeEventListener(event, handler)
            cur?.addEventListener(event, handler)
        })
    } else {
        onMounted(() => {
            target.addEventListener(event, handler)
        })
    }

    onUnmounted(() => {
        unref(target)?.removeEventListener(event, handler)
    })
}
