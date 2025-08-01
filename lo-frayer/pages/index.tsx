import Head from 'next/head';
import React from 'react';

/**
 * The root page for the Amalton browser extension prototype.
 *
 * This Next.js page contains a simple layout explaining the purpose of the
 * project. Eventually, more complex UI elements (e.g. onboarding forms,
 * notifications and fee calculations) will be implemented according to the
 * work plan. For now, it provides a starting point for developers.
 */
export default function Home() {
  return (
    <div className="min-h-screen py-10 px-6">
      <Head>
        <title>Amalton Extension</title>
        <meta name="description" content="Amalton fee engine browser extension prototype" />
      </Head>
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Amalton</h1>
        <p className="mb-2">
          This is the prototype of the Amalton browser extension, built with Next.js.
          It aims to help investors in the Israeli capital market understand and
          optimise brokerage fees.
        </p>
        <p className="mb-2">
          The project is structured around a comprehensive work plan and will evolve
          through multiple stages, including API integrations, fee calculations,
          onboarding forms, notifications and more.
        </p>
        <p>
          Stay tuned as we build out the core features and refine the user
          experience. For now, the codebase provides a starting point for
          development.
        </p>
      </main>
    </div>
  );
}