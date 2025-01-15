import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import "../styles/Alert.css";

export const errorAlert = () => {
    Swal.fire({
        icon: "error",
        title: "Fehler",
        html: '<div class="swal-custom-text">Bitte füllen Sie alle Pflichtfelder aus!</div>',
        confirmButtonText: "OK",
        customClass: {
            title: 'swal-custom-title',
            text: 'swal-custom-text',
            confirmButton: 'swal-custom-button',
          },
        });
      };

export const emptyCartAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Ihr Warenkorb ist leer!',
    html: '<div class="swal-custom-text">Bitte wählen Sie eine Ware aus</div>', 
    confirmButtonText: 'Weiter kaufen',
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