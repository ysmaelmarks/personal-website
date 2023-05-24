import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12 rounded-md shadow-lg ring-2 ring-black ring-opacity-5 p-3 pl-6 pr-6'>
                <ul className='hidden lg:flex lg:gap-x-12'>
                    <li>
                        <Link className="text-sm leading-6 text-black-900 hover:text-stone-300" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-sm leading-6 text-black-900 hover:text-stone-300" href="/about">About</Link>
                    </li>
                    <li>
                        <Link className="text-sm leading-6 text-black-900 hover:text-stone-300" href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="text-sm leading-6 text-black-900 hover:text-stone-300" href="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
                
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-purple-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <ul className="space-y-2 py-6 ">
                                <li>
                                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/about">About</Link>
                                </li>
                                <li>
                                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            </header>
        </div>
    )
}