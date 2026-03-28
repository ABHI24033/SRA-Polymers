import React, { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowLeft, ArrowRight, LoaderCircle, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  associationOptions,
  corporateStatuses,
  declarationText,
  defaultValues,
  distributorSchema,
  documentOptions,
  stepFields,
  steps,
} from './distributorFormConfig';
import { FileUploadField, FormField, Stepper } from './DistributorFormParts';
import { cn } from '../../lib/utils';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_9ca3u46',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9lpi9ha',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'hiIpzentX9ktO7DA5',
};

const fieldClassName = (hasError) =>
  cn(hasError && 'border-rose-300 focus-visible:ring-rose-500/20');

const DistributorForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(distributorSchema), defaultValues });

  const association = watch('association');
  const documentsProvided = watch('documentsProvided');
  const progress = ((currentStep + 1) / steps.length) * 100;
  const stepMeta = steps[currentStep];
  const StepIcon = stepMeta.icon;
  const selectedDocumentSummary = useMemo(
    () => (documentsProvided.length ? documentsProvided.join(', ') : 'None selected yet'),
    [documentsProvided],
  );

  const nextStep = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (!valid) {
      toast.error('Please complete the highlighted fields before continuing.');
      return;
    }
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
  };

  const previousStep = () => setCurrentStep((step) => Math.max(step - 1, 0));

  const onSubmit = async (values) => {
    await emailjs.send(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      {
        to_email: 'abhishek24033c@gmail.com',
        subject: `New Distributor Registration - ${values.name}`,
        name: values.name,
        address: values.address,
        city: values.city,
        district: values.district,
        state: values.state,
        pincode: values.pinCode,
        mobile: values.mobileNo,
        whatsapp: values.whatsappNo,
        email: values.emailId,
        corporateStatus: values.corporateStatus,
        director: values.managingDirector,
        partners: values.workingPartners,
        warehouseAddress: values.warehouseAddress,
        warehouseSize: values.warehouseArea,
        salesStaff: values.salesStaff,
        supportStaff: values.supportStaff,
        totalStaff: values.totalStaff,
        gst: values.gstNo,
        existingBusiness: values.existingBusinesses,
        turnover: values.productServicesTurnover,
        dealers: values.dealerNetwork,
        association: values.association,
        associationDetails: values.associationDetails,
        currentTerritory: values.existingTerritory,
        desiredTerritory: values.desiredDistrict,
        documents: [
          `Selected: ${values.documentsProvided.join(', ') || 'None'}`,
          `Passport Size Photo: ${values.passportPhoto?.name || 'Not attached'}`,
          `Aadhar Card: ${values.aadharCard?.name || 'Not attached'}`,
          `PAN Card: ${values.panCard?.name || 'Not attached'}`,
          `GST Certificate: ${values.gstCertificate?.name || 'Not attached'}`,
        ].join('\n'),
        message: values.message || 'No additional message provided.',
      },
      { publicKey: emailJsConfig.publicKey },
    );

    toast.success('Distributor registration submitted successfully.');
    reset(defaultValues);
    setCurrentStep(0);
  };

  return (
    <Card className="relative  mt-4 overflow-hidden border-emerald-100/80">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-lime-400" />
      <CardHeader className="gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <StepIcon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Distributor Registration Form</CardTitle>
              <CardDescription>
                A guided 9-step application flow to keep the form professional and easy to fill.
              </CardDescription>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-900">
            <p className="font-black uppercase tracking-[0.2em] text-emerald-700">
              Step {currentStep + 1} of {steps.length}
            </p>
            <p className="mt-1 font-medium">{stepMeta.title}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <Stepper steps={steps} currentStep={currentStep} onStepChange={setCurrentStep} />
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">
            {stepMeta.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{stepMeta.description}</p>
        </div>

        <form
          className="space-y-8"
          onSubmit={handleSubmit(async (values) => {
            try {
              await onSubmit(values);
            } catch {
              toast.error('We could not send your registration right now.');
            }
          })}
        >
          {currentStep === 0 && <CompanyStep register={register} errors={errors} />}
          {currentStep === 1 && <CorporateStep register={register} errors={errors} watch={watch} />}
          {currentStep === 2 && <InfrastructureStep register={register} errors={errors} />}
          {currentStep === 3 && <OrganisationStep register={register} errors={errors} />}
          {currentStep === 4 && <BusinessStep register={register} errors={errors} />}
          {currentStep === 5 && <DeclarationStep register={register} errors={errors} />}
          {currentStep === 6 && (
            <AssociationStep register={register} errors={errors} association={association} />
          )}
          {currentStep === 7 && <TerritoryStep register={register} errors={errors} />}
          {currentStep === 8 && (
            <DocumentsStep
              errors={errors}
              documentsProvided={documentsProvided}
              selectedDocumentSummary={selectedDocumentSummary}
              setValue={setValue}
              watch={watch}
            />
          )}

          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              This frontend flow sends application data through EmailJS. The selected file names are included in the email summary, and binary document delivery can be added later if needed.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="button" variant="outline" size="lg" onClick={previousStep} disabled={currentStep === 0 || isSubmitting}>
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button type="button" size="lg" onClick={nextStep} disabled={isSubmitting}>
                  Next Step
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const CompanyStep = ({ register, errors }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {[
      ['name', 'Name *', 'Company or applicant name'],
      ['emailId', 'Email-ID *', 'company@example.com', 'email'],
      ['city', 'City', 'City'],
      ['district', 'District', 'District'],
      ['state', 'State', 'State'],
      ['pinCode', 'Pin Code', '6-digit PIN'],
      ['mobileNo', 'Mobile No. *', '+91 98765 43210', 'tel'],
      ['whatsappNo', 'Whatsapp No.', 'WhatsApp number', 'tel'],
    ].map(([key, label, placeholder, type]) => (
      <FormField key={key} id={key} label={label} error={errors[key]?.message}>
        <Input id={key} type={type || 'text'} placeholder={placeholder} className={fieldClassName(errors[key])} {...register(key)} />
      </FormField>
    ))}
    <div className="md:col-span-2">
      <FormField id="address" label="Address *" error={errors.address?.message}>
        <Textarea id="address" rows={4} placeholder="Registered office or full business address" className={fieldClassName(errors.address)} {...register('address')} />
      </FormField>
    </div>
  </div>
);

const CorporateStep = ({ register, errors, watch }) => (
  <div className="space-y-8">
    <FormField id="corporateStatus" label="Corporate Status" error={errors.corporateStatus?.message}>
      <div className="grid gap-4 md:grid-cols-2">
        {corporateStatuses.map((status) => (
          <label key={status} className={cn('flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition', watch('corporateStatus') === status ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300')}>
            <input type="radio" value={status} className="mt-1 h-4 w-4 accent-emerald-600" {...register('corporateStatus')} />
            <span className="text-sm font-semibold text-slate-700">{status}</span>
          </label>
        ))}
      </div>
    </FormField>
    <div className="grid gap-6 md:grid-cols-2">
      <FormField id="managingDirector" label="Name of Managing Director / Director" error={errors.managingDirector?.message}>
        <Input id="managingDirector" placeholder="Director or managing director name" className={fieldClassName(errors.managingDirector)} {...register('managingDirector')} />
      </FormField>
      <FormField id="workingPartners" label="Name of Working Partners / Proprietor" error={errors.workingPartners?.message}>
        <Input id="workingPartners" placeholder="Partner or proprietor name" className={fieldClassName(errors.workingPartners)} {...register('workingPartners')} />
      </FormField>
    </div>
  </div>
);

const InfrastructureStep = ({ register, errors }) => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="md:col-span-2">
      <FormField id="warehouseAddress" label="Godown / Warehouse Address" error={errors.warehouseAddress?.message}>
        <Textarea id="warehouseAddress" rows={4} placeholder="Warehouse or storage facility address" className={fieldClassName(errors.warehouseAddress)} {...register('warehouseAddress')} />
      </FormField>
    </div>
    <FormField id="warehouseArea" label="Size / Area (sq. feet)" error={errors.warehouseArea?.message}>
      <Input id="warehouseArea" inputMode="numeric" placeholder="e.g. 2400" className={fieldClassName(errors.warehouseArea)} {...register('warehouseArea')} />
    </FormField>
  </div>
);

const OrganisationStep = ({ register, errors }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {[
      ['salesStaff', 'No. of Sales Staff'],
      ['supportStaff', 'No. of Support Staff'],
      ['totalStaff', 'Total Staff'],
    ].map(([key, label]) => (
      <FormField key={key} id={key} label={label} error={errors[key]?.message}>
        <Input id={key} inputMode="numeric" placeholder="0" className={fieldClassName(errors[key])} {...register(key)} />
      </FormField>
    ))}
  </div>
);

const BusinessStep = ({ register, errors }) => (
  <div className="grid gap-6 md:grid-cols-2">
    <FormField id="gstNo" label="GST No." error={errors.gstNo?.message}>
      <Input id="gstNo" placeholder="Enter GST number" className={fieldClassName(errors.gstNo)} {...register('gstNo')} />
    </FormField>
    <FormField id="dealerNetwork" label="No. of retailers / dealers in network" error={errors.dealerNetwork?.message}>
      <Input id="dealerNetwork" inputMode="numeric" placeholder="e.g. 125" className={fieldClassName(errors.dealerNetwork)} {...register('dealerNetwork')} />
    </FormField>
    <div className="md:col-span-2">
      <FormField id="existingBusinesses" label="Details of Existing Business(s)" error={errors.existingBusinesses?.message}>
        <Textarea id="existingBusinesses" rows={4} placeholder="Share a short summary of your current business activities" className={fieldClassName(errors.existingBusinesses)} {...register('existingBusinesses')} />
      </FormField>
    </div>
    <div className="md:col-span-2">
      <FormField id="productServicesTurnover" label="Product / Services & Last Year Turnover" error={errors.productServicesTurnover?.message}>
        <Textarea id="productServicesTurnover" rows={4} placeholder="List core products or services and last financial year's turnover" className={fieldClassName(errors.productServicesTurnover)} {...register('productServicesTurnover')} />
      </FormField>
    </div>
    <div className="md:col-span-2">
      <FormField id="message" label="Additional Message" error={errors.message?.message} helperText="Optional notes you want the team to read along with your application.">
        <Textarea id="message" rows={4} placeholder="Any extra context, goals, or comments" className={fieldClassName(errors.message)} {...register('message')} />
      </FormField>
    </div>
  </div>
);

const DeclarationStep = ({ register, errors }) => (
  <div className="space-y-6">
    <div className="max-h-48 overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
      {declarationText.split('\n\n').map((paragraph) => <p key={paragraph} className="mb-4 last:mb-0">{paragraph}</p>)}
    </div>
    <FormField id="declarationAccepted" label="General Declaration" error={errors.declarationAccepted?.message}>
      <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded accent-emerald-600" {...register('declarationAccepted')} />
        <span className="text-sm font-medium text-slate-700">I agree to the terms and declaration.</span>
      </label>
    </FormField>
  </div>
);

const AssociationStep = ({ register, errors, association }) => (
  <div className="space-y-8">
    <FormField id="association" label="Are you associated with any of our Group Company?" error={errors.association?.message}>
      <div className="grid gap-4 md:grid-cols-4">
        {associationOptions.map((option) => (
          <label key={option} className={cn('flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition', association === option ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300')}>
            <input type="radio" value={option} className="h-4 w-4 accent-emerald-600" {...register('association')} />
            <span className="text-sm font-semibold text-slate-700">{option}</span>
          </label>
        ))}
      </div>
    </FormField>
    {association === 'Yes' && (
      <FormField id="associationDetails" label="If yes, please give details" error={errors.associationDetails?.message}>
        <Textarea id="associationDetails" rows={4} placeholder="Describe the current association" className={fieldClassName(errors.associationDetails)} {...register('associationDetails')} />
      </FormField>
    )}
  </div>
);

const TerritoryStep = ({ register, errors }) => (
  <div className="grid gap-6 md:grid-cols-2">
    <FormField id="existingTerritory" label="District / Market territory of existing business" error={errors.existingTerritory?.message}>
      <Textarea id="existingTerritory" rows={4} placeholder="Describe the district or market territory you currently cover" className={fieldClassName(errors.existingTerritory)} {...register('existingTerritory')} />
    </FormField>
    <FormField id="desiredDistrict" label="Desired district for selling products" error={errors.desiredDistrict?.message}>
      <Textarea id="desiredDistrict" rows={4} placeholder="Tell us which district you want to handle" className={fieldClassName(errors.desiredDistrict)} {...register('desiredDistrict')} />
    </FormField>
  </div>
);

const DocumentsStep = ({ errors, documentsProvided, selectedDocumentSummary, setValue, watch }) => (
  <div className="space-y-8">
    <FormField id="documentsProvided" label="List of Documents Required" error={errors.documentsProvided?.message} helperText={`Selected documents: ${selectedDocumentSummary}`}>
      <div className="grid gap-4 md:grid-cols-2">
        {documentOptions.map((document) => {
          const checked = documentsProvided.includes(document);
          return (
            <label key={document} className={cn('flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition', checked ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300')}>
              <input
                type="checkbox"
                checked={checked}
                onChange={(event) => {
                  const nextValue = event.target.checked ? [...documentsProvided, document] : documentsProvided.filter((item) => item !== document);
                  setValue('documentsProvided', nextValue, { shouldValidate: true, shouldDirty: true });
                }}
                className="h-4 w-4 rounded accent-emerald-600"
              />
              <span className="text-sm font-semibold text-slate-700">{document}</span>
            </label>
          );
        })}
      </div>
    </FormField>
    <div className="grid gap-6 md:grid-cols-2">
      {[
        ['passportPhoto', 'Passport Size Photo *'],
        ['aadharCard', 'Aadhar Card (Front & Back)'],
        ['panCard', 'PAN Card'],
        ['gstCertificate', 'GST Registration Certificate'],
      ].map(([key, label]) => (
        <FileUploadField
          key={key}
          id={key}
          label={label}
          error={errors[key]?.message}
          file={watch(key)}
          accept="image/*,.pdf"
          onFileChange={(file) => setValue(key, file, { shouldDirty: true, shouldValidate: true })}
        />
      ))}
    </div>
  </div>
);

export default DistributorForm;
