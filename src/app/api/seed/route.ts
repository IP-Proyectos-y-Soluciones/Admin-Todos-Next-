import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delette * from todo
  await prisma.user.deleteMany(); // delette * from user

  const user = await prisma.user.create({
    data: {
      email: 'test1@correso.com',
      password: bcrypt.hashSync('123456', 10),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          { description: 'Piedra del alma', complete: true },
          { description: 'Piedra del poder' },
          { description: 'Piedra del tiempo' },
          { description: 'Piedra del espacio' },
          { description: 'Piedra del realidad' },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: 'Piedra del alma', complete: true },
  //     { description: 'Piedra del poder' },
  //     { description: 'Piedra del tiempo' },
  //     { description: 'Piedra del espacio' },
  //     { description: 'Piedra del realidad' },
  //   ],
  // });

  return NextResponse.json({ message: 'Seed Executed' });
}

/* const todo = await prisma.todo.create({
    data: { description: 'Piedra del alma', complete: true },
  }); */
