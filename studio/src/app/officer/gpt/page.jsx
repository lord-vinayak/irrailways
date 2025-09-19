import { Bot, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AiAssistantPage() {
    return (
        <div className="flex flex-col h-full bg-gray-50 p-4 md:p-6 lg:p-8">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">AI Assistant</h1>
                <p className="text-gray-600 mt-1">Your intelligent partner for data analysis and insights.</p>
            </header>

            <div className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-2xl text-center">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-indigo-100 p-4 rounded-full">
                                <Bot className="w-12 h-12 text-indigo-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Launch the AI Assistant</h2>
                        <p className="text-gray-500 mb-8">
                            Click the button below to open the AI chat interface in a new tab.
                            You can ask questions, analyze compliance data, and get instant insights from your railway assets.
                        </p>
                        <Link
                            href="https://ai-chatbot-vie9fus4y-smarak-choudhurys-projects.vercel.app/" // <-- IMPORTANT: Replace with your actual hosted link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
                        >
                            Launch Assistant
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

