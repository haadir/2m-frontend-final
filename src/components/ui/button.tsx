'use client';

import { HTMLAttributes } from 'react';
import OriginalButton from '@/app/components/Button';

// This file is a thin wrapper so that shadcn-like imports (`@/components/ui/button`) work.
// It simply re-exports the existing Button component used across the project.

export type { HTMLAttributes } from 'react';
export default OriginalButton; 