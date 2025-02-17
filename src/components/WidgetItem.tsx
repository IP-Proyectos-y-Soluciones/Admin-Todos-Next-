interface Props {
	title: string;
	children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: Props) => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full space-y-6 rounded-xl border border-gray-200 bg-white px-6 py-8">
        <div className="flex flex-col">
          <h5 className="text-center text-xl text-gray-600">
            { title }
          </h5>
          <div className="mt-2 flex flex-col justify-center gap-4">
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};
