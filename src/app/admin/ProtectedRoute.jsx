'use client';

import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from './add-news/loading';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin-login');
    }
  }, [user, loading]);

  if (loading || !user) return <Loading />;

  return children;
}
