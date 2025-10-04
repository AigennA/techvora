import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            {t("cookiePolicy")}
          </h1>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("whatAreCookies")}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  {t("cookiesDesc")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("howWeUseCookies")}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("essentialCookies")}</h3>
                  <p>{t("essentialCookiesDesc")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("analyticsCookies")}</h3>
                  <p>{t("analyticsCookiesDesc")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t("marketingCookies")}</h3>
                  <p>{t("marketingCookiesDesc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("managingCookies")}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{t("managingCookiesDesc")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("updates")}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{t("cookiePolicyUpdates")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
