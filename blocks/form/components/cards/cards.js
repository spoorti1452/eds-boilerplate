/**
 * Custom cards component
 * Based on: Radio Group
 */

/**
 * Decorates a custom form field component
 * @param {HTMLElement} fieldDiv - The DOM element containing the field wrapper. Refer to the documentation for its structure for each component.
 * @param {Object} fieldJson - The form json object for the component.
 * @param {HTMLElement} parentElement - The parent container element of the field.
 * @param {string} formId - The unique identifier of the form.
 */
export default async function decorate(fieldDiv) {
  const options = fieldDiv.querySelectorAll('.radio-wrapper');

  // Create cards container
  const wrapper = document.createElement('div');
  wrapper.className = 'cards-wrapper';

  options.forEach((option) => {
    const input = option.querySelector('input');
    const label = option.querySelector('label');

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-title">${label.textContent}</div>
    `;

    // Select card on click
    card.addEventListener('click', () => {
      input.checked = true;

      // remove selected from all
      wrapper.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));

      card.classList.add('selected');
    });

    // initial state
    if (input.checked) {
      card.classList.add('selected');
    }

    wrapper.appendChild(card);
    option.style.display = 'none'; // hide original radio
  });

  fieldDiv.appendChild(wrapper);

  return fieldDiv;
}
