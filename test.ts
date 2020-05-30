import { getParser, parseJsonifiedMQL } from './src'

const parseMQL = getParser('json')
const parsedQuery = parseMQL(`
    fields {
        _id
        profile {
            nickname
        }
    }

    filter {
        _id in [
            ObjectID("5ea6242bb2f51d21234437dd")
            ObjectID("5ea6242bb2f51d2123443712")
            ObjectID("5ea6242bb2f51d2123443723")
        ]
    }
`)

console.log(parsedQuery)
console.log(parseJsonifiedMQL(parsedQuery))
