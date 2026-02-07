// Simple client-side router
class Router {
    constructor() {
        this.routes = {};
        this.currentPath = '';

        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });

        document.addEventListener('DOMContentLoaded', () => {
            document.addEventListener('click', (e) => {
                if (e.target.matches('[data-route]')) {
                    e.preventDefault();
                    const path = e.target.getAttribute('href');
                    this.navigate(path);
                }
            });

            this.loadRoute(window.location.pathname);
        });
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.loadRoute(path);
    }

    loadRoute(path) {
        if (path === '' || path === '/') {
            path = '/index.html';
        }

        this.currentPath = path;
        const handler = this.routes[path];

        if (handler) {
            handler();
        }
    }
}

const router = new Router();

function navigateToService(serviceId) {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `<div style="text-align: center; padding: 100px 0;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3rem; color: var(--primary);"></i>
        </div>`;

        setTimeout(() => {
            window.location.href = `services/${serviceId}.html`;
        }, 300);
    } else {
        window.location.href = `services/${serviceId}.html`;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Router, navigateToService };
}
