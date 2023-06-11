import { useSelector } from "react-redux";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const useUserProfileNav = () => {
    const loggedInUserID = useSelector(store => store.auth.currentUser?.$id);

    const navBar = [
        {
            navTitle: "User Details",
            navIcon: AccountBoxRoundedIcon,
            href: `/user/${loggedInUserID}/profile`
        },
        {
            navTitle: "Addresses",
            navIcon: LocationOnRoundedIcon,
            href: `/user/${loggedInUserID}/addresses`
        },{
            navTitle: "Orders",
            navIcon: ShoppingCartRoundedIcon,
            href: `/user/${loggedInUserID}/orders`
        },{
            navTitle: "Transactions",
            navIcon: MonetizationOnRoundedIcon,
            href: `/user/${loggedInUserID}/transactions`
        }
    ]

    return navBar;
}

export default useUserProfileNav;
