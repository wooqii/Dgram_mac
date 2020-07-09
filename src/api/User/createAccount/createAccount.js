import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation: {
        createAccount: async(_, args ) => {
            console.log(prisma);
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const exists = await prisma.$exists.user({username});
            if(exists) {
                throw Error("This username / email is already exist"); 
            };
            await prisma.createUser({
                username, 
                email, 
                firstName, 
                lastName, 
                bio 
            });
            return true;
        }
    }
};