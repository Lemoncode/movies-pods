import {
    createFormValidation, ValidationConstraints, Validators,
  } from 'lc-form-validation';
  
  const CODE_PATTERN =/\b(19|20)\d\d\b/;
  
  const yearValidationConstraints: ValidationConstraints = {
    fields: {
      year: [
        { 
            validator: Validators.pattern,
            customParams: { pattern: CODE_PATTERN }
        },
      ],
    },
  };
  
  export const yearValidation = createFormValidation(yearValidationConstraints);