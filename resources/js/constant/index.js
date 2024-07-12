import { BiDish } from "react-icons/bi";
import { PiChefHatLight } from "react-icons/pi";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { IoAlbumsOutline } from "react-icons/io5";

export const navLink = [
    {
        id: 1,
        name: "A propos",
        section: "about",
        Icon: IoAlbumsOutline
    },
    {
        id: 2,
        name: "Menu",
        section: "menu",
        Icon: BiDish
    },
    {
        id: 3,
        name: "Chefs",
        section: "chef",
        Icon: PiChefHatLight 
    },
    {
        id: 4,
        name: "Reservation",
        section: "reservation",
        Icon: PiCalendarCheckDuotone
    },
    {
        id: 5,
        name: "Contact",
        section: "contact",
        Icon: LuContact
    }
]