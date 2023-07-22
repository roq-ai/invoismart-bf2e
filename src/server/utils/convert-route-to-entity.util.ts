const mapping: Record<string, string> = {
  customers: 'customer',
  invoices: 'invoice',
  organizations: 'organization',
  payments: 'payment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
