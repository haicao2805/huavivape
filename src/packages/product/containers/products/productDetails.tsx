import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { HeartIcon, MinusSmIcon, PlusSmIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { Product } from '../../../../core/models/product';
import { toMoney } from '../../../../core/utils/moneyString';
interface ProductDetailProps {
    product: Product;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {product.images?.map((image) => (
                                    <Tab
                                        key={image.id}
                                        className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className="absolute inset-0 overflow-hidden rounded-md">
                                                    <img src={image.src} alt="" className="object-cover object-center w-full h-full" />
                                                </span>
                                                <span
                                                    className={classNames(
                                                        selected ? 'ring-indigo-500' : 'ring-transparent',
                                                        'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                            {product.images?.map((image) => (
                                <Tab.Panel key={image.id}>
                                    <img src={image.src} alt={image.alt} className="object-cover object-center w-full h-full sm:rounded-lg" />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    <div className="px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">{toMoney(product.price ? product.price : 0)}</p>
                        </div>

                        <div className="mt-6">
                            <div className="space-y-6 text-base text-gray-700">{product.description}</div>
                        </div>

                        <form className="mt-6">
                            <div className="flex mt-10 sm:flex-col1">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                                >
                                    Contact Seller
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
