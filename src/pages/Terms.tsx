import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-3xl">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using TechStore's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>Use of Our Service</h2>
          <h3>Eligibility</h3>
          <p>
            You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement.
          </p>

          <h3>Account Responsibility</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
          </p>

          <h2>Products and Services</h2>
          <h3>Product Information</h3>
          <p>
            We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
          </p>

          <h3>Pricing and Availability</h3>
          <p>
            All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. Product availability may vary and is not guaranteed.
          </p>

          <h2>Orders and Payment</h2>
          <h3>Order Acceptance</h3>
          <p>
            We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing or product information, or suspected fraudulent activity.
          </p>

          <h3>Payment Terms</h3>
          <p>
            Payment must be made at the time of order. We accept major credit cards, PayPal, and other payment methods as indicated. You represent that you have the legal right to use any payment method provided.
          </p>

          <h2>Shipping and Delivery</h2>
          <p>
            Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs processes. Risk of loss and title for items pass to you upon delivery to the carrier.
          </p>

          <h2>Returns and Refunds</h2>
          <p>
            Our return and refund policy is detailed on our Returns page. Please review that policy carefully before making a purchase.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of TechStore or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, TechStore shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless TechStore and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the new Terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p>
            Email: legal@techstore.com<br />
            Phone: +1 (555) 123-4567<br />
            Address: 123 Tech Street, San Francisco, CA 94102
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
