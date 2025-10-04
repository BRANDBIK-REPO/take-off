// ============================================
// TAKEOFF COMMUNITY FORM - Next.js with shadcn/ui
// ============================================

// Installation:
// npx shadcn-ui@latest add form input textarea select button
// npm install react-hook-form zod @hookform/resolvers

// File: components/TakeOffForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Zod validation schema
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  email: z.email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  business: z.string().min(1, {
    message: "Please select your business type",
  }),
  message: z
    .string()

    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function JoinTakeOffForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      business: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);

    // try {
    //   // Example API call
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     alert("Form submitted successfully!");
    //     form.reset();
    //   } else {
    //     alert("Something went wrong. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("Failed to submit form. Please try again.");
    // }
  };

  return (
    <div className="max-w-2xl mx-auto md:px-8 bg-white">
      <div className="mb-8">
        <p className="text-base text-[#506767] mb-2">Ready for TakeOff?</p>
        <h1 className="text-3xl md:text-4xl  font-serif mb-7">
          Join the <span className="italic font-serif">TakeOff Community</span>
        </h1>
        <p className="text-base text-[#506767]">
          Complete the form below, and we&apos;ll schedule a consultation to
          discuss your needs
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your full name*"
                    className="border-gray-300 focus:border-blue-900 focus:ring-blue-900 h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email address*"
                    className="border-gray-300 focus:border-blue-900 focus:ring-blue-900 h-12"
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
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone number*"
                    className="border-gray-300 focus:border-blue-900 focus:ring-blue-900 h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="business"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full !h-12">
                      <SelectValue placeholder="Your business" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="small-business">
                      Small Business
                    </SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here....."
                    className="min-h-[130px] border-gray-300 focus:border-blue-900 focus:ring-blue-900 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#215273] hover:bg-[#163852] text-white py-6 text-base font-medium mt-3 "
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "Submitting..."
              : "Submit your requirements"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
