import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Pod 1 lần', href: '/products?category=Pod 1 lần' },
];
// const userNavigation = [
//     { name: 'Your Profile', href: '#' },
//     { name: 'Settings', href: '#' },
//     { name: 'Sign out', href: '#' },
// ];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

interface NavBarProps { }

export const NavBar: React.FC<NavBarProps> = () => {
    return (
        <Disclosure as="header" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                        <div className="relative flex items-center justify-between h-auto">
                            <div className="relative z-10 flex px-2 gap-x-10 lg:px-0">
                                <Link href="/">
                                    <div className="flex items-center flex-shrink-0 cursor-pointer">
                                        <img className="block w-auto h-32" src="/assets/images/huavivape.png" alt="Logo" />
                                    </div>
                                </Link>
                                <nav className="items-center hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <p className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white">
                                                {item.name}
                                            </p>
                                        </Link>
                                    ))}
                                </nav>
                            </div>


                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>

                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        {/* <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-white">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="px-2 mt-3 space-y-1">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div> */}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
