document.addEventListener('DOMContentLoaded', () => {
            const tabsContainer = document.getElementById('tabs-container');
            const tabButtons = tabsContainer.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            tabsContainer.addEventListener('click', (event) => {
                const clickedButton = event.target.closest('.tab-button');
                if (!clickedButton) return;

                const tabToActivate = clickedButton.dataset.tab;

                tabButtons.forEach(button => {
                    button.classList.remove('active', 'text-indigo-600');
                    button.classList.add('text-gray-500');
                });

                clickedButton.classList.add('active', 'text-indigo-600');
                clickedButton.classList.remove('text-gray-500');

                tabContents.forEach(content => {
                    if (content.id === tabToActivate) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            });
        });