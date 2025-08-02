import React from 'react';

/**
 * Top level React component for the Amalton popup.
 *
 * At this stage the component displays a simple welcome screen.
 * Future stages of development (API wrapper, fee engine, onboarding,
 * notifications, scrapers, etc.) will build on this foundation.
 */
const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Amalton Extension</h1>
      <p className="mt-2">
        Welcome to the Amalton prototype! This is the starting point for the fee
        calculator extension. We'll progressively add features according to the
        work plan.
      </p>
    </div>
  );
};

export default App;
