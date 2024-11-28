import Swal from 'sweetalert2';

const confirmAlert = (text?: string, preConfirm?: any) => {
  let swal: any = {
    title: '¿Estás seguro(a)?',
    text: text || '',
    icon: 'question',
    showCancelButton: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    confirmButtonText: '¡Sí, confirmar!',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#198754',
    cancelButtonColor: '#dc3545',
    reverseButtons: true,
  };
  if (preConfirm) {
    swal = {
      ...swal,
      ...preConfirm,
      allowOutsideClick: () => !Swal.isLoading(),
      showLoaderOnConfirm: true,
    };
  }
  return Swal.fire(swal);
};

export const successAlert = (text: string) => {
  Swal.fire({
    title: '¡Éxito!',
    text,
    icon: 'success',
    confirmButtonColor: '#198754',
    timer: 3000,
  });
};

export async function confirmAlertLoading(
  text: string,
  request: CallableFunction
): Promise<void> {
  await confirmAlert(text, {
    preConfirm: () => {
      return new Promise((resolve) => {
        request(resolve);
      });
    },
    showLoaderOnConfirm: true,
  });
}
