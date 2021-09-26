import { Component } from 'solid-js'
import { Img } from './componets/cover'
import './app.styles.scss'
import { ContainerScreen } from './componets/containers'

const img = 'https://external-preview.redd.it/Pg9Z6xS_jD7AFvj9TA9iP19SlhCQDBBTg7GoWbMsFGs.jpg?auto=webp&s=a4d647d2ea139c00f186bcc13f6ddb99533a8f5a'

const App: Component = () => {
  return (
    <>
      <ContainerScreen>
        <div id='Layout'>
          <div> Home page </div>
          <Img url={new URL(img)} />
        </div>
      </ContainerScreen>
    </>
  )
}
export default App
