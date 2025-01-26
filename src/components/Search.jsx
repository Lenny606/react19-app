import React from 'react'

export default function Search({setSearch, search}) {
    return (
        <div className={'search'}>

            <input
                type={'text'}
                placeholder={'Search for a card'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}
