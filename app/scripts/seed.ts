
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  // Create demo contact entries
  await prisma.contact.createMany({
    data: [
      {
        name: 'Demo User',
        email: 'demo@example.com',
        message: 'This is a demo contact form submission to test the system.',
        formType: 'contact',
        status: 'new'
      },
      {
        name: 'Test Business Owner',
        email: 'test@business.com', 
        message: 'Interested in learning more about AI chatbots for my restaurant.',
        formType: 'contact',
        status: 'new'
      }
    ],
    skipDuplicates: true,
  });

  // Create demo newsletter signups
  await prisma.newsletter.createMany({
    data: [
      { email: 'newsletter@example.com' },
      { email: 'updates@business.com' }
    ],
    skipDuplicates: true,
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
