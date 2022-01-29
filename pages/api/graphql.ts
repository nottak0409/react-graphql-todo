import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from '../../graphql/resolvers';
import Cors from 'micro-cors';

const cors = Cors()
