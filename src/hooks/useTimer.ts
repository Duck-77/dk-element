export const useTimer = (delay: number, handler: () => void) => {
    let timer: number | undefined

    const startTimer = () => {
        timer = setTimeout(() => {
            handler()
        }, delay)
    }
    const clearTimer = () => {
        clearTimeout(timer)
    }

    return {
        startTimer,
        clearTimer,
    }
}
