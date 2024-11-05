import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import PulsingGradient from "../components/PulsingGradient.jsx";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PulsingGradient variant="quaternary" />

      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-[12rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 animate-pulse">
            404
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to
              another URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 flex items-center gap-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-black transition-all group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 flex items-center gap-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors"
            >
              <Home className="w-5 h-5" />
              Return Home
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] border border-amber-500/20 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] border border-amber-500/20 rounded-full animate-pulse delay-150" />
      </div>
    </div>
  );
};

export default NotFoundPage;
