
// Fix: Added React import to provide access to the React namespace for ElementType
import React from 'react';

export interface WaitlistEntry {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  created_at: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  count?: number;
}

export interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Tier {
  name: string;
  icon: string;
  rate: string;
  color: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  volume: string;
  benefits: string[];
  featured?: boolean;
}