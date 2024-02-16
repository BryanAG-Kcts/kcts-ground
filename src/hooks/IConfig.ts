import { EditorLineNumbers, EditorThemes, LayoutGridEditor } from '@/components/config/const'

export interface Props {
  editorGrid: LayoutGridEditor
  setEditorGrid: (editorGrid: LayoutGridEditor) => void
  editorTheme: EditorThemes
  setEditorTheme: (editorTheme: EditorThemes) => void
  editorLineNumbers: EditorLineNumbers
  setEditorLineNumbers: (editorLineNumbers: EditorLineNumbers) => void
  editorFontSize: number
  setEditorFontSize: (editorFontSize: number) => void
}
