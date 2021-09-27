import { Component, For, JSXElement } from "solid-js";
import { ItemType, Item } from "./item";

export const ItemsList = ({ items }: { items: ItemType[] }): JSXElement => {
  return (
    <>
      <div class="items-list">
        <div class='display'>
          <span >Yahallo</span>
        </div>
        <div class="list">
          <For each={items}>
            {(item) => <Item name={item.name} url={item.url} />}
          </For>
        </div>
      </div>
    </>
  )
}