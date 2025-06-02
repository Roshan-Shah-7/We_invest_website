'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Loader2, CheckCircle, Mail } from 'lucide-react';

export default function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | 'duplicate' | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null); // State for validation error

  const validateForm = (): boolean => {
    if (!email.trim()) {
      setValidationError('Email is required.');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError('Invalid email address format.');
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validationError) { // Clear error as user types
      setValidationError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      setSubmissionStatus('error'); // Indicate form has errors
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setEmail(''); // Clear email input
      } else {
        console.error('Newsletter subscription error:', result);
        if (response.status === 409) { // Duplicate email
          setSubmissionStatus('duplicate');
        } else {
          setSubmissionStatus('error');
        }
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionStatus(null), 6000); // Hide status message after 6 seconds
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {submissionStatus === 'success' && (
        <div className="p-3 bg-green-50 text-green-700 rounded-lg flex items-center border border-green-200 text-sm">
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>Subscribed successfully!</span>
        </div>
      )}
      {submissionStatus === 'duplicate' && (
        <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg flex items-center border border-yellow-200 text-sm">
          <Loader2 className="w-5 h-5 mr-2 flex-shrink-0" /> {/* Using Loader2 as a generic info icon */}
          <span>You are already subscribed.</span>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200 text-sm">
          <Loader2 className="w-5 h-5 mr-2 flex-shrink-0" /> {/* Using Loader2 as a generic error icon */}
          <span>Failed to subscribe. Please try again.</span>
        </div>
      )}
      <div>
        <input
          type="email"
          placeholder="Your email address"
          className={`w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-[#00695C] transition duration-150 text-sm ${validationError ? 'border-red-500' : 'border-gray-300'}`}
          value={email}
          onChange={handleChange}
          required
        />
        {validationError && <p className="text-red-500 text-xs mt-1">{validationError}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00695C] hover:bg-[#005546] text-white py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
            Subscribing...
          </>
        ) : (
          <>
            Subscribe
            <Mail className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
