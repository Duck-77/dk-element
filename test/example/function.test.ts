import { describe, expect, test, vi, Mocked } from 'vitest'
import { tetstFn, testRequest } from '../utils/index'
import axios from 'ts-axios-qyq'
vi.mock('ts-axios-qyq')
const mockedAxios = axios as Mocked<typeof axios>

//callbcak test
//mock test
describe('functions', () => {
    test('create a mock function', () => {
        const callback = vi.fn()
        const ncallback = vi.fn()
        tetstFn(12, callback)
        tetstFn(9, ncallback)

        expect(callback).toHaveBeenCalled()
        expect(callback).toHaveBeenCalledWith(12)
        expect(ncallback).not.toHaveBeenCalled()
    })
    test('spy on method', () => {
        const obj = {
            greet: () => console.log('Hello world!'),
        }

        const spy = vi.spyOn(obj, 'greet')
        obj.greet()
        obj.greet()
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledTimes(2)
    })
    test('mock third party module', () => {
        mockedAxios.get.mockResolvedValue({ data: 123 } as any)
        testRequest().then((res) => {
            expect(res).toEqual({ data: 123 })
        })
    })
})
