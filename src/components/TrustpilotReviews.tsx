import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustpilotReviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent quality products! The wireless earbuds are amazing and the customer service was outstanding.",
      date: "2 days ago",
      verified: true,
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Fast delivery and great prices. My phone case arrived perfectly packaged and fits like a glove.",
      date: "1 week ago",
      verified: true,
    },
    {
      name: "Emma Williams",
      rating: 4,
      text: "Love the smart home hub! Setup was easy and it works perfectly with all my devices.",
      date: "2 weeks ago",
      verified: true,
    },
    {
      name: "James Martinez",
      rating: 5,
      text: "Best tech store I've found! Quality products at reasonable prices with excellent customer support.",
      date: "3 weeks ago",
      verified: true,
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold font-poppins">4.8</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < 5 ? "fill-green-500 text-green-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-24 h-6" viewBox="0 0 96 24" fill="none">
              <text x="0" y="18" className="font-bold text-lg" fill="currentColor">
                Trustpilot
              </text>
            </svg>
          </div>
          <p className="text-muted-foreground">Based on 2,847 reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-green-500 text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 line-clamp-4">
                  {review.text}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{review.date}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-green-600">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
