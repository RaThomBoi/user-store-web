import { ChangeEvent, useState } from "react";
import { Inter } from "next/font/google";
import { UserFilter } from "./UserFilter";
import { Button } from "@/components/ui/button";
import { UserCard } from "./User";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [isSearchUser, setIsSearchUser] = useState<boolean>(false);

	const handleSwitchMode = () => {
		setIsSearchUser(!isSearchUser);
	};

	console.log({ isSearchUser });

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-start p-24 py-10 gap-20 ${inter.className}  `}
		>
			<div className='w-full max-w-3xl mt-20'>
				<Button className='w-full' onClick={handleSwitchMode}>
					{isSearchUser ? "Switch to Create User" : "Switch to Search User"}
				</Button>
			</div>
			<div className='w-full max-w-3xl flex flex-col justify-between gap-5'>
				{isSearchUser ? <UserFilter /> : <UserCard />}
			</div>
		</main>
	);
}
