import { Component, JSXElement } from 'solid-js'

export const Img: Component<{ url: URL }> = ({ url }): JSXElement => {
  return (
    <figure class={'cover'}>
      <img src={url.toString()} alt="Home Cover" />
    </figure>
  )
}
