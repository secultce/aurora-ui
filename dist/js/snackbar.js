const successToast = new bootstrap.Toast(document.getElementById('successToast'));
const warningToast = new bootstrap.Toast(document.getElementById('warningToast'));
const dangerToast = new bootstrap.Toast(document.getElementById('dangerToast'));
const infoToast = new bootstrap.Toast(document.getElementById('infoToast'));

document.getElementById('showSuccessToast').addEventListener('click', () => successToast.show());
document.getElementById('showWarningToast').addEventListener('click', () => warningToast.show());
document.getElementById('showDangerToast').addEventListener('click', () => dangerToast.show());
document.getElementById('showInfoToast').addEventListener('click', () => infoToast.show());