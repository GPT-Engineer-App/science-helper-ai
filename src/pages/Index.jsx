import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [files, setFiles] = useState([]);
  const [keywords, setKeywords] = useState("");

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleKeywordChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("Files uploaded:", files);
  };

  const handleFetch = () => {
    // Handle fetch information logic here
    console.log("Keywords entered:", keywords);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Research AI</h1>
          <p className="text-xl">Your AI-powered research assistant</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow container mx-auto px-4 py-10">
        {/* Upload Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Upload Documents</h2>
          <p className="mb-4">Upload your PDFs, Word files, and other documents for analysis.</p>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4"
          />
          <Button onClick={handleUpload}>Choose Files</Button>
        </section>

        {/* Fetch Information Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Fetch Information from the Internet</h2>
          <p className="mb-4">Enter keywords or topics to fetch relevant information from the web.</p>
          <Input
            placeholder="Enter keywords or topics"
            value={keywords}
            onChange={handleKeywordChange}
            className="mb-4"
          />
          <Button onClick={handleFetch}>Fetch Information</Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Powered by Research AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;