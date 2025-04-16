import React from 'react';

export const Maintenance: React.FC = () => {
  return (
    <section className="maintenance">
      <h1 className="maintenance__title">We'll be back soon!</h1>
      <p className="maintenance__message">
        Our site is currently undergoing scheduled maintenance.
        We apologize for any inconvenience and appreciate your patience.
      </p>

      <a href="tel:+37061550539" className="maintenance__phone">
        +370 (615) 50 539
      </a>

    </section>
  );
};