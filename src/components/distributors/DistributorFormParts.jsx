import React from 'react';
import { FileCheck2 } from 'lucide-react';
import { Label } from '../ui/label';
import { cn } from '../../lib/utils';

export const FormField = ({ id, label, error, helperText, children }) => (
  <div className="space-y-2.5">
    <Label htmlFor={id}>{label}</Label>
    {children}
    {helperText ? <p className="text-sm leading-6 text-slate-500">{helperText}</p> : null}
    {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
  </div>
);

export const Stepper = ({ steps, currentStep, onStepChange }) => (
  <div className="grid grid-cols-3 gap-2 md:grid-cols-9">
    {steps.map((step, index) => {
      const Icon = step.icon;
      const isActive = index === currentStep;
      const isCompleted = index < currentStep;

      return (
        <button
          key={step.title}
          type="button"
          onClick={() => onStepChange(index)}
          className={cn(
            'flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-center transition',
            isActive && 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm',
            isCompleted && 'border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300',
            !isActive && !isCompleted && 'border-slate-200 bg-white text-slate-500 hover:border-slate-300',
          )}
        >
          <div className={cn('flex h-8 w-8 items-center justify-center rounded-full', isActive && 'bg-emerald-600 text-white', isCompleted && 'bg-emerald-100 text-emerald-700', !isActive && !isCompleted && 'bg-slate-100 text-slate-500')}>
            {isCompleted ? <span className="text-sm font-black">✓</span> : <Icon className="h-4 w-4" />}
          </div>
          <span className="text-[11px] font-bold leading-4 tracking-wide">{step.title}</span>
        </button>
      );
    })}
  </div>
);

export const FileUploadField = ({ id, label, error, file, accept, onFileChange }) => (
  <FormField
    id={id}
    label={label}
    error={error}
    helperText={file ? `Selected file: ${file.name}` : 'Accepted formats: images or PDF.'}
  >
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-center gap-4 rounded-[1.5rem] border border-dashed bg-slate-50 px-4 py-5 transition hover:border-emerald-400 hover:bg-emerald-50/50',
        error && 'border-rose-300 bg-rose-50/50',
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
        <FileCheck2 className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-slate-800">{label}</p>
        <p className="text-sm text-slate-500">
          {file ? 'Change selected file' : 'Click to browse and attach a file'}
        </p>
      </div>
      <input
        id={id}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(event) => onFileChange(event.target.files?.[0] || null)}
      />
    </label>
  </FormField>
);
