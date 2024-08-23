'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname(); // Aktif sayfanın URL'sini almak için

  const pages = [
    { name: 'Tools', key: 'tools', path: '/dashboard/tools' },
    { name: 'AI', key: 'ai', path: '/dashboard/ai' },
    { name: 'Image', key: 'image', path: '/dashboard/image' }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {pages.map((page) => (
            <li
              key={page.key}
              style={{
                margin: '10px 0',
                padding: '10px',
                backgroundColor: pathname === page.path ? '#007bff' : 'transparent',
                color: pathname === page.path ? '#fff' : '#000',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              <Link href={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
