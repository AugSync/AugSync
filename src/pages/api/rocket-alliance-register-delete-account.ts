import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

const db = admin.firestore();

type ResponseData = {
  message: string;
  email?: string;
  reason?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, reason } = req.body;

  // Reference to the collection
  const deletionRequestsRef = db.collection('account_deletion_requests');

  try {
    // Check if a request with the same email already exists
    const q = db
      .collection('account_deletion_requests')
      .where('email', '==', email);
    const querySnapshot = await q.get();

    if (!querySnapshot.empty) {
      // If a request with the same email exists, return an error message
      return res.status(200).json({
        message: 'An account deletion request already exists for this email.',
      });
    }

    // If no request with the same email exists, create a new request
    const response = await deletionRequestsRef.add({
      email,
      reason,
      created_at: new Date(),
    });

    res
      .status(200)
      .json({ message: 'Account deletion request submitted successfully.' });
  } catch (error) {
    console.error('Error submitting deletion request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
