import React from 'react';
import { Zap, CreditCard, Download, Lock, ShieldCheck } from 'lucide-react';

/**
 * Compact trust indicators — always single row on all devices.
 */
export const TrustBadges = ({ variant = 'dark', type = 'purchase' }: { variant?: 'dark' | 'light'; type?: 'purchase' | 'security' }) => {
  const textColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const iconColor = variant === 'dark' ? 'text-[#dfab43]' : 'text-[#FF6F00]';
  const dotColor = variant === 'dark' ? 'bg-gray-600' : 'bg-gray-300';

  const badges = type === 'security' ? [
    { icon: Zap, label: 'Instant Access' },
    { icon: Lock, label: 'Secure Payment' },
    { icon: ShieldCheck, label: 'Guarantee' },
  ] : [
    { icon: Zap, label: 'Instant Access' },
    { icon: CreditCard, label: 'One-Time Pay' },
    { icon: Download, label: 'Digital Download' },
  ];

  return (
    <div className={`flex items-center justify-center gap-x-2 sm:gap-x-4 mt-3 text-[10px] sm:text-xs md:text-sm font-medium ${textColor}`}>
      {badges.map((badge, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className={`w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full shrink-0 ${dotColor}`} />}
          <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <badge.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${iconColor}`} />
            {badge.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};
