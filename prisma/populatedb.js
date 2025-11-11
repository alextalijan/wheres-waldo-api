const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Add pictures to the database
  await prisma.picture.createMany({
    data: [{ name: 'race' }, { name: 'carnival' }, { name: 'maze' }],
  });

  // Add characters to the database
  const waldo = await prisma.character.create({
    data: { name: 'waldo' },
  });
  const wizard = await prisma.character.create({
    data: { name: 'wizard' },
  });
  const wilma = await prisma.character.create({
    data: {
      name: 'wilma',
    },
  });
  const odlaw = await prisma.character.create({
    data: {
      name: 'odlaw',
    },
  });

  // Mark characters' positions in pictures
  // Carnival
  const carnival = await prisma.picture.findFirst({
    select: {
      id: true,
    },
    where: {
      name: 'carnival',
    },
  });
  await prisma.appearance.createMany({
    data: [
      {
        pictureId: carnival.id,
        characterId: waldo.id,
        xCoordinate: 0.6953,
        yCoordinate: 0.6518,
      },
      {
        pictureId: carnival.id,
        characterId: wizard.id,
        xCoordinate: 0.3667,
        yCoordinate: 0.7104,
      },
      {
        pictureId: carnival.id,
        characterId: wilma.id,
        xCoordinate: 0.0557,
        yCoordinate: 0.9296,
      },
    ],
  });

  // Maze
  const maze = await prisma.picture.findFirst({
    select: {
      id: true,
    },
    where: {
      name: 'maze',
    },
  });
  await prisma.appearance.createMany({
    data: [
      {
        pictureId: maze.id,
        characterId: waldo.id,
        xCoordinate: 0.5641,
        yCoordinate: 0.4287,
      },
      {
        pictureId: maze.id,
        characterId: wizard.id,
        xCoordinate: 0.676,
        yCoordinate: 0.2938,
      },
    ],
  });

  // Race
  const race = await prisma.picture.findFirst({
    select: {
      id: true,
    },
    where: {
      name: 'race',
    },
  });
  await prisma.appearance.createMany({
    data: [
      {
        pictureId: race.id,
        characterId: waldo.id,
        xCoordinate: 0.2805,
        yCoordinate: 0.3419,
      },
      {
        pictureId: race.id,
        characterId: wizard.id,
        xCoordinate: 0.6133,
        yCoordinate: 0.8725,
      },
      {
        pictureId: race.id,
        characterId: wilma.id,
        xCoordinate: 0.2518,
        yCoordinate: 0.7319,
      },
      {
        pictureId: race.id,
        characterId: odlaw.id,
        xCoordinate: 0.5992,
        yCoordinate: 0.6587,
      },
    ],
  });
}

main();
