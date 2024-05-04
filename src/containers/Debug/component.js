import validators from '@/validators';
import schemas from '@/schemas';

export default {
  name: 'Debug',
  computed: {
    envelope() {
      const errors = validators.envelope.validate(schemas.envelope.example);
      return [{
        'validator': validators.envelope.getSchema().$id,
        'example': '/schemas/envelope/Envelope.example.json',
        'status': errors.length === 0,
        'errors': errors,
      }];
    },
    common() {
      return Object.keys(validators.common).map((key) => {
        const errors = validators.common[key].validate(schemas.common.examples[key]);
        return {
          'validator': validators.common[key].getSchema().$id,
          'example': `/schemas/common/examples/${key}.example.json`,
          'status': errors.length === 0,
          'errors': errors,
        };
      });
    },
    requests() {
      return Object.keys(validators.requests).map((key) => {
        const errors = validators.requests[key].validate(schemas.requests.examples[key]);
        return {
          'validator': validators.requests[key].getSchema().$id,
          'example': `/schemas/requests/examples/${key}.example.json`,
          'status': errors.length === 0,
          'errors': errors,
        };
      });
    },
    responses() {
      return Object.keys(validators.responses).map((key) => {
        const errors = validators.responses[key].validate(schemas.responses.examples[key]);
        return {
          'validator': validators.responses[key].getSchema().$id,
          'example': `/schemas/responses/examples/${key}.example.json`,
          'status': errors.length === 0,
          'errors': errors,
        };
      });
    },
  },
  mounted() {
    console.log(process.env);
  },
};
