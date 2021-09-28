import { Component, JSXElement } from 'solid-js'
import { Item as ItemType } from '../../services/list';

export const Item: Component<ItemType> = ({ name, url }): JSXElement => {
  return (
    <div>
      <span>
        <a href={url.toString()}>{name}</a>
      </span>
    </div>
  )
}

export const NewItem: Component<ItemType> = ({ name, url }): JSXElement => {
  return(
    <div>
      <input type="text" />
    </div>
  )
}