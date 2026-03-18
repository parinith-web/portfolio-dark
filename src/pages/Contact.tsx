import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${photographerInfo.name} for internships, collaborations, and software projects. ${photographerInfo.availability}`}
      />

      <div className="min-h-screen">
        <section className="border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0.8, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="mb-4 text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Get in Touch</h1>
              <p className="text-lg font-light tracking-wide text-muted-foreground md:text-xl">Let&apos;s build something meaningful</p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div className="space-y-6" initial={{ opacity: 0.8, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div className="space-y-3">
                  <h2 className="text-3xl font-light tracking-wide md:text-4xl">Send a Message</h2>
                  <p className="font-light text-muted-foreground">
                    Fill out the form below or email me directly. {photographerInfo.availability}
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div className="space-y-8" initial={{ opacity: 0.8, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                <div className="space-y-3">
                  <h2 className="text-3xl font-light tracking-wide md:text-4xl">Contact Information</h2>
                  <p className="font-light text-muted-foreground">Prefer direct outreach? Here&apos;s the fastest way to reach me.</p>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-sm bg-accent p-3">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                      <a href={`mailto:${photographerInfo.email}`} className="text-base font-light transition-colors hover:text-muted-foreground md:text-lg">
                        {photographerInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-sm bg-accent p-3">
                      <Phone className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                      <a href={`tel:${photographerInfo.phone}`} className="text-base font-light transition-colors hover:text-muted-foreground md:text-lg">
                        {photographerInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-sm bg-accent p-3">
                      <MapPin className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                      <p className="text-base font-light md:text-lg">{photographerInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
