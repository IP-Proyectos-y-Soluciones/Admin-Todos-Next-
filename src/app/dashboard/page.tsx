import { WidgetItem } from '@/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <WidgetItem title="Usuario Conectado SSide">
        <div className='flex flex-col text-black'>
					<span>{ session.user?.name }</span>
					<span>{ session.user?.image }</span>
					<span>{ session.user?.email }</span>
				</div>

        <div className='text-black flex flex-col'>
          {
            JSON.stringify(session, null, 2)
          }
        </div>
      </WidgetItem>
    </div>
  );
}
