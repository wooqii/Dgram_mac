import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        editUser: async(_, args, { request, isAuthenticated }) => {
            const {
                username,
                email,
                firstname,
                lastname,
                bio } = args;
            const { user } = request;
            return prisma.updateUser({
                where: { id: user.id },
                data: { username, email, firstname, lastName, bio}
            });
        }
    }
};