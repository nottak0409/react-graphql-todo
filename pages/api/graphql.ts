import { ApolloServer } from "apollo-server-micro";
import Cors from 'micro-cors';
import { createContext } from "../../graphql/context";
//nexus導入前に使っていた
//import { typeDefs } from "../../graphql/schema";
//import { resolvers } from '../../graphql/resolvers';
//nexus導入後
import { schema } from '../../graphql/schema'


const cors = Cors()

const apolloServer = new ApolloServer({ schema, context: createContext });
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
})

export const config = {
    api: {
        bodyParser: false,
    }
}
