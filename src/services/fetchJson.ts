export const fetchJson = async (url: string): Promise<object> => {
  try {
    const data = await fetch(url)
    const json = await data.json()
    return json
  } catch (e) {
    return {}
  }
}
