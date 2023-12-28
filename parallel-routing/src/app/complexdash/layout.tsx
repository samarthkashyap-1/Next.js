"use client";
import { useState } from "react";

export default function ComplexDashLayout({
  children,
  updates,
  notifications,
  revenues,
  login
}: {
  children: React.ReactNode;
  updates: React.ReactNode;
  notifications: React.ReactNode;
  revenues: React.ReactNode;
  login: React.ReactNode;
}) {

  const [Login, setLogin] = useState(false);
   const handleLogin = () => {
    setLogin(!Login);
  }

  return Login ? (
    <>
      {children}
      <div className="flex border-2">
        <div className="flex-1 flex flex-col">
          {updates}
          {revenues}
        </div>
        <div className="flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    <>{login}
    <button onClick={handleLogin}>Login</button></>
  );
}
