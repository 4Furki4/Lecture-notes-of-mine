import React from 'react'
import ListItem from './ListItem'

export default function List({ data }: { data: Array<any> }) {
    return (
        <ul className='grid gap-2'>
            <ListItem data={data} />
        </ul>
    )
}
