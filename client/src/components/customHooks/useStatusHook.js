import { useReducer } from 'react';

function statusReducer(state, action) {
  const { type } = action;
  switch (type) {
    case 'SUCCESS': {
      return {
        ...state,
        status: '',
        error: false,
      };
    }
    case 'NOEMAIL': {
      return {
        ...state,
        status: 'Please enter email to confirm invitation',
        error: true,
      };
    }
    case 'PROCESSING': {
      return {
        ...state,
        status: 'Processing...',
        error: false,
      };
    }
    case 'REGISTERED': {
      return {
        ...state,
        status: `It appears this email has already been registered for this forum. If this is a mistake, or you would like to register with a different email, please <a class="link-1 no-btn" href="mailto:mark@hugo-lpf.com">
        contact </a> forum organizer Mark Waite.`,
        error: true,
      };
    }
    case 'NOTFOUND': {
      return {
        ...state,
        status: `Credentials not found. If you want to participate in the above forum, <a class="link-1 no-btn" href="mailto:mark@hugo-lpf.com">
          email </a> forum organizer Mark Waite.`,
        error: true,
      };
    }
    case 'ERROR': {
      return {
        ...state,
        status:
          'Oops... Something went wrong. Please refesh the page and try again.',
        error: true,
      };
    }
    case 'MISSING': {
      return {
        ...state,
        status: 'Missing information. Please fill in all required fields (*).',
        error: true,
      };
    }
    default: {
      throw new Error(
        'Oops... Something went wrong. Please refesh the page and try again.'
      );
    }
  }
}

export const useStatusHook = () => {
  const [state, dispatch] = useReducer(statusReducer, {
    status: '',
    error: false,
  });

  return [state, dispatch];
};
