import type { SelectOption } from './types'

const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
]
const remoteFilter: (e: string) => Promise<SelectOption[]> = (query: string) => {
    console.log(query)
    return new Promise((resolve) => {
        if (query) {
            setTimeout(() => {
                const options = states
                    .filter((item) => {
                        return item.toLowerCase().includes(query.toLowerCase())
                    })
                    .map((label) => {
                        return { label, value: label }
                    })
                    .slice(0,10)
                resolve(options)
            }, 500)
        } else {
            resolve([])
        }
    })
}

export { states, remoteFilter }
