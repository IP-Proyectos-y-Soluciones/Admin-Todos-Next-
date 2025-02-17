import { cookies } from 'next/headers';
import { TabBar } from '@/components';

export const metadata = {
  title: 'Cookie Page',
  description: 'SEO Title',
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';

  const allCookies = cookieStore.getAll();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {/* { JSON.stringify(allCookies) } */}

      <div className="flex flex-col">
        <span className="text-3xl text-black">Tabs</span>
        <TabBar currentTab={ +cookieTab } />
      </div>
    </div>
  );
}
