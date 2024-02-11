import { Backgrounds, LayoutGridEditor } from '@/components/config/const'

export interface Props {
  editorGrid: LayoutGridEditor
  setEditorGrid: (editorGrid: LayoutGridEditor) => void
  colorMode: Backgrounds
  setColorMode: (colorMode: Backgrounds) => void
}
