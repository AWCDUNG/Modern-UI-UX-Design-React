import React from "react";
import { features } from "../data/CodeDataFeatures";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Features = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((features, key) => (
            <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${features.imagePosition === "right" ? "lg:flex-row-reverse" :""}`}>
              {/* Code Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className ="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 
                  rounded-xl sm:rounded-2xl transition-all duration-500 "/>
                  
                  <div className="relative bg-gray-950/50 backdrop-blur-sm border border-gray-700/50 
                  rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border 
                  group-hover:border-blue-600/50 transition-all duration-300">
                    {/*IDE Interface*/}
                    <div className="bg-blue-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {features.title}
                        </span>
                      </div>
                      <div className="">
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            backgroundColor: "transparent",
                            borderRadius: "8px",
                            fontSize: "0.875rem",
                            lineHeight: "1.4",
                            height: "100%",
                            wordWrap: "break-word",
                            whiteSpace: "pre-wrap",
                            textAlign: "left",
                          }}
                          wrapLines={true}
                        >
                          {features.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text Section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">{features.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{features.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
