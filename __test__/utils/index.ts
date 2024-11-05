import axios from 'ts-axios-qyq'

export function tetstFn(num: number, callback: Function) {
    if (num > 10) {
        callback(num)
    }
}

export function testRequest() {
    return axios.get('fake.url')
}
