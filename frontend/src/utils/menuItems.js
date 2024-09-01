import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: "Profile",
        icon: transactions,
        link: "/Profile",
    },

    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Banks",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 6,
        title: "Transfer Money",
        icon: transactions,
        link: "/Payo",
    },
]