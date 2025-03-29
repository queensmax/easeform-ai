import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Higher-order component for route protection
const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      // Check if user is authenticated
      const checkAuth = async () => {
        try {
          const res = await fetch('/api/users/profile');
          if (res.ok) {
            setAuthenticated(true);
          } else {
            // Redirect to login if not authenticated
            router.replace('/login');
          }
        } catch (error) {
          console.error('Auth check error:', error);
          router.replace('/login');
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    // Show loading state while checking authentication
    if (loading) {
      return (
        <div className="section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 300px)' }}>
          <div className="loading-spinner"></div>
        </div>
      );
    }

    // Render component if authenticated
    if (authenticated) {
      return <WrappedComponent {...props} />;
    }

    // This should not be visible as we redirect in useEffect
    return null;
  };

  return AuthComponent;
};

export default withAuth;
