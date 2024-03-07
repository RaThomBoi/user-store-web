import { Inter } from "next/font/google";
import { UserCard } from "./user";
import { UserFilter } from "./UserFilter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-evenly p-24 py-10 ${inter.className}  `}
		>
			<div className='w-full max-w-3xl flex flex-col justify-between gap-5'>
				<UserFilter />
				<UserCard />
			</div>
		</main>
	);
}
