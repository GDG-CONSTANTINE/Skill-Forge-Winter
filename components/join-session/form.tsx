"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CheckCircle, Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useRegister from "@/hooks/useRegister"
import { DialogClose } from "../ui/dialog"

/* -------------------------------------------------------------------------- */
/*                                   Schema                                   */
/* -------------------------------------------------------------------------- */

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  univ: z.string().min(2, {
    message: "University name must be at least 2 characters.",
  }),
  prvExperience: z.string().min(2, {
    message: "Please select your experience level.",
  }),
})

export type FormValues = z.infer<typeof formSchema>

/* -------------------------------------------------------------------------- */
/*                              Experience Options                             */
/* -------------------------------------------------------------------------- */

const experienceOptions = [
  { label: "None", value: "none" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Expert", value: "expert" },
] as const

/* -------------------------------------------------------------------------- */
/*                              Registration Form                              */
/* -------------------------------------------------------------------------- */

function RegistrationForm({ setOpen }: { setOpen?: (open: boolean) => void }) {
  const [isRegistered, setIsRegistered] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      univ: "",
      prvExperience: "none",
    },
  })

  const { mutate: register, isPending } = useRegister()

  function onSubmit(values: FormValues) {
    register(values, {
      onSuccess: () => {
        setIsRegistered(true)
        form.reset()

        if (setOpen) {
          setTimeout(() => setOpen(false), 1500)
        }
      },
    })
  }

  /* ----------------------------- Success State ----------------------------- */

  if (isRegistered) {
    return (
      <div className="flex flex-col items-center gap-4 pt-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <CheckCircle className="size-24 text-green-700" />
          <h2 className="text-xl font-semibold text-green-700">Registered Successfully</h2>
        </div>
        <DialogClose asChild className="mt-aut" onClick={() => setIsRegistered(false)}>
          <Button variant="secondary" className="mt-4 text-primary w-full">
            Close
          </Button>
        </DialogClose>
      </div>
    )
  }

  /* ------------------------------- Form UI -------------------------------- */

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-2">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+213 *** *** ***" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* University */}
        <FormField
          control={form.control}
          name="univ"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University / School</FormLabel>
              <FormControl>
                <Input placeholder="your university or school" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Experience (Tap buttons) */}
        <FormField
          control={form.control}
          name="prvExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Experience</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2">
                  {experienceOptions.map(option => {
                    const isActive = field.value === option.value

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => field.onChange(option.value)}
                        className={`
                          px-4 py-2 rounded-md border text-sm transition
                          ${isActive
                            ? "bg-secondary text-primary border-secondary"
                            : "bg-background hover:bg-muted border-muted"
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    )
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center gap-2">
              <Loader className="size-5 animate-spin" />
              Registering...
            </div>
          ) : (
            "Join Session"
          )}
        </Button>
      </form>
    </Form>
  )
}

export default RegistrationForm
