import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const siteData = [
  {
    name: 'Whispering Pines 1',
    description: 'Secluded And Remote',
  },
  {
    name: 'Whispering Pines 2',
    description: 'Secluded And Remote',
  },
  {
    name: 'Whispering Pines 3',
    description: 'Secluded And Remote',
  },
  {
    name: 'Whispering Pines 4',
    description: 'Secluded And Remote',
  },
  {
    name: 'Whispering Pines 5',
    description: 'Secluded And Remote - with some luxuries',
    hasWater: true,
    hasElectrical: true,
  },
  {
    name: 'Whispering Pines 6',
    description: 'Secluded And Remote - with some luxuries',
    hasWater: true,
    hasElectrical: true,
  },
  {
    name: 'Whispering Pines 7',
    description: 'Secluded And Remote - with some luxuries',
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
  },
  {
    name: 'Forest Park 1',
    description: 'Community Camping',
    hasWater: false,
    hasElectrical: false,
    hasLakefront: false,
  },
  {
    name: 'Forest Park 2',
    description: 'Community Camping',
    hasWater: false,
    hasElectrical: false,
    hasLakefront: false,
  },
  {
    name: 'Forest Park 3',
    description: 'Community Camping',
    hasWater: false,
    hasElectrical: false,
    hasLakefront: false,
  },
  {
    name: 'Forest Park 4',
    description: 'Community Camping',
    hasWater: false,
    hasElectrical: false,
    hasLakefront: false,
  },
  {
    name: 'Forest Park 5',
    description: 'Community Camping',
    hasWater: false,
    hasElectrical: false,
    hasLakefront: true,
  },
  {
    name: 'Forest Park 6',
    description: 'Community Camping',
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
  },
  {
    name: 'Forest Park 7',
    description: 'Community Camping',
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
  },
  {
    name: 'Downtown Broadway 1',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 2',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 3',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 4',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: false,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 5',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: true,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 6',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: false,
    hasRvParking: true,
  },
  {
    name: 'Downtown Broadway 7',
    description: "RV Camping At It's Best",
    hasWater: true,
    hasElectrical: true,
    hasLakefront: false,
    hasRvParking: true,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of siteData) {
    const user = await prisma.site.create({
      data: u,
    });
    console.log(`Created site with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
