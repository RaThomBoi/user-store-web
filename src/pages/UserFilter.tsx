"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserFilter() {
	return (
		<Card className='container'>
			<CardHeader className='pt-6 pl-2'>
				<CardTitle>Search User</CardTitle>
			</CardHeader>
			<CardContent className='grid gap-6 p-2'>
				<div className='grid gap-3'>
					<Label className='pl-1' htmlFor='subject'>
						user id
					</Label>
					<Input id='id' placeholder='search user by id' />
				</div>
			</CardContent>
			<CardFooter className='flex justify-end space-x-2 p-2'>
				<Button variant='ghost'>Cancel</Button>
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	);
}
