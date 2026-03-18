import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters' }).max(100, { message: 'Name must be less than 100 characters' }),
  email: z.string().trim().email({ message: 'Please enter a valid email address' }).max(255, { message: 'Email must be less than 255 characters' }),
  projectType: z.enum(['internship', 'collaboration', 'project'], {
    required_error: 'Please select a project type',
  }),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters' }).max(1000, { message: 'Message must be less than 1000 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`New ${data.projectType} inquiry from ${data.name}`);
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nType: ${data.projectType}\n\n${data.message}`);

      window.location.href = `mailto:parinithreddymavurapu@gmail.com?subject=${subject}&body=${body}`;
      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      form.setError('root', {
        message: 'Failed to prepare your message. Please email directly instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="space-y-4 rounded-sm border border-border bg-accent p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
          <CheckCircle2 className="mx-auto size-16 text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">Draft Ready</h3>
        <p className="font-light leading-relaxed text-muted-foreground">
          Your email client should open with the message pre-filled and ready to send.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" className="font-light" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" className="font-light" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="z-50 bg-popover">
                  <SelectItem value="internship" className="font-light">Internship</SelectItem>
                  <SelectItem value="collaboration" className="font-light">Collaboration</SelectItem>
                  <SelectItem value="project" className="font-light">Project</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about the role, project, or collaboration..."
                  className="min-h-32 resize-none font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm font-light text-destructive">{form.formState.errors.root.message}</div>
        )}

        <Button type="submit" className="w-full py-6 text-base font-light tracking-wide" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Preparing...
            </>
          ) : (
            'Open Email Draft'
          )}
        </Button>
      </form>
    </Form>
  );
}
