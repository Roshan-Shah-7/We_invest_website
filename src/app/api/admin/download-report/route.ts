import { NextRequest, NextResponse } from 'next/server';
import { generatePdf } from '@/lib/pdf-generator';

export async function POST(req: NextRequest) {
  try {
    const { formType, data } = await req.json();

    if (!formType || !data) {
      return NextResponse.json({ error: 'Missing formType or data' }, { status: 400 });
    }

    const pdfBuffer = await generatePdf(formType, data);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${formType}_report.pdf`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
