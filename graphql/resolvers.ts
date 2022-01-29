export const resolvers = {
    Query: {
        tasks: (_parent: any, _args: any, ctx: any) => {
            return ctx.prisma.task.findMany()
        }
    }
}
