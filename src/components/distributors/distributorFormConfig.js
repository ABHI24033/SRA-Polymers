import {
  Building2,
  Files,
  MailCheck,
  MapPinned,
  Network,
  ScrollText,
  ShieldCheck,
  Users2,
  Warehouse,
} from 'lucide-react';
import { z } from 'zod';

export const declarationText = `1. The applicant has made full disclosure of all the information required in this application and confirms that all information requested of, and given by, the applicant is true and correct in each and every particular.

2. Any obligations undertaken or expense incurred by the applicant in submitting this application and or in contemplation or anticipation of being appointed by the company as an authorized dealer shall be undertaken or incurred entirely on the applicant's own behalf.`;

export const corporateStatuses = [
  'Public Limited',
  'Partnership',
  'Private Limited',
  'Individual/Partnership',
];

export const associationOptions = ['Yes', 'No', 'Maybe', 'Other'];

export const documentOptions = [
  'Passport Size Photo',
  'PAN Card',
  'Aadhar Card',
  'GST Registration Certificate',
];

export const steps = [
  { title: 'Company Details', icon: Building2, description: 'Basic contact and location details.' },
  { title: 'Corporate Details', icon: ShieldCheck, description: 'Ownership and leadership information.' },
  { title: 'Infrastructure', icon: Warehouse, description: 'Warehouse and storage readiness.' },
  { title: 'Organisation', icon: Users2, description: 'Operational team size and support.' },
  { title: 'Business Details', icon: Network, description: 'GST, turnover, and network details.' },
  { title: 'Declaration', icon: ScrollText, description: 'Review and accept the declaration.' },
  { title: 'Association', icon: MailCheck, description: 'Group company association disclosure.' },
  { title: 'Territory Details', icon: MapPinned, description: 'Current and desired selling territory.' },
  { title: 'Documents', icon: Files, description: 'Checklist and file uploads.' },
];

export const stepFields = [
  ['name', 'address', 'city', 'district', 'state', 'pinCode', 'mobileNo', 'whatsappNo', 'emailId'],
  ['corporateStatus', 'managingDirector', 'workingPartners'],
  ['warehouseAddress', 'warehouseArea'],
  ['salesStaff', 'supportStaff', 'totalStaff'],
  ['gstNo', 'existingBusinesses', 'productServicesTurnover', 'dealerNetwork', 'message'],
  ['declarationAccepted'],
  ['association', 'associationDetails'],
  ['existingTerritory', 'desiredDistrict'],
  ['documentsProvided', 'passportPhoto', 'aadharCard', 'panCard', 'gstCertificate'],
];

const fileValueSchema = z.any().refine(
  (value) => !value || (typeof value === 'object' && typeof value.name === 'string'),
  'Invalid file.',
);

export const distributorSchema = z
  .object({
    name: z.string().min(2, 'Company name is required.'),
    address: z.string().min(10, 'Address must be at least 10 characters.'),
    city: z.string().optional(),
    district: z.string().optional(),
    state: z.string().optional(),
    pinCode: z.string().optional().refine((value) => !value || /^\d{6}$/.test(value), 'PIN code must be 6 digits.'),
    mobileNo: z.string().min(10, 'Mobile number must be at least 10 digits.').regex(/^[+\d\s()-]+$/, 'Mobile number contains invalid characters.'),
    whatsappNo: z.string().optional().refine((value) => !value || /^[+\d\s()-]+$/.test(value), 'WhatsApp number contains invalid characters.'),
    emailId: z.email('Enter a valid email address.'),
    corporateStatus: z.string().min(1, 'Select the corporate status.'),
    managingDirector: z.string().optional(),
    workingPartners: z.string().optional(),
    warehouseAddress: z.string().optional(),
    warehouseArea: z.string().optional().refine((value) => !value || /^\d+$/.test(value), 'Use numbers only for area.'),
    salesStaff: z.string().optional().refine((value) => !value || /^\d+$/.test(value), 'Use numbers only.'),
    supportStaff: z.string().optional().refine((value) => !value || /^\d+$/.test(value), 'Use numbers only.'),
    totalStaff: z.string().optional().refine((value) => !value || /^\d+$/.test(value), 'Use numbers only.'),
    gstNo: z.string().min(5, 'GST number is required.'),
    existingBusinesses: z.string().min(5, 'Add a short summary of existing businesses.'),
    productServicesTurnover: z.string().min(5, 'Add product or service details and turnover.'),
    dealerNetwork: z.string().min(1, 'Enter the number of retailers or dealers in your network.').refine((value) => /^\d+$/.test(value), 'Use numbers only.'),
    message: z.string().optional(),
    declarationAccepted: z.boolean().refine(Boolean, 'You must accept the declaration.'),
    association: z.string().min(1, 'Select one association option.'),
    associationDetails: z.string().optional(),
    existingTerritory: z.string().min(2, 'Enter the existing market territory.'),
    desiredDistrict: z.string().min(2, 'Enter the desired district for sales.'),
    documentsProvided: z.array(z.string()).min(1, 'Select at least one document.'),
    passportPhoto: fileValueSchema.refine((value) => value && typeof value.name === 'string', 'Passport size photo is required.'),
    aadharCard: fileValueSchema.optional(),
    panCard: fileValueSchema.optional(),
    gstCertificate: fileValueSchema.optional(),
  })
  .superRefine((values, ctx) => {
    if (values.association === 'Yes' && !values.associationDetails?.trim()) {
      ctx.addIssue({ code: 'custom', path: ['associationDetails'], message: 'Please provide association details.' });
    }
  });

export const defaultValues = {
  name: '',
  address: '',
  city: '',
  district: '',
  state: '',
  pinCode: '',
  mobileNo: '',
  whatsappNo: '',
  emailId: '',
  corporateStatus: '',
  managingDirector: '',
  workingPartners: '',
  warehouseAddress: '',
  warehouseArea: '',
  salesStaff: '',
  supportStaff: '',
  totalStaff: '',
  gstNo: '',
  existingBusinesses: '',
  productServicesTurnover: '',
  dealerNetwork: '',
  message: '',
  declarationAccepted: false,
  association: '',
  associationDetails: '',
  existingTerritory: '',
  desiredDistrict: '',
  documentsProvided: [],
  passportPhoto: null,
  aadharCard: null,
  panCard: null,
  gstCertificate: null,
};
