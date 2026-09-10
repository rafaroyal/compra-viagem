import type { CSSProperties, HTMLAttributes } from 'react';
import './brand-logo.css';

export type BrandLogoMode = 'auto' | 'full' | 'compact';
export type BrandLogoTheme = 'light' | 'dark';
export type BrandLogoMotion = 'off' | 'on';
export type BrandLogoContext = 'navigation' | 'institutional' | 'confirmation' | 'app';

export interface BrandLogoProps extends HTMLAttributes<HTMLSpanElement> {
  mode?: BrandLogoMode;
  theme?: BrandLogoTheme;
  motion?: BrandLogoMotion;
  context?: BrandLogoContext;
  width?: number | string;
  label?: string;
}

const assets = {
  full: {
    light: { static: './assets/logo-primary.svg', motion: './assets/logo-motion-light.svg' },
    dark: { static: './assets/logo-negative.svg', motion: './assets/logo-motion-dark.svg' },
  },
  compact: {
    light: { static: './assets/icon-compact-static.svg', motion: './assets/icon-compact-motion.svg' },
    dark: { static: './assets/icon-compact-static.svg', motion: './assets/icon-compact-motion.svg' },
  },
} as const;

export function BrandLogo({
  mode = 'auto',
  theme = 'light',
  motion = 'off',
  context = 'navigation',
  width = '100%',
  label = 'Compra Viagem',
  className = '',
  style,
  ...rest
}: BrandLogoProps) {
  const allowFullMotion = motion === 'on' && (context === 'institutional' || context === 'confirmation');
  const allowCompactMotion = motion === 'on' && context === 'app';
  const css = { ...style, '--cv-brand-width': typeof width === 'number' ? `${width}px` : width } as CSSProperties;

  return (
    <span className={`cv-brand cv-brand--${mode} cv-brand--${theme} ${className}`} style={css} {...rest}>
      <span className="cv-brand__full">
        <img className="cv-brand__static" src={assets.full[theme].static} alt={label} />
        {allowFullMotion && <img className="cv-brand__motion" src={assets.full[theme].motion} alt={label} />}
      </span>
      <span className="cv-brand__compact">
        <img className="cv-brand__static" src={assets.compact[theme].static} alt={label} />
        {allowCompactMotion && <img className="cv-brand__motion" src={assets.compact[theme].motion} alt={label} />}
      </span>
    </span>
  );
}

