import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_HOMEPAGE } from '../graphQL/graphQueries'

export const Journals = () => {
    const [journals, setJournals] = useState([]);
    const { loading, error, data } = useQuery(GET_HOMEPAGE);
    const result = data?.all_journals.data;

    useEffect(() => {
        if (loading) return "Loading...";
        if (error) return error;
        if (!error && result) {
            return setJournals(result);
        }
    }, [result, loading, error]);

    return (
        <>
            <div className="flex">
                {journals.map(journal => (
                    <div className="grid-cols-2" key={journal._id}>
                        <div><h1 className="text-black font-black text-3xl">{journal.title}</h1></div>
                        <p>{journal.article}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
