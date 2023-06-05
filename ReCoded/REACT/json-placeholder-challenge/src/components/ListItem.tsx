import React from 'react'

export default function ListItem({ data }: { data: Array<any> }) {
    return (
        <>
            {data.map((item: any) => <li className='even:bg-red-200'>{JSON.stringify(item)}</li>)}
        </>
    )
}
