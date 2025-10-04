"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);

    // TODO: Implement API call
    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //
    //   if (response.ok) {
    //     alert("Message sent successfully!");
    //     form.reset();
    //   } else {
    //     alert("Something went wrong. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("Failed to send message. Please try again.");
    // }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#215273] mb-10">
              We love to <span className="italic font-serif">hear for you</span>
            </h2>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-6 py-8 lg:p-10 border border-border rounded"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Full Name"
                          className=" h-12 placeholder:text-[#506767]/20 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Your Phone No."
                          className=" h-12 placeholder:text-[#506767]/20 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          className=" h-12 placeholder:text-[#506767]/20 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your subject"
                          className=" h-12 placeholder:text-[#506767]/20 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Message"
                        className="h-12 placeholder:text-[#506767]/20 "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-[#215273] w-[264px]  hover:hover:bg-[var(--primary)] text-white px-8 py-6 text-base font-normal rounded-full group transition-all"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send your message
                      <ArrowRightIcon className="ml-10 w-5 h-5 group-hover:translate-x-1 fill-white transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
