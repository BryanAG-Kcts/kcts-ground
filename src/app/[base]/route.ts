import puppeteer from 'puppeteer'
import { NextRequest, NextResponse } from 'next/server'

interface Props {
  params: {
    base: string
  }
}

export async function GET (_: NextRequest, { params }: Props): Promise<NextResponse> {
  try {
    const code = atob(params.base)
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
      ignoreHTTPSErrors: true
    })
    const page = await browser.newPage()

    await page.setContent(code, { waitUntil: 'domcontentloaded' })
    await page.emulateMediaType('screen')

    const pdf = await page.pdf({
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      printBackground: true,
      format: 'A4'
    })

    await browser.close()

    const headers = new Headers()
    headers.set('Content-Type', 'application/pdf')
    headers.set('Content-Disposition', 'attachment; filename=code.pdf')
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set('Access-Control-Allow-Credentials', 'true')
    return new NextResponse(pdf, { headers })
  } catch (error: any) {
    return NextResponse.json({ error: error.message, code: params.base })
  }
}
