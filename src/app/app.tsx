import { Component, createSignal } from 'solid-js'
import { Img } from './components/cover'
import { ContainerScreen } from './components/containers'
import { TextClock } from './components/clock'
import { ItemsList } from './components/list'
import './app.styles.scss'

import { List as ListServices } from './services/list'
ListServices.setList([
  {name:'Github', url: new URL('https://github.com/')},
  {name:'Youtube', url: new URL('https://www.youtube.com/')},
  {name:'Twitter', url: new URL('https://twitter.com/home')},
  {name:'Instagram', url: new URL('https://www.instagram.com/')},
  {name:'Reddit', url: new URL('https://www.reddit.com/')},

])

const img = 'https://external-preview.redd.it/Pg9Z6xS_jD7AFvj9TA9iP19SlhCQDBBTg7GoWbMsFGs.jpg?auto=webp&s=a4d647d2ea139c00f186bcc13f6ddb99533a8f5a'

const App: Component = () => {
  const [getList, setList] = createSignal(ListServices.getList())

  return (
    <>
      <ContainerScreen>
        <div id='Layout'>
          <TextClock />
          <Img url={new URL(img)} />
          <ItemsList items={getList()} />
        </div>
      </ContainerScreen>
    </>
  )
}
export default App
