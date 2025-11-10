// Import and instantiate prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  picturesGet: async (req, res) => {
    const pictures = await prisma.picture.findMany();
    return pictures;
  },
};
