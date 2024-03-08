import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function UserCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create User</CardTitle>
				<CardDescription>Add new user to database</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-6'>
				<div className='grid gap-2'>
					<Label htmlFor='name'>Name</Label>
					<Input id='name' placeholder='First Last' />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='Lastname'>Lastname</Label>
					<Input id='Lastname' placeholder='Lastname' />
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Submit</Button>
			</CardFooter>
		</Card>
	);
}
