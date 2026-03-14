import React from 'react';

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps): React.JSX.Element {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[2000] bg-brand text-white px-8 py-4 rounded-2xl font-bold shadow-[0_20px_50px_rgba(108,79,255,0.4)] animate-fade-up border border-white/20">
      {message}
    </div>
  );
}
