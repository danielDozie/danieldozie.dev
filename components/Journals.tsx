import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_HOMEPAGE } from '../graphQL/graphQueries'

export const Journals:React.FC = () => {
    const [journals, setJournals] = useState([]);
    const { loading, error, data } = useQuery(GET_HOMEPAGE);
    const result = data?.all_journals.data;
    useEffect(() => {
        if (loading) return "Loading...";
        if (error) return error;
        if (!error && result) {
            return setJournals(result);
        }
    }, [result, error, loading]);

    return (
        <>
            <div className="flex">
                {journals.map((_id, title, article) => (
                    <div className="grid-cols-2" key={_id}>
                        <div><h1 className="text-black font-black text-3xl">{title}</h1></div>
                        <p>{article}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
