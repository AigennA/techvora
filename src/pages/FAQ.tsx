import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Find answers to common questions about our products, shipping, returns, and more.
        </p>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>
                Standard shipping typically takes 3-5 business days within the United States. Express shipping (1-2 days) and overnight shipping options are also available. International shipping can take 7-14 business days depending on your location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy on most items. Items must be unused and in original packaging. Contact our customer service team to initiate a return. Refunds are processed within 5-7 business days after we receive your return.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes! We ship to over 100 countries worldwide. International shipping costs vary by destination. Please note that international customers are responsible for customs duties and taxes in their country.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or through the carrier's tracking system. You can also view your order status in your account dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Are your products authentic?</AccordionTrigger>
              <AccordionContent>
                Yes, all our products are 100% authentic and sourced directly from authorized distributors and manufacturers. We guarantee the authenticity of every product we sell.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you offer warranty on products?</AccordionTrigger>
              <AccordionContent>
                Most of our products come with a manufacturer's warranty. The warranty period varies by product and manufacturer. Details about warranty coverage can be found on individual product pages or by contacting customer support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How can I cancel or modify my order?</AccordionTrigger>
              <AccordionContent>
                If you need to cancel or modify your order, please contact us immediately at support@techstore.com. We'll do our best to accommodate your request if the order hasn't been processed or shipped yet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you offer bulk or corporate discounts?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer special pricing for bulk orders and corporate purchases. Please contact our business sales team at business@techstore.com with your requirements for a custom quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
              <AccordionContent>
                You can reach our customer support team via email at support@techstore.com, by phone at +1 (555) 123-4567, or through our contact form. Our support hours are Monday-Friday, 9am-6pm EST.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
