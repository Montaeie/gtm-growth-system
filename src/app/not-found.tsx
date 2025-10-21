import Link from 'next/link';
import { buttonVariants } from '@/components/button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-primary">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: 'lg' }), 'mt-4')}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
