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
            href: "/seller/dashboard"
        },
        {
            navTitle: "stock",
            navIcon: Inventory2RoundedIcon,
            href: "/seller/stock"
        },{
            navTitle: "orders",
            navIcon: ShoppingCartCheckoutRoundedIcon,
            href: "/seller/orders"
        },{
            navTitle: "transactions",
            navIcon: PaidRoundedIcon,
            href: "/seller/transactions"
        },{
            navTitle: "Admin Panel",
            navIcon: AdminPanelSettingsRoundedIcon,
            href: "/seller/panel"
        }
    ]

    return navBar;
}

export default useNavConfig;
