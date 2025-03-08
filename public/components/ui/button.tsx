import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';

type ButtonProps = {
  variant?: 'default' | 'outline';
  href?: string;
  target?: string;
  rel?: string;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'default', className, href, target, rel, ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-md transition-colors text-center';
    const variantStyles = variant === 'outline' 
      ? 'border border-gray-700 hover:border-gray-600' 
      : 'bg-blue-600 hover:bg-blue-500';
    
    const classNames = `${baseStyles} ${variantStyles} ${className}`;

    if (href) {
      const isExternal = href.startsWith('http');
      
      if (isExternal) {
        return (
          <a
            href={href}
            className={classNames}
            target={target}
            rel={rel}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...props as AnchorHTMLAttributes<HTMLAnchorElement>}
          >
            {props.children}
          </a>
        );
      }

      return (
        <Link href={href} passHref legacyBehavior>
          <a
            className={classNames}
            target={target}
            rel={rel}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...props as AnchorHTMLAttributes<HTMLAnchorElement>}
          >
            {props.children}
          </a>
        </Link>
      );
    }

    return (
      <button 
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNames}
        {...props as ButtonHTMLAttributes<HTMLButtonElement>}
      />
    );
  }
);

Button.displayName = 'Button';