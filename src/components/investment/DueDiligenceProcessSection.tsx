import { CheckCircle } from "lucide-react"; // Assuming CheckCircle might be used, though not directly in the original snippet.

const DueDiligenceProcessSection = () => {
    return (
        <section id="process" className="py-16 px-4 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Due Diligence Process</h2>
                    <p className="text-lg text-slate-600">Rigorous evaluation ensures sound investment decisions</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            1
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Company Analysis</h3>
                        <p className="text-sm text-slate-600">
                            Assess business model, market potential, and competitive landscape
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            2
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Founder Evaluation</h3>
                        <p className="text-sm text-slate-600">Verify credibility, expertise, and vision of leadership team</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            3
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Risk Assessment</h3>
                        <p className="text-sm text-slate-600">Identify potential risks and develop mitigation strategies</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            4
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Goal Alignment</h3>
                        <p className="text-sm text-slate-600">Ensure opportunity supports sustainable growth and impact</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DueDiligenceProcessSection;
