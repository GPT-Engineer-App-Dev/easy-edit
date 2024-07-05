import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-2xl">My Application</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Welcome to My Application</h2>
          <p>This is a bare-bones application to get you started.</p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">Footer placeholder text</p>
      </footer>
    </div>
  );
};

export default Index;