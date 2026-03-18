export function PortfolioFooter() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Copyright {new Date().getFullYear()} Parinith Reddy. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
