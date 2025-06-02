import { NextResponse } from 'next/server';
import { generatePdf } from '@/lib/pdf-generator';
import dbConnect from '@/lib/mongodb';
import IndividualInvestment from '@/models/IndividualInvestment';
import StartupInvestment from '@/models/StartupInvestment';
import BusinessInvestment from '@/models/BusinessInvestment';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';

export async function POST(req: Request) {
  // Note: Authentication check was here previously, but was removed as per user's request to remove auth.
  // If authentication is needed again, it would need to be re-implemented.

  await dbConnect();

  try {
    const { formType, id } = await req.json();

    if (!formType || !id) {
      return NextResponse.json({ success: false, message: 'formType and id are required' }, { status: 400 });
    }

    let submissionData;
    let fileNamePrefix = formType;

    switch (formType) {
      case 'individual':
        submissionData = await IndividualInvestment.findById(id);
        break;
      case 'startup':
        submissionData = await StartupInvestment.findById(id);
        break;
      case 'business':
        submissionData = await BusinessInvestment.findById(id);
        break;
      case 'contact':
        submissionData = await Contact.findById(id);
        break;
      case 'newsletter':
        submissionData = await Newsletter.findById(id);
        break;
      default:
        return NextResponse.json({ success: false, message: 'Invalid form type' }, { status: 400 });
    }

    if (!submissionData) {
      return NextResponse.json({ success: false, message: 'Submission not found' }, { status: 404 });
    }

    // Generate PDF
    const pdfBuffer = await generatePdf(formType, submissionData);
    const filename = `${fileNamePrefix}_${id}.pdf`;

    // Instead of sending email, you might want to return the PDF buffer or a link to it
    // For now, we'll just indicate success of PDF generation.
    return NextResponse.json({ success: true, message: 'Report generated successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error('Error generating report:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
