export class Emitter<T extends Record<string, (...args: any[]) => void>> {
    emitter: Record<keyof T, Array<T[keyof T]>>

    constructor() {
        this.emitter = {} as Record<keyof T, Array<T[keyof T]>>
    }

    on<K extends keyof T>(event: K, callback: T[K]) {
        if (this.emitter[event]) {
            this.emitter[event].push(callback)
        } else {
            this.emitter[event] = [callback]
        }
    }

    emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>) {
        if (this.emitter[event]) {
            this.emitter[event].forEach((fn) => {
                fn(...args)
            })
        }
    }
}

const useEmitter = <T extends Record<string, (...args: any[]) => void>>() => {
    const emitter = new Emitter<T>()
    return { emitter }
}

export default useEmitter
