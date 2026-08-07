import {
  Building2, Ruler, Layers, Zap, HardHat, Monitor,
  Mountain, ClipboardList, DollarSign, Search, FileCheck,
  ScanLine, Wrench, Leaf, Handshake, Star
} from 'lucide-react';

/**
 * Lookup map: icon name string → Lucide component
 * Used across AllServices, Home, ServicePage etc.
 */
export const iconMap = {
  Building2,
  Ruler,
  Layers,
  Zap,
  HardHat,
  Monitor,
  Mountain,
  ClipboardList,
  DollarSign,
  Search,
  FileCheck,
  ScanLine,
  Wrench,
  Leaf,
  Handshake,
  Star,
};

/**
 * ServiceIcon — renders the correct Lucide SVG icon for a service.
 * @param {string} name - icon name key from iconMap
 * @param {number} size - px size (default 24)
 * @param {object} style - extra inline styles
 * @param {string} color - stroke color (default #C89A45)
 */
export default function ServiceIcon({ name, size = 24, color = '#C89A45', style = {} }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.8} color={color} style={style} />;
}
