import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io' 
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/kitchendashboard',
        icon: <RiIcons.RiDashboardLine />
    },
    {
        title: 'Menu',
        icon: <BiIcons.BiFoodMenu />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [           
            {
                title: 'Foods',
                path: '/menu/foods',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'Add Foods',
                path: '/menu/addnewfood',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },    
    {
        title: 'Reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [
            {
                title: 'Category Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Foods Reports',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
           
        ]
    },
    // {
    //     title: 'View Todays Menu',
    //     path: '/viewtodaymenu',
    //     icon: <BiIcons.BiFoodMenu />
    // },
    {
        title: 'Daily Menu',
        icon: <BiIcons.BiFoodMenu />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path: '#',
        subNav: [           
            {
                title: 'Add Daily Menu',
                path: '/daily',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'View Daily Menu',
                path: '/viewdailymenu',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },     
    
    {
        title: 'Categories',
        path: '/kmcategory',
        icon: <AiIcons.AiOutlineMessage />
    },
]