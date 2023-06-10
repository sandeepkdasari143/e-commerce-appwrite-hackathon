import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

const useNavConfig = () => {
    const navBar = [
        {
            navTitle: "Dashboard",
            navIcon: DashboardRoundedIcon,
            href: "/admin/dashboard"
        },
        {
            navTitle: "stock",
            navIcon: Inventory2RoundedIcon,
            href: "/admin/stock"
        },{
            navTitle: "orders",
            navIcon: ShoppingCartCheckoutRoundedIcon,
            href: "/admin/orders"
        },{
            navTitle: "transactions",
            navIcon: PaidRoundedIcon,
            href: "/admin/transactions"
        },{
            navTitle: "Admin Panel",
            navIcon: AdminPanelSettingsRoundedIcon,
            href: "/admin/panel"
        }
    ]

    return navBar;
}

export default useNavConfig;
