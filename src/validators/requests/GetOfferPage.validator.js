import { Draft07 } from 'json-schema-library';
import resolver from '@/validators/resolver';
import schemas from '@/schemas';

const externalSchemas = [
  schemas.common.TravelDateRange,
];

export default new Draft07(resolver.resolve(schemas.requests.GetOfferPage, { externalSchemas }));
