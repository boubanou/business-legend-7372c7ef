import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactForm } from "@/hooks/useContactForm";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { t } = useTranslation();
  const { formData, setFormData, isSubmitting, handleSubmit } = useContactForm(() => onOpenChange(false));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t("contact.title")}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="dialog-name">{t("contact.name")}</Label>
            <Input
              id="dialog-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="dialog-email">{t("contact.email")}</Label>
            <Input
              id="dialog-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="dialog-company">{t("contact.company")}</Label>
            <Input
              id="dialog-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="dialog-message">{t("contact.message")}</Label>
            <Textarea
              id="dialog-message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.send")}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-muted-foreground mb-3 text-sm">{t("contact.or")}</p>
          <Button variant="outline" className="w-full" asChild>
            <a href="https://calendly.com/greg-nlgconsulting/15min" target="_blank" rel="noopener noreferrer">
              {t("contact.scheduleCall")}
            </a>
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          <p>contact@businesslegend.co</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(ContactFormDialog);
