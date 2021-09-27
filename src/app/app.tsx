import { Component } from 'solid-js'
import { Img } from './componets/cover'
import { ContainerScreen } from './componets/containers'
import { TextClock } from './componets/clock'
import { ItemsList, ItemType } from './componets/list'
import './app.styles.scss'

const img = 'https://external-preview.redd.it/Pg9Z6xS_jD7AFvj9TA9iP19SlhCQDBBTg7GoWbMsFGs.jpg?auto=webp&s=a4d647d2ea139c00f186bcc13f6ddb99533a8f5a'
const Items: Array<ItemType> = [
  { name: 'GitHub', url: new URL('https://github.com/') },
  { name: 'Holo Live', url: new URL('https://en.hololive.tv/') }
]

const App: Component = () => {
  return (
    <>
      <ContainerScreen>
        <div id='Layout'>
          <TextClock />
          <Img url={new URL(img)} />
          <ItemsList items={Items} />
        </div>
      </ContainerScreen>
    </>
  )
}
export default App
