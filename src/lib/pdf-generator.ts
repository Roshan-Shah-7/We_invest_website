import PDFDocument from 'pdfkit';

export async function generatePdf(formType: string, data: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers: Buffer[] = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      resolve(Buffer.concat(buffers));
    });
    doc.on('error', reject);

    doc.fontSize(25).text(`Report for ${formType.toUpperCase()} Submission`, { align: 'center' });
    doc.moveDown();

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        doc.fontSize(12).text(`${key}: ${data[key]}`);
      }
    }

    doc.end();
  });
}
