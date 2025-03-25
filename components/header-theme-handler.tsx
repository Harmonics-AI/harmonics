// Create a file: components/header-theme-handler.tsx
"use client"

import { useEffect } from 'react'

export default function HeaderThemeHandler() {
  useEffect(() => {
    const applyDarkMode = () => {
      const header = document.querySelector('header');
      if (!header) return;
      
      if (document.documentElement.classList.contains('dark')) {
        const darkStyle = header.getAttribute('data-dark-style');
        if (darkStyle) {
          header.setAttribute('style', darkStyle);
        }
      } else {
        header.setAttribute('style', 'background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.9))');
      }
    };
    
    // Initial application
    applyDarkMode();
    
    // Set up an observer to detect theme changes
    const observer = new MutationObserver(applyDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Clean up
    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}