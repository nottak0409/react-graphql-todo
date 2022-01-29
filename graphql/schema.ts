// nexus導入前
//import { gql } from 'apollo-server-micro'

//export const typeDefs = gql`
//    type Task {
//        id: Int
//        title: String
//        done: Boolean
//    }
//
//    type Query {
//        tasks: [Task]!
//    }
//`

// nexus導入後
import { makeSchema } from "nexus";
import { join } from 'path'
import * as types from './types'

export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(process.cwd(), 'node_modules', '@types', 'nexus-typegen', 'index.d.ts'),
        schema: join(process.cwd(), 'graphql', 'schema.graphql'),
    },
    contextType: {
        export: 'Context',
        module: join(process.cwd(), 'graphql', 'context.ts'),
    }
})
