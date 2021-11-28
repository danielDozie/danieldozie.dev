import React from 'react';
import { servicesSerializer } from '../../lib/serializers';
import BlockContent from '@sanity/block-content-to-react'

export default function ServicesContentSection(props: { content: any; }) {
    const content = props.content[1].block
  return (
    <>
        <div className="flex flex-col justify-center md:text-center mt-4">
                <div className="mx-8 md:p-4">
                    <BlockContent blocks={content} serializers={servicesSerializer} />
                </div>
            </div>
    </>
  );
}
