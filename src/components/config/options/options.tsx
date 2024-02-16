import { EditorFontSize } from './editorFontSize/editorFontSize'
import { EditorNumber } from './editorNumber/editorNumber'
import { EditorTheme } from './editorTheme/editorTheme'
import { Layout } from './layoutConfig/layout'
import style from './options.module.css'

export const UserOptions = (): JSX.Element => {
  return (
    <section className={style.options}>
      <h4>Editar layout: </h4>
      <Layout />
      <h4>Tema del editor:</h4>
      <EditorTheme />
      <h4>Mostrar indices del editor:</h4>
      <EditorNumber />
      <h4>Tamaño de fuente del editor:</h4>
      <EditorFontSize />
    </section>
  )
}
