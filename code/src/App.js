import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Artists } from './Artists'
import { Header } from './Header'

/*import {Z_ASCII} from 'zlib';*/

console.log(data)
console.log(Album)

/** below from Technigo */
/*export const App = () => {
  return (
    <div>
      <Album />
      <Header />
    </div>
  )
}*/

export const App = () => {
  return (
    <div>
      <Header />
      <section className="album-container">

        {data.albums.items.map((item) => {
          return <Album key={item.id} albumTitle={item.name} image={item.images[1].url} artists={item.artists[0].name} />
        })}

      </section>
    </div>
  )
}