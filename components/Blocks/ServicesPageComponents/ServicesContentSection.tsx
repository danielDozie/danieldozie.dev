import React from 'react';
import { servicesSerializer } from '../../../lib/serializers';
import {PortableText} from '@portabletext/react'

export default function ServicesContentSection(props: { content: any; }) {
    const content = props.content[1].block
  return (
    <>
        <div className="flex flex-col justify-center mt-4 md:text-center">
                <div className="mx-8 md:p-4">
                    <PortableText value={content} components={servicesSerializer} />
                </div>
            </div>
    </>
  );
}
