import { isDefinitionNode } from "graphql";
import { objectType, extendType, stringArg, nonNull, intArg } from "nexus";

export const Task = objectType({
  name: "Task",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.boolean("done");
  },
});

export const TasksQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("tasks", {
      type: "Task",
      resolve(_parent, _args, context) {
        return context.prisma.task.findMany();
      },
    });
  },
});

export const CreateTaskMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createTask", {
      type: "Task",
      args: {
        title: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.task.create({
          data: {
            title: args.title,
          },
        });
      },
    });
  },
});

export const DeleteTaskMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("deleteTask", {
      type: "Task",
      args: {
        id: nonNull(intArg()),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.task.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
