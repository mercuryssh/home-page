import { Component, JSXElement } from 'solid-js'
import { Container, ContainerProps } from './container'

export const ContainerScreen: Component<ContainerProps> = ({ children }): JSXElement => {
  return (
    <div className="container-screen">
      <Container>
        { children }
      </Container>
    </div>
  )
}
