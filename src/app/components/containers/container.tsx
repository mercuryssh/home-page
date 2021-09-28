import { Component, JSXElement } from 'solid-js'

export interface ContainerProps {
  children: JSXElement | JSXElement[]
}
export const Container: Component<ContainerProps> = ({ children }): JSXElement => {
  return (
    <>
      <div className="container">
        {children}
      </div>
    </>
  )
}
