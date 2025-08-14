function Toasty({
            message = "Copied",
            type = "success",
            duration = 3000,
            position = "top-right"
        } = {}) {
            const MAX_TOASTS = 5;

            // Icons per type
            const icons = {
                success: '✅',
                error: '❌',
                warning: '⚠️',
                info: 'ℹ️'
            };

            // Toast container (singleton pattern)
            let container = document.querySelector('.toast-container');
            if (!container) {
                container = document.createElement('div');
                container.className = 'toast-container';
                container.style.position = 'fixed';
                container.style.zIndex = 9999;
                container.style.pointerEvents = 'none';
                container.style.display = 'flex';
                container.style.flexDirection = 'column';
                container.style.gap = '10px';

                // Position the container
                const pos = position.toLowerCase();
                if (pos.includes('top')) container.style.top = '1rem';
                if (pos.includes('bottom')) container.style.bottom = '1rem';
                if (pos.includes('left')) container.style.left = '1rem';
                if (pos.includes('right')) container.style.right = '1rem';
                if (pos === 'top' || pos === 'bottom') {
                    container.style.left = '50%';
                    container.style.transform = 'translateX(-50%)';
                }

                document.body.appendChild(container);
            }

            // Limit number of toasts
            const existingToasts = container.querySelectorAll('.toast');
            if (existingToasts.length >= MAX_TOASTS) {
                // Remove the oldest one
                existingToasts[0].remove();
            }

            // Create toast
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');

            // Click to dismiss
            toast.style.cursor = 'pointer';
            toast.addEventListener('click', () => cleanup());

            // Emoji icon and message
            toast.innerHTML = `<span style="margin-right: 0.5rem;">${icons[type] || ''}</span>${message}`;

            // Basic styles
            Object.assign(toast.style, {
                backgroundColor: '#003764',
                color: '#fff',
                padding: '1rem 1.5rem',
                borderRadius: '5px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                opacity: '0',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                transform: 'translateY(-20px)',
                pointerEvents: 'auto',
                maxWidth: '80%',
                fontFamily: 'sans-serif',
                fontSize: '14px',
                lineHeight: '1.4',
                background: {
                    success: '#1d4ed8',
                    error: '#f44336',
                    warning: '#ff9800',
                    info: '#4caf50'
                }[type] || '#333'
            });

            container.appendChild(toast);

            // Trigger animation
            requestAnimationFrame(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateY(0)';
            });

            // Cleanup
            let fadeTimeout, removeTimeout;
            const cleanup = () => {
                clearTimeout(fadeTimeout);
                clearTimeout(removeTimeout);
                toast.remove();
            };

            fadeTimeout = setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-20px)';
            }, duration);

            removeTimeout = setTimeout(cleanup, duration + 500);

            // Remove on page hide
            const handleVisibilityChange = () => {
                if (document.hidden) {
                    cleanup();
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                }
            };
            document.addEventListener('visibilitychange', handleVisibilityChange);

            return cleanup;
        };
