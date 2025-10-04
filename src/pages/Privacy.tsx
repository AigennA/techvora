import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-3xl">
          <h2>Introduction</h2>
          <p>
            TechStore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you provide to us, including:</p>
          <ul>
            <li>Name and contact information (email, phone number, address)</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Order and shipping details</li>
            <li>Customer service communications</li>
          </ul>

          <h3>Automatic Information</h3>
          <p>We automatically collect certain information when you visit our website:</p>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Website usage data and analytics</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who help us operate our business</li>
            <li>Payment processors for transaction processing</li>
            <li>Shipping companies for order fulfillment</li>
            <li>Law enforcement when required by law</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze website traffic, and for marketing purposes. You can control cookie settings through your browser preferences.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: privacy@techstore.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Tech Street, San Francisco, CA 94102
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
