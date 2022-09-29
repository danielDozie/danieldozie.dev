
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {FcBookmark} from 'react-icons/fc'
import {PortableText} from '@portabletext/react'
import { servicesDetailsSerializer } from '../../../lib/serializers'

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
      
      <div className="px-4 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <div className="flex">
        <h1 className="pb-8 pl-2 text-2xl font-bold text-gray-600 uppercase dark:text-gray-300">Things I do here</h1>
        <FcBookmark />
        </div>
          <dl className="p-4 space-y-6 divide-y divide-gray-200 shadow-md lg:p-12">
            {items.map((item : Props) => (
              <Disclosure as="div" key={item._key} className="pt-6 ">
                {({ open }) => (
                  <>
                    <dt className="text-xl lg:text-3xl">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left">
                        <span className="text-transparent font-mitr bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{item.title}</span>
                        <span className="flex items-center ml-6 text-gray-600 h-7 dark:text-gray-300">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2">
                      <PortableText value={item.content} components={servicesDetailsSerializer}  />
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
