'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function ProfilePage() {

	const { data: session } = useSession();

	useEffect(() => {
		console.log('Client side rendering')
	}, [])
	
  return (
    <div>
			<h1 className="text-black text-2xl">Page Profile</h1>
			<hr className="border-2 border-b-black mb-2" />

			<div className="flex flex-col text-black">
				<span>{ session?.user?.name ?? 'No name'}</span>
				<span>{ session?.user?.email ?? 'No email'}</span>
				<span>{ session?.user?.image ?? 'No image'}</span>
				<span>{ session?.user?.id ?? 'No UUID'}</span>
				<span>{ session?.user?.roles?.join(', ') ?? ['no-roles']}</span>
			</div>
		</div>
		
  );
}
