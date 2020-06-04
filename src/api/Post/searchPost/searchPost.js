import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        searchPost: async(_, args) => prisma.posts({
            where: {
                OR: [
                    { location_contains_with: args.term },
                    { caption_contains_with: args.term }
                ]
            }
        })
    }
};