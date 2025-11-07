// Component configurations and constants
import { ImagePlus } from 'lucide-react';

export const COMPONENT_TYPES = {
  HEADER: 'header',
  TEXT: 'text',
  BUTTON: 'button',
  IMAGE: 'image',
  DIVIDER: 'divider',
};

export const COMPONENT_CONFIGS = [
  {
    type: COMPONENT_TYPES.HEADER,
    label: 'Header',
    icon: 'H',
    description: 'Add a header section with title and subtitle',
    category: 'content',
  },
  {
    type: COMPONENT_TYPES.TEXT,
    label: 'Text Block',
    icon: '📝',
    description: 'Add text content with formatting options',
    category: 'content',
  },
  {
    type: COMPONENT_TYPES.BUTTON,
    label: 'Button',
    icon: '🔘',
    description: 'Add a call-to-action button',
    category: 'interactive',
  },
  {
    type: COMPONENT_TYPES.IMAGE,
    label: 'Image',
    icon: '🖼️',
    description: 'Add an image with customizable alignment',
    category: 'media',
  },
  {
    type: COMPONENT_TYPES.DIVIDER,
    label: 'Divider',
    icon: '➖',
    description: 'Add a horizontal line separator',
    category: 'layout',
  },
];

export const EMAIL_SETTINGS = {
  MAX_WIDTH: 600,
  MOBILE_WIDTH: 375,
  DEFAULT_FONT_FAMILY: 'Arial, sans-serif',
  DEFAULT_LINE_HEIGHT: 1.5,
};

export const COLOR_PRESETS = {
  PRIMARY: '#3b82f6',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  DANGER: '#ef4444',
  DARK: '#1f2937',
  LIGHT: '#f9fafb',
  WHITE: '#ffffff',
  BLACK: '#000000',
};

export const FONT_SIZES = [
  { label: '12px', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px', value: '16px' },
  { label: '18px', value: '18px' },
  { label: '20px', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '28px', value: '28px' },
  { label: '32px', value: '32px' },
];

export const TEXT_ALIGNMENTS = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
  { label: 'Justify', value: 'justify' },
];
