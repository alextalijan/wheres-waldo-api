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
        name: req.params.pictureName,
      },
    });
    res.json({ success: true, picture });
  },
  appearancesGet: async (req, res) => {
    const picture = await prisma.picture.findFirst({
      where: {
        name: req.params.pictureName,
      },
    });
    const appearances = await prisma.appearance.findMany({
      where: {
        pictureId: picture.id,
      },
      include: {
        character: true,
      },
    });

    res.json({ success: true, appearances });
  },
  pictureRecordsGet: async (req, res) => {
    const picture = await prisma.record.findFirst({
      where: {
        name: req.params.pictureName,
      },
    });
    const records = await prisma.record.findMany({
      where: {
        pictureId: picture.id,
      },
      orderBy: {
        milliseconds: 'asc',
      },
      take: 10,
    });
    res.json({ success: true, records });
  },
  addRecord: async (req, res) => {
    const picture = await prisma.picture.findFirst({
      where: {
        name: req.params.pictureName,
      },
    });
    const record = await prisma.record.create({
      data: {
        name: req.body.username,
        milliseconds: req.body.milliseconds,
        pictureId: picture.id,
      },
    });
    res.json({ success: true, record });
  },
};
