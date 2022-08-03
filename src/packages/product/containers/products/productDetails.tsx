import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { HeartIcon, MinusSmIcon, PaperClipIcon, PlusSmIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { productData } from '../../../../core/data/productData';
import { Product } from '../../../../core/models/product';
import { toMoney } from '../../../../core/utils/moneyString';
interface ProductDetailProps {
    id: string;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

const defaultProduct: Product = {
    id: '',
    category: '',
    description: '',
    name: '',
    price: -1,
    images: [],
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ id }) => {
    const [product, setProduct] = React.useState(defaultProduct);

    React.useEffect(() => {
        let productDB = productData.find((item) => item.id === id);
        setProduct(productDB!);
    }, [id]);

    return (
        <div className="py-4 bg-white">
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
            <div className="max-w-4xl px-4 py-8 mx-auto overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin chi tiết</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Tính Năng</dt>
                            <ul className="col-span-2 list-disc marker:text-gray-500">
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Dung lượng pin lớn đem tới 3500 hơi</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">22 Hương vị lựa chọn hoàn hảo</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Mesh coil 1.0 đem lại trải nghiệm hương vị tốt</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Luồng không khí sáng tạo</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Cảm biến hơi tự động tái tạo trải nghiệm hút hoàn hảo
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Thông Số Kỹ Thuật</dt>
                            <ul className="col-span-2 list-disc marker:text-gray-500">
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Kích thước: 100mm x 24,5mm</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Chất liệu: Hợp kim nhôm & Nhựa PCTG</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Dung lượng: 1400mAh</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Dung tích: 10ml (chứa sẵn tinh dầu)</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Công suất: 12w</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Hàm Lượng: 50mg</li>
                            </ul>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Hộp Sản Phẩm</dt>
                            <ul className="col-span-2 list-disc marker:text-gray-500">
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">1 Pod / 1 Hộp</li>
                                <li className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">10 Hộp / 1 Pack</li>
                            </ul>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};
