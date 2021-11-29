
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {FcBookmark} from 'react-icons/fc'
import BlockContent from '@sanity/block-content-to-react'
import { servicesDetailsSerializer } from '../../lib/serializers'

interface Props {
  content: any
  _key: string,
  title: string,
  data: any,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InnerDetails(props: Props) {
  const items = props.data
  return (
      
      <div className="max-w-7xl mx-auto px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <div className="flex">
        <h1 className="pb-8 text-2xl text-gray-600 dark:text-gray-300 uppercase font-bold ">Things I do here</h1>
        <FcBookmark />
        </div>
          <dl className="space-y-6 divide-y divide-gray-200 shadow-md p-4 lg:p-12">
            {items.map((item : Props) => (
              <Disclosure as="div" key={item._key} className="pt-6 ">
                {({ open }) => (
                  <>
                    <dt className="lg:text-3xl text-xl">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start">
                        <span className="font-mitr bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{item.title}</span>
                        <span className="ml-6 h-7 flex items-center text-gray-600 dark:text-gray-300">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <BlockContent blocks={item.content} serializers={servicesDetailsSerializer}  />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
