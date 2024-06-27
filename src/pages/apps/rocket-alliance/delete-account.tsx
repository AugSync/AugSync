import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const RocketAllianceDeleteAccountRequest: React.FC = () => {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // make a post to rocket-alliance-register-delete-account
      const response = await fetch(
        '/api/rocket-alliance-register-delete-account',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, reason }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit the request');
      }

      const data = await response.json();
      console.log('Request submitted successfully:', data);
      alert(data.message);
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Rocket Alliance - Delete Account</title>
        <meta
          name="description"
          content="Request to delete your Rocket Alliance account."
        />
        <meta property="og:title" content="Rocket Alliance - Delete Account" />
        <meta
          property="og:description"
          content="Request to delete your Rocket Alliance account."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/rocket-alliance.png" />
        <meta
          property="og:url"
          content="https://augsync.com/apps/rocket-alliance/delete-account"
        />
        <link rel="icon" href="/rocket-alliance-favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
        <section className="bg-gray-100">
          <div className="px-4 py-8 mx-auto max-w-screen-md">
            <h1 className="mb-4 text-4xl font-extrabold text-center">
              Delete Your Account of Rocket Alliance
            </h1>
            <p className="mb-6 font-light text-center text-gray-500">
              We&apos;re sorry to see you go. If you&apos;re sure you want to
              delete your Rocket Alliance account, please submit the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reason for Leaving
                </label>
                <textarea
                  name="reason"
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </section>
        <footer className="mt-8 text-gray-600">
          &copy; {new Date().getFullYear()} Rocket Alliance. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default RocketAllianceDeleteAccountRequest;
