import React, { useState } from 'react';
import CallToActionSection from './CallToActionSection';
import CallToActionAdmin from './CallToActionAdmin';

const CallToActionWrapper = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  const toggleAdmin = () => {
    setShowAdmin(!showAdmin);
  };

  if (showAdmin) {
    return <CallToActionAdmin onBack={() => setShowAdmin(false)} />;
  }

  return <CallToActionSection onToggleAdmin={toggleAdmin} />;
};

export default CallToActionWrapper;
