import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>{t("contact.title")} | Business Legend</title>
        <meta name="description" content={t("contact.subtitle")} />
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              {t("contact.subtitle")}
            </p>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company">{t("contact.company")}</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  {t("contact.send")}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">{t("contact.or")}</p>
                <Button variant="outline" className="w-full">
                  {t("contact.scheduleCall")}
                </Button>
              </div>
            </Card>

            <div className="text-center mt-8 text-muted-foreground">
              <p>contact@business-legend.co</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
