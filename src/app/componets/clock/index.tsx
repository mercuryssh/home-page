import { Component, createSignal, JSXElement, onCleanup } from "solid-js";
import './time.styles.scss'

type Ouro = {
  hours: string,
  minutes: string,
  secconds: string,
  set: string
}

const Kronii = (): Ouro => {
  const date: Date = new Date()

  const rounded = (num: number): string => {
    return (num < 10 ? '0' + num : num.toString())
  }

  return ({
    hours: rounded(date.getHours()),
    minutes: rounded(date.getMinutes()),
    secconds: rounded(date.getSeconds()),
    set: (date.getHours() < 12 ? 'AM' : 'PM')
  })
}

export const TextClock: Component = (): JSXElement => {
  const [getTime, setTime] = createSignal(Kronii())
  const interval = setInterval(
    () => setTime(Kronii()),
    1000
  )

  onCleanup(() => clearInterval(interval))

  return (
    <div class="OuroKronii">
      <span>{`${getTime().hours}:${getTime().minutes}:${getTime().secconds} ${getTime().set}`}</span>
    </div>
  )
}