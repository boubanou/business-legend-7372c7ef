import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Business Legend</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="This page could not be found. Return to Business Legend homepage to explore our podcast episodes and content." />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-4 py-8">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! This page doesn't exist</p>
          <p className="mb-8 text-sm text-muted-foreground max-w-md mx-auto">
            The page you're looking for might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
