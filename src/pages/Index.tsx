
import { SurveyProvider } from "@/contexts/SurveyContext";
import ChatBot from "@/components/ChatBot";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      <SurveyProvider>
        <header className="shadow-sm py-2 bg-white h-16 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between relative">
              <div className="flex-grow"></div>
              <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <img 
                  src="/lovable-uploads/cbdedd35-0ec9-4e16-8866-51e309907ad3.png" 
                  alt="Sainsbury's Review Program Logo" 
                  className="h-8 w-auto sm:h-10" 
                  width="120" 
                  height="120"
                />
                <div className="ml-2">
                  <h1 className="text-base sm:text-xl font-bold text-orange-600">Sainsbury's</h1>
                  <p className="text-xs sm:text-sm text-orange-500 -mt-1">Review Program</p>
                </div>
              </div>
              <div className="flex-grow flex justify-end">
                <FAQ />
              </div>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto relative">
          <ChatBot />
        </main>
      </SurveyProvider>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          {/* Legal Links Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-800 bg-gray-100 inline-block px-4 py-2 rounded-md">Legal Links</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/terms" className="text-orange-600 hover:underline">Terms and Conditions</Link>
              <Link to="/privacy" className="text-orange-600 hover:underline">Privacy Policy</Link>
              <Link to="/non-affiliation" className="text-orange-600 hover:underline">Non-Affiliation Disclaimer</Link>
            </div>
          </div>
          
          {/* Legal Disclaimers */}
          <div className="text-xs text-gray-600 space-y-2">
            <p>Trade names or rights associated with all trademarks on this website are the property of their respective owners and are not associated with this promotion. This offer ends at the end of 2025.</p>
            <p>This website is not part of the Facebook website or of Facebook Inc.</p>
            <p>Furthermore, this website is not endorsed in any way by Facebook. Facebook is a trademark of Facebook, Inc.</p>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} Sainsbury's Review Program. All rights reserved.
            <br />
            This is a limited time promotional offer. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
