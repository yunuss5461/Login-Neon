// ===================================
// CART FUNCTIONALITY
// ===================================
class ShoppingCart {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateCartCount();
    }

    bindEvents() {
        // Cart toggle
        document.querySelector('.cart-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleCart();
        });

        // Close cart
        document.querySelector('.close-cart')?.addEventListener('click', () => {
            this.closeCart();
        });

        // Cart overlay close
        document.querySelector('.cart-overlay')?.addEventListener('click', () => {
            this.closeCart();
        });

        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addToCart(e.target);
            });
        });

        // Quantity buttons
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.updateQuantity(e.target);
            });
        });
    }

    toggleCart() {
        const sidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('cartOverlay');
        
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        const sidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('cartOverlay');
        
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    addToCart(button) {
        const productCard = button.closest('.product-card');
        const title = productCard.querySelector('.product-title').textContent;
        const price = productCard.querySelector('.current-price').textContent;
        const category = productCard.querySelector('.product-category').textContent;
        const size = productCard.querySelector('.size-select').value;

        const item = {
            id: Date.now(),
            title,
            price,
            category,
            size,
            quantity: 1
        };

        this.items.push(item);
        this.updateCartCount();
        this.updateCartDisplay();
        this.showNotification('Ürün sepete eklendi!');
        
        // Animate button
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    updateQuantity(button) {
        const isIncrease = button.textContent === '+';
        const quantitySpan = button.parentElement.querySelector('span');
        let quantity = parseInt(quantitySpan.textContent);

        if (isIncrease) {
            quantity++;
        } else if (quantity > 1) {
            quantity--;
        }

        quantitySpan.textContent = quantity;
        this.updateCartTotal();
    }

    updateCartCount() {
        const count = this.items.length;
        const countElement = document.querySelector('.cart-count');
        if (countElement) {
            countElement.textContent = count;
        }
    }

    updateCartDisplay() {
        // This would update the cart items display
        this.updateCartTotal();
    }

    updateCartTotal() {
        // Calculate and update cart total
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;

        cartItems.forEach(item => {
            const priceText = item.querySelector('.item-price').textContent;
            const price = parseInt(priceText.replace(/[^\d]/g, ''));
            const quantity = parseInt(item.querySelector('.item-quantity span').textContent);
            total += price * quantity;
        });

        const totalElements = document.querySelectorAll('.total-line.total span:last-child');
        totalElements.forEach(el => {
            el.textContent = total + ' TL';
        });
    }

    showNotification(message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-gold);
            color: var(--dark-brown);
            padding: 15px 20px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ===================================
// WISHLIST FUNCTIONALITY
// ===================================
class Wishlist {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.btn-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleWishlist(e.target);
            });
        });
    }

    toggleWishlist(button) {
        const icon = button.querySelector('i');
        const isActive = button.classList.contains('active');

        if (isActive) {
            button.classList.remove('active');
            icon.className = 'far fa-heart';
            this.showNotification('Favorilerden kaldırıldı');
        } else {
            button.classList.add('active');
            icon.className = 'fas fa-heart';
            this.showNotification('Favorilere eklendi');
        }

        // Animate
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #E74C3C;
            color: white;
            padding: 15px 20px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
}

// ===================================
// PRODUCT QUICK VIEW
// ===================================
class ProductQuickView {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showQuickView(e.target);
            });
        });
    }

    showQuickView(button) {
        const productCard = button.closest('.product-card');
        const title = productCard.querySelector('.product-title').textContent;
        const price = productCard.querySelector('.current-price').textContent;
        const category = productCard.querySelector('.product-category').textContent;

        // Create modal (simplified version)
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;

        modalContent.innerHTML = `
            <h2 style="color: var(--dark-brown); margin-bottom: 10px;">${title}</h2>
            <p style="color: var(--primary-gold); margin-bottom: 20px;">${category}</p>
            <div style="height: 200px; background: linear-gradient(135deg, var(--cream), var(--primary-gold)); border-radius: 15px; margin-bottom: 20px;"></div>
            <p style="color: #666; margin-bottom: 20px;">Bu premium bal ürünü doğal ve organik üretim yöntemleriyle hazırlanmıştır. Sağlıklı ve lezzetli bir seçim için ideal.</p>
            <div style="font-size: 2rem; font-weight: 600; color: var(--dark-brown); margin-bottom: 30px;">${price}</div>
            <button onclick="this.parentElement.parentElement.remove(); document.body.style.overflow = ''" style="background: var(--primary-gold); color: var(--dark-brown); border: none; padding: 12px 24px; border-radius: 25px; font-weight: 500; cursor: pointer;">Kapat</button>
        `;

        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 100);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                modalContent.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    document.body.removeChild(modal);
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    }
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
class Search {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const searchInput = document.querySelector('.search-bar input');
        const searchButton = document.querySelector('.search-bar button');

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(searchInput.value);
                }
            });

            searchInput.addEventListener('input', (e) => {
                this.showSuggestions(e.target.value);
            });
        }

        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.performSearch(searchInput.value);
            });
        }
    }

    performSearch(query) {
        if (query.trim()) {
            console.log('Searching for:', query);
            // Here you would implement actual search functionality
            this.showNotification(`"${query}" için arama yapılıyor...`);
        }
    }

    showSuggestions(query) {
        // Simple suggestion system
        const suggestions = [
            'Çiçek Balı',
            'Kestane Balı', 
            'Çam Balı',
            'Lavanta Balı',
            'Organik Bal',
            'Premium Bal'
        ];

        if (query.length > 1) {
            const filtered = suggestions.filter(item => 
                item.toLowerCase().includes(query.toLowerCase())
            );
            
            // You could show these suggestions in a dropdown
            console.log('Suggestions:', filtered);
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--dark-brown);
            color: white;
            padding: 15px 20px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
}

