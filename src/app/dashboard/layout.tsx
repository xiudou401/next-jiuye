'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-white p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4 text-purple-500">
        <Link href="/dashboard/about">About</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="bg-amber-300 p-2 my-4 rounded-md"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
