import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const UserSideBarData = [
    {
        title: 'Home',
        path: '/viewHome',
        icon: <RiIcons.RiDashboardLine />
    },

    {
        title: 'Menu',
        path: '/menu',
        icon: <IoIcons5.IoFastFood />
    },


    // {
    //     title: 'Category',
    //     icon: <IoIcons5.IoFastFood />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    //     subNav: [
    //         {
    //             title: 'Today Menu',
    //             path: '/menu',
    //             icon: <IoIcons5.IoFastFood />,
    //         },
    //         {
    //             title: 'Add Menu',
    //             path: '/employee/manage_emp',
    //             icon: <IoIcons5.IoFastFood />,
    //         },
    //         {
    //             title: 'Category',
    //             path: '/employee/add_employee',
    //             icon: <IoIcons5.IoFastFood />,
    //         },
    //     ]
    // },

    {
        title: 'Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineMessage />
    },
  
    {
        title: 'Contact Us',
        path: '/map',
        icon: <AiIcons.AiOutlineMessage />
    },
    {
        title: 'About Us',
        path: '/messages',
        icon: <FaIcons.FaClipboardList />
    },
    {
        title: 'Display User',
        path: '/display',
        icon: <BsIcons.BsPeopleCircle />
    }
]