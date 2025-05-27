import InvestmentForm from '@/components/InvestmentForm';

export default function FormPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Investment Form</h1>
      <InvestmentForm />
    </div>
  );
}