interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: [
    'Business Owner',
    'Accountant',
    'Sales Manager',
    'Customer Service Representative',
    'Admin',
    'Standard User',
  ],
  tenantName: 'Organization',
  applicationName: 'InvoiSmart',
  addOns: ['chat', 'notifications', 'file'],
};
