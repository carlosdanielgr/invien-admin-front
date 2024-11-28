import Swal from 'sweetalert2';

export const errorFn = (message: string) => {
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error',
    confirmButtonColor: '#dc3545',
  });
};
