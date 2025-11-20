// Activation du champ téléphone après choix d'opérateur
document.getElementById('operator').addEventListener('change', function () {
    const phoneInput = document.getElementById('phone');
    const operator = this.value;
  
    if (operator) {
      phoneInput.disabled = false;
      phoneInput.placeholder = `Entrez votre numéro ${operator}`;
      phoneInput.focus();
    } else {
      phoneInput.disabled = true;
      phoneInput.value = '';
      phoneInput.placeholder = "Choisissez d'abord un opérateur";
    }
  });
  
  // Soumission du formulaire via Formspree (sans rechargement)
  document.getElementById('choirForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (response.ok) {
        form.classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Erreur réseau. Veuillez vérifier votre connexion.');
    }
  });