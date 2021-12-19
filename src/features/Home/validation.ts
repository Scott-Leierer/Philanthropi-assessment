export const validationCriteria = {
  address: {
    required: {
      value: true,
      message: "Please provide a mailing address",
    },
  },
  city: {
    required: {
      value: true,
      message: "Please provide a city",
    },
  },
  state: {
    required: {
      value: true,
      message: "Please select a state",
    },
  },
  zip: {
    required: {
      value: true,
      message: "Please provide a ZIP code",
    },
    pattern: {
      value: /^\b\d{5}(-\d{4})?\b$/,
      message: "Please provide a valid ZIP code",
    },
  },
  phone: {
    pattern: {
      value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
      message: "Please provide a valid phone number",
    },
  },
};
