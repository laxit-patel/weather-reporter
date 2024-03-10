import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import Profile from "./Profile";

export default function Navigation() {
    return (
        <Navbar placeholder={"navbar"} className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    placeholder={"Title"}
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Weather Reporter
                </Typography>

                <div className="flex items-center gap-4">
                    <div className="relative flex w-full gap-2 md:w-max">
                        <Input
                            crossOrigin={"anonymous"}
                            type="search"
                            label="Search You City . . ."
                            className="pr-20"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                        <Button
                            placeholder={"search"}
                            size="sm"
                            color="white"
                            className="!absolute right-1 top-1 rounded"
                        >
                            Search
                        </Button>
                    </div>

                    <Profile />
                </div>
            </div>
        </Navbar>
    );
}