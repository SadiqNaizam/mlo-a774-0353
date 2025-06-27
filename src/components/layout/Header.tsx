import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
        Flight & Airport Status
      </h1>
      <p className="mt-2 text-lg text-foreground/80">
        Real-time Flight Info & Airport Delays
      </p>
    </header>
  );
};

export default Header;
