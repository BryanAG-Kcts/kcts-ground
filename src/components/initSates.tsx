'use client'
import { rawFetch } from '@/hooks/IFont'
import { useFont } from '@/hooks/useFont'
import { fetchJson } from '@/services/fetchJson'
import { useEffect } from 'react'

export const InitSates = (): JSX.Element => {
  const { setFonts } = useFont()

  useEffect(() => {
    fetchJson('/fonts').then(data => setFonts((data as rawFetch).items))
  }, [])

  return <></>
}
