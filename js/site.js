// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// Feature detail modals
const featureDetails = {
    'Global & Granular Control': {
        title: 'Global & Granular Control',
        content: `
            <p>GroupGuard Local gives you complete flexibility in how you manage local group memberships:</p>
            <ul>
                <li><strong>Global Policies:</strong> Apply membership rules across all computers in your domain with a single policy</li>
                <li><strong>Computer Groups:</strong> Organize computers by location, department, or function and apply targeted policies</li>
                <li><strong>Individual Computer Control:</strong> Override global settings for specific computers when needed</li>
                <li><strong>All Local Groups:</strong> Manage any Windows local group, not just Administrators</li>
                <li><strong>Scale Effortlessly:</strong> From 10 to 10,000 computers, the interface stays simple</li>
            </ul>
            <p>This flexible approach means you can match your real-world organizational structure without compromise.</p>
        `
    },
    'Time-Based Access': {
        title: 'Time-Based Access',
        content: `
            <p>Set it and forget it—temporary access that expires automatically:</p>
            <ul>
                <li><strong>Automatic Expiration:</strong> Set an end date and time, and access is removed automatically</li>
                <li><strong>Perfect for Contractors:</strong> Grant access for the duration of a project without manual cleanup</li>
                <li><strong>Break-Glass Scenarios:</strong> Provide emergency access that expires after a defined period</li>
                <li><strong>Compliance Made Easy:</strong> Auditors love time-limited access with automatic revocation</li>
                <li><strong>No Orphaned Accounts:</strong> Never worry about forgetting to remove temporary access</li>
            </ul>
            <p>Time-based access dramatically reduces administrative overhead while improving security posture.</p>
        `
    },
    'Complete Audit Trail': {
        title: 'Complete Audit Trail',
        content: `
            <p>Every change is logged, timestamped, and ready for compliance reporting:</p>
            <ul>
                <li><strong>Who:</strong> Track which administrator made each change</li>
                <li><strong>What:</strong> Record exactly what was changed (user added/removed, group modified)</li>
                <li><strong>When:</strong> Precise timestamps for all operations</li>
                <li><strong>Where:</strong> Computer-level tracking shows exactly where changes were applied</li>
                <li><strong>Why:</strong> Optional change reason field for context</li>
            </ul>
            <p>Generate compliance reports for SOX, HIPAA, PCI-DSS, or any other regulatory framework with ease.</p>
        `
    },
    'Active Directory Native': {
        title: 'Active Directory Native',
        content: `
            <p>Works seamlessly with your existing Active Directory infrastructure:</p>
            <ul>
                <li><strong>Use Existing AD Groups:</strong> Grant local access to existing AD security groups</li>
                <li><strong>No Schema Changes:</strong> Deploy without modifying your AD schema</li>
                <li><strong>Familiar Workflow:</strong> IT staff can use GroupGuard immediately without training</li>
                <li><strong>Multi-Forest Support:</strong> Manage computers across multiple AD forests</li>
                <li><strong>Leverages Group Policy:</strong> Uses standard Windows deployment methods</li>
            </ul>
            <p>Integration is seamless, deployment is fast, and your team already knows how to use it.</p>
        `
    }
};

// Add modal HTML to page
document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
        <div id="featureModal" class="modal">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <h2 id="modalTitle"></h2>
                <div id="modalBody"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('featureModal');
    const modalClose = document.querySelector('.modal-close');

    // Close modal handlers
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle "Learn More" clicks in solution cards
    document.querySelectorAll('.solution-card .learn-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.solution-card');
            const title = card.querySelector('h3').textContent;

            if (featureDetails[title]) {
                document.getElementById('modalTitle').textContent = featureDetails[title].title;
                document.getElementById('modalBody').innerHTML = featureDetails[title].content;
                modal.style.display = 'block';
            }
        });
    });
});

// Video play button
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playVideo');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Video player would open here. In production, this would load a video from your hosting platform (YouTube, Vimeo, or self-hosted).');
            // In production, you would replace this with:
            // const videoContainer = document.querySelector('.video-placeholder');
            // videoContainer.innerHTML = '<iframe src="YOUR_VIDEO_URL" frameborder="0" allowfullscreen></iframe>';
        });
    }
});

// Demo form submission
document.addEventListener('DOMContentLoaded', function() {
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // In production, send this to your backend
            console.log('Demo request submitted:', data);

            // Show success message
            this.innerHTML = `
                <div class="form-success">
                    <h3>✓ Thank You!</h3>
                    <p>Your demo request has been received. Our team will contact you within 1 business day to schedule your personalized demo.</p>
                    <a href="#" class="btn btn-primary">Back to Home</a>
                </div>
            `;
        });
    }

    const trialForm = document.getElementById('trialForm');
    if (trialForm) {
        trialForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // In production, send this to your backend
            console.log('Trial signup submitted:', data);

            // Show success message
            this.innerHTML = `
                <div class="form-success">
                    <h3>✓ Welcome to GroupGuard Local!</h3>
                    <p>Your trial account is being created. You'll receive an email within 5 minutes with your login credentials and installation instructions.</p>
                    <p><strong>Next steps:</strong></p>
                    <ol>
                        <li>Check your email for login credentials</li>
                        <li>Download the installer</li>
                        <li>Follow our quick-start guide</li>
                    </ol>
                    <a href="#" class="btn btn-primary">Back to Home</a>
                </div>
            `;
        });
    }
});

// Datasheet download
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.download-datasheet').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // In production, this would trigger an actual PDF download
            alert('In production, this would download the GroupGuard Local product datasheet PDF.\n\nThe PDF would include:\n- Technical specifications\n- Feature details\n- System requirements\n- Pricing information\n- Case studies');

            // Production code would be:
            // window.location.href = '/downloads/groupguard-local-datasheet.pdf';
        });
    });
});
