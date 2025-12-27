import { FormValues } from "@/components/join-session/form"
import { useMutation } from "@tanstack/react-query"

function useRegister() {
  return useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error("Registration failed")
      }

      return response.json()
    }
  })
}

export default useRegister
