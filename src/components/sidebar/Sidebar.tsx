import Image from 'next/image';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { LogoutButton, SidebarItem } from '..';
import { getServerSession } from 'next-auth';
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: <IoCheckboxOutline />,
    title: 'Rest TODOS',
    path: '/dashboard/rest-todos',
  },
  {
    icon: <IoListOutline />,
    title: 'Server Actions',
    path: '/dashboard/server-todos',
  },
  {
    icon: <IoCodeWorkingOutline />,
    title: 'Cookies',
    path: '/dashboard/cookies',
  },
  {
    icon: <IoBasketOutline />,
    title: 'Products',
    path: '/dashboard/products',
  },
  {
    icon: <IoPersonOutline />,
    title: 'Perfil',
    path: '/dashboard/profile',
  },
];

export const Sidebar = async () => {

  const session = await getServerSession(authOptions);

  const avatarUrl = (session?.user?.image) ? session.user.image : '/undraw_female-avatar_7t6k.svg';

  const user = session?.user?.name ?? 'No user';
  const userRole = session?.user?.roles ?? ['client'];

  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src="/undraw_start-building_7gui.svg"
              className="w-16"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={ avatarUrl }
            alt=""
            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            width={150}
            height={150}
            unoptimized
          />
          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">
            { user }
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            { userRole.join(', ') }
          </span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
        <LogoutButton />
      </div>
    </aside>
  );
};
