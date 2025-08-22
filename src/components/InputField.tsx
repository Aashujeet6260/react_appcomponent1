import React from 'react';

type Variant = 'filled' | 'outlined' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: Variant;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm py-2 pl-3 pr-10 rounded-xl',
  md: 'text-base py-2.5 pl-3.5 pr-11 rounded-2xl',
  lg: 'text-lg py-3 pl-4 pr-12 rounded-2xl'
};

const variantClasses: Record<Variant, string> = {
  filled:
    'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-primary/60 focus:bg-white dark:focus:bg-gray-900 border border-transparent',
  outlined:
    'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary/60',
  ghost:
    'bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-transparent focus:ring-2 focus:ring-primary/60'
};

const spinner = (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor"></path>
  </svg>
);

export default function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
}: InputFieldProps) {
  // infer password mode from label/placeholder to avoid extra props (per instruction)
  const isPassword = React.useMemo(() => {
    const hay = (label || '') + ' ' + (placeholder || '');
    return /password/i.test(hay);
  }, [label, placeholder]);

  const [localType, setLocalType] = React.useState(isPassword ? 'password' : 'text');
  React.useEffect(() => {
    setLocalType(isPassword ? 'password' : 'text');
  }, [isPassword]);

  const inputId = React.useId();
  const describedById = React.useId();

  const hasError = Boolean(invalid || errorMessage);
  const showHelper = !hasError && helperText;
  const showError = hasError && (errorMessage || 'Invalid input');

  const handleClear = () => {
    if (disabled) return;
    if (!onChange) return;
    const target = { value: '' } as HTMLInputElement;
    const event = { target } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  const togglePassword = () => {
    setLocalType(t => (t === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="if-label">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          className={
            [
              'if-input-base w-full',
              sizeClasses[size],
              variantClasses[variant],
              hasError ? 'ring-2 ring-red-500/70' : '',
              disabled ? 'opacity-60 cursor-not-allowed' : 'shadow-soft'
            ].join(' ')
          }
          type={localType}
          value={value ?? ''}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-busy={false}
          aria-describedby={showHelper || showError ? describedById : undefined}
          role="textbox"
          inputMode={isPassword ? 'text' : undefined}
        />
        {/* Adornments */}
        <div className="if-adornment gap-1">
          {/* Clear button */}
          {Boolean(value) && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
              className="rounded-xl px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Clear
            </button>
          )}
          {/* Password toggle */}
          {isPassword && !disabled && (
            <button
              type="button"
              onClick={togglePassword}
              aria-label={localType === 'password' ? 'Show password' : 'Hide password'}
              className="rounded-xl px-2 py-1 text-xs border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {localType === 'password' ? 'Show' : 'Hide'}
            </button>
          )}
        </div>
      </div>
      {showHelper && (
        <p id={describedById} className="if-helper">
          {helperText}
        </p>
      )}
      {showError && (
        <p id={describedById} className="if-error">
          {showError}
        </p>
      )}
    </div>
  );
}
