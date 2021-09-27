import { Component, createSignal, JSXElement, onCleanup } from "solid-js";
import './time.styles.scss'

type Ouro = {
  hours: number,
  minutes: number,
  secconds: number,
  set: string
}

const Kronii = (): Ouro => {
  const date: Date = new Date()
  return ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    secconds: date.getSeconds(),
    set: (date.getHours() < 12 ? 'AM' : 'PM')
  })
}

export const TextClock: Component = (): JSXElement => {
  const [getTime, setTime] = createSignal(Kronii())
  const date = new Date()
  const interval = setInterval(
    () => setTime(Kronii()),
    1000
  )

  onCleanup(() => clearInterval())

  return (
    <div class="OuroKronii">
      <span>{`${getTime().hours}:${getTime().minutes}:${getTime().secconds} ${getTime().set}`}</span>
    </div>
  )
}