// ===================================
// NEWSLETTER FUNCTIONALITY
// ===================================
class Newsletter {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const form = document.querySelector('.newsletter-form');
        const input = form?.querySelector('input');
        const button = form?.querySelector('button');

        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.subscribe(input.value);
            });
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.subscribe(input.value);
                }
            });
        }
    }

    subscribe(email) {
        if (this.validateEmail(email)) {
            this.showNotification('✓ Başarıyla abone oldunuz!', 'success');
            document.querySelector('.newsletter-form input').value = '';
        } else {
            this.showNotification('⚠ Geçerli bir e-posta adresi giriniz', 'error');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? 'var(--forest-green)' : '#E74C3C';
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 20px;
            border-radius: 25px;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// ===================================
// SMOOTH SCROLLING
// ===================================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    this.scrollToElement(href);
                }
            });
        });
    }

    scrollToElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = element.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ===================================
// LOADING ANIMATIONS
// ===================================
class LoadingAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.animateOnScroll();
        this.animateOnLoad();
    }

    animateOnLoad() {
        // Animate hero section on load
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroButtons = document.querySelector('.hero-buttons');

        if (heroTitle) {
            setTimeout(() => {
                heroSubtitle.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 200);
            setTimeout(() => {
                heroTitle.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 400);
            setTimeout(() => {
                heroDescription.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 600);
            setTimeout(() => {
                heroButtons.style.animation = 'fadeInUp 0.6s ease forwards';
            }, 800);
        }
    }

    animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe elements
        document.querySelectorAll('.feature-card, .category-card, .product-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
}

// ===================================
// MOBILE MENU
// ===================================
class MobileMenu {
    constructor() {
        this.init();
    }

    init() {
        this.createMobileMenuButton();
        this.bindEvents();
    }

    createMobileMenuButton() {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar .nav-content');
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.style.cssText = `
                display: none;
                background: none;
                border: none;
                font-size: 20px;
                color: var(--dark-brown);
                cursor: pointer;
                padding: 10px;
            `;
            
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
            }

            navbar.appendChild(mobileMenuBtn);
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleResize() {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (window.innerWidth <= 768) {
            if (mobileBtn) {
                mobileBtn.style.display = 'block';
            }
        } else {
            if (mobileBtn) {
                mobileBtn.style.display = 'none';
            }
        }
    }
}

// ===================================
// ADD CSS ANIMATIONS
// ===================================
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }

        .hero-subtitle,
        .hero-title,
        .hero-description,
        .hero-buttons {
            opacity: 0;
            transform: translateY(30px);
        }

        .feature-card:hover .feature-icon {
            animation: pulse 0.6s ease;
        }

        .product-card:hover {
            animation: pulse 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// INITIALIZE EVERYTHING
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Add animation styles
    addAnimationStyles();

    // Initialize all classes
    new ShoppingCart();
    new Wishlist();
    new ProductQuickView();
    new Search();
    new Newsletter();
    new SmoothScroll();
    new LoadingAnimations();
    new MobileMenu();

    // Additional event listeners
    setupAdditionalEvents();
});

function setupAdditionalEvents() {
    // Category card clicks
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            console.log(`Navigating to ${title} category`);
            // Here you would navigate to category page
        });
    });

    // Product size change animation
    document.querySelectorAll('.size-select').forEach(select => {
        select.addEventListener('change', (e) => {
            e.target.style.transform = 'scale(1.05)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 200);
        });
    });

    // Navbar dropdown functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', () => {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
        });

        dropdown.addEventListener('mouseleave', () => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateY(-10px)';
        });
    });

    // Scroll to top on logo click
    document.querySelector('.logo')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Performance optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Add scroll-based animations or effects here
}, 100));

console.log('🍯 BalSepeti E-ticaret sitesi başarıyla yüklendi!');