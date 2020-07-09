import { prisma } from "../../../../generated/prisma-client";


export default {
    Query: {
        seeChat: async(_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { id } = args;
            const { user } = request;
            const canSee = await prisma.$exists.chat({
                participants_some: {
                    id: user.id
                }
            });
            if(canSee) {
                return prisma.chat({ id });
            } else {
                throw Error("You can't see this chat")
            }
        }
    }
};