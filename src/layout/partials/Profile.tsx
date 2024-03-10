import React from "react";
import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    RocketLaunchIcon,

} from "@heroicons/react/24/solid";

export default function Profile() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button placeholder={"Profile"}
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar placeholder={"Laxit Patel"}
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList placeholder={"user Menu"} className="p-1">
                <MenuItem placeholder={"profile"}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded`}
                >
                    <UserCircleIcon
                        strokeWidth={2.5}
                        className={"h-3 w-3 transition-transform"}
                    />
                    <Typography placeholder={"Profile"}
                        as="span"
                        variant="small"
                        className="font-normal"
                    >
                        By Laxit Patel
                    </Typography>
                </MenuItem>
                <MenuItem placeholder={"profile"}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded`}
                >
                    <RocketLaunchIcon
                        strokeWidth={2.5}
                        className={"h-3 w-3 transition-transform"}
                    />
                    <Typography placeholder={"Profile"}
                        as="span"
                        variant="small"
                        className="font-normal"
                    >
                        Github
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
