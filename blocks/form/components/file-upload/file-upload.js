/**
 * Custom file-upload component
 * Based on: File Input
 */

/**
 * Decorates a custom form field component
 * @param {HTMLElement} fieldDiv - The DOM element containing the field wrapper. Refer to the documentation for its structure for each component.
 * @param {Object} fieldJson - The form json object for the component.
 * @param {HTMLElement} parentElement - The parent container element of the field.
 * @param {string} formId - The unique identifier of the form.
 */
export default async function decorate(fieldDiv) {
  const input = fieldDiv.querySelector('input[type="file"]');

  if (!input) return fieldDiv;

  fieldDiv.classList.add('file-upload-wrapper');

  input.classList.add('file-upload-input');

  const text = document.createElement('div');
  text.className = 'file-upload-text';
  text.textContent = 'Click or drag file to upload';

  const preview = document.createElement('div');
  preview.className = 'file-preview';

  fieldDiv.appendChild(text);
  fieldDiv.appendChild(preview);

  // Click to open file picker
  fieldDiv.addEventListener('click', () => {
    input.click();
  });

  // Handle file selection
  input.addEventListener('change', () => {
    const file = input.files[0];
    preview.innerHTML = '';

    if (!file) return;

    const fileName = document.createElement('div');
    fileName.className = 'file-name';
    fileName.textContent = file.name;

    // If image → preview
    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    }

    preview.appendChild(fileName);
  });

  return fieldDiv;
}
