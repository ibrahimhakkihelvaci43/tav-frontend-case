import { createVNode, defineAsyncComponent } from 'vue'

const Icon = (props: { name: string; width?: string | number; height?: string | number; fill?: string }) => {
  const { name, width, height, fill } = props
  const icon = defineAsyncComponent(() => import(`../assets/${name}.svg`))
  return createVNode(icon, { width, height, fill })
}

export default Icon
