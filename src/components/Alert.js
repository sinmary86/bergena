import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import "../styles/Alert.css";

export const errorAlert = () => {
    Swal.fire({
        icon: "error",
        title: "Fehler",
        html: '<div class="swal-custom-text">Bitte überprüfen Sie alle Pflichtfelder!</div>',
        confirmButtonText: "OK",
        customClass: {
            title: 'swal-custom-title',
            text: 'swal-custom-text',
            confirmButton: 'swal-custom-button',
          },
        });
      };

export const purchaseSuccessAlert = () => {
  Swal.fire({
    title: 'Danke',
    html: '<div class="swal-custom-text">für Ihren Einkauf!</div>', 
    confirmButtonText: 'Schließen',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
    customClass: {
      title: 'swal-custom-title',
      text: 'swal-custom-text',
      confirmButton: 'swal-custom-button',
    },
  });
};