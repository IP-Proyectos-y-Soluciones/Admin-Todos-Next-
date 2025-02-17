// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="mb-6 ml-auto min-h-screen lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <TopMenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="m-2 rounded bg-white p-2 px-6 pt-6 pb-5">
          {children}
        </div>
      </div>
    </>
  );
}
