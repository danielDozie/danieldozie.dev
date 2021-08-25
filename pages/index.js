import React from 'react'



export const Index = ({journals}) => {
  return(
    <>
    {journals.map(journal => (
      <div key={journal.ts}>
    <div><h1>{journal.data.title}</h1></div>
    <p>{journal.data.article}</p>
    </div>
    ))}
    </>
  )
}



export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/journals/')
    const data = await res.json();
    
  return {
    props: {
      journals: data,
    }
  }
}


export default Index;