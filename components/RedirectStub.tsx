"use client";

import { useEffect } from "react";

interface RedirectStubProps {
  to: string;
  message: string;
  linkText: string;
}

export default function RedirectStub({ to, message, linkText }: RedirectStubProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="redirect-note">
      <p>
        {message} <a href={to}>{linkText}</a>
      </p>
    </div>
  );
}
