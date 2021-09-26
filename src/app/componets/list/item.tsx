import { Component, JSXElement } from "solid-js"

export interface ItemType {
	name: string,
	url: URL
}

const Item: Component<ItemType> = ({ name, url }): JSXElement => {
	return (
		<div>
			<a href={url.toString()}>
				<span>{name}</span>
			</a>
		</div>
	)
}