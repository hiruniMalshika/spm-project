import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'   


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard_manager',
        icon: <RiIcons.RiDashboardLine />
    },
    { 
        title: 'Employee',
        icon: <BsIcons.BsPeopleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [
            {
                title: 'Add employee',
                path: '/add_employee_manager',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'Manage Employee',
                path: '/employee/manage_emp',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },
    {
        title: 'Food Management',
        icon: <IoIcons5.IoFastFood />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [
            {
                title: 'Today Menu',
                path: '/dailyMenuView',
                icon: <IoIcons5.IoFastFood />,
            },
            {
                title: 'Add Category',
                path: '/category/addNewCategory',
                icon: <IoIcons5.IoFastFood />,
            },
            {
                title: 'Category List',
                path: '/category/category_list',
                icon: <IoIcons5.IoFastFood />,
            },
        ]
    },
    {
        title: 'Messages',
        path: '/messages_maanger',
        icon: <AiIcons.AiOutlineMessage />
    },
    {
        title: 'Reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [
            {
                title: 'User Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Add Payments',
                path: '/reports/addPayments',
                icon: <IoIcons.IoIosPaper />,
            }, //payment_view_list
            {
                title: 'Payments List',
                path: '/payment_view_list',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Orders',
        path: '/messages',
        icon: <FaIcons.FaClipboardList />
    },
    {
        title: 'Customers',
        path: '/customerManagement',
        icon: <BsIcons.BsPeopleCircle />
    }
]