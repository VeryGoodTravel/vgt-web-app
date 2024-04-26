import { Draft07, resolveRefMerge } from 'json-schema-library';
import schemas from '@/schemas';
import example from '@/schemas/responses/examples/TravelDateRange.example.json';

export default {
  name: 'Debug',
  mounted() {
    console.log(process.env);
    console.log(schemas);
    console.log(example);
    const val = new Draft07(schemas.responses.TravelDateRange, { resolveRef: resolveRefMerge });
    const errors = val.validate(example);
    console.log(errors);
  },
};
