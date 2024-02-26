import { fetchJson } from '@/services/fetchJson'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  const response = await fetchJson(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.API_KEY_GOOGLE_FONTS ?? ''}`)
  return NextResponse.json(response)
}
