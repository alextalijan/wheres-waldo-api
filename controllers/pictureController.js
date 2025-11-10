// Import and instantiate prisma client
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  picturesGet: async (req, res) => {
    const pictures = await prisma.picture.findMany();
    res.json({ success: true, pictures });
  },
  pictureGet: async (req, res) => {
    const picture = await prisma.picture.findFirst({
      where: {
        id: req.params.pictureId,
      },
      include: {
        appearances: true,
      },
    });
    res.json({ success: true, picture });
  },
  pictureRecordsGet: async (req, res) => {
    const records = await prisma.record.findMany({
      where: {
        pictureId: req.params.pictureId,
      },
    });
    res.json({ success: true, records });
  },
  addRecord: async (req, res) => {
    const record = await prisma.record.create({
      data: {
        name: req.body.username,
        milliseconds: req.body.time,
        pictureId: req.params.pictureId,
      },
    });
    res.json({ success: true, record });
  },
};
