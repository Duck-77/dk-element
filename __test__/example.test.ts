import { describe, expect, test } from 'vitest'

describe('example test', () => {
    test('common', () => {
        const name = 'makey'
        expect(name).toBe('makey')
        expect(2 + 1).toBe(3)
        expect(3 + 3).not.toBe(1)
    })

    test('boolean', () => {
        expect(1).toBeTruthy()
        expect(0).toBeFalsy()
    })

    test('number', () => {
        expect(3).toBeGreaterThan(1)
        expect(1).toBeLessThan(3)
    })

    test('object', () => {
        expect({ name: 'makey' }).toEqual({ name: 'makey' })
    })
})
