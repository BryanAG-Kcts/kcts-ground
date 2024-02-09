import puppeteer from 'puppeteer'
import { NextRequest, NextResponse } from 'next/server'

interface Props {
  params: {
    base: string
  }
}

export async function GET (_: NextRequest, { params }: Props): Promise<NextResponse> {
  const code = atob(params.base)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const pr1 = page.setContent(code, { waitUntil: 'domcontentloaded' })
  const pr2 = page.emulateMediaType('screen')

  await Promise.all([pr1, pr2])

  const pdf = await page.pdf({
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    printBackground: true,
    format: 'A4'
  })

  await browser.close()

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')
  headers.set('Content-Disposition', 'attachment; filename=code.pdf')
  return new NextResponse(pdf, { headers })
}
