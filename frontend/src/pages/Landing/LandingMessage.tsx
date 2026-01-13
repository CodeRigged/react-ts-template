import { useEffect, useState } from "react"
import { useErrorStore } from "~/stores/state-handlers"
import { apiFetch } from "~/utils/api"

const LandingMessage = () => {
  const [message, setMessage] = useState<string>("")
  const { setError } = useErrorStore()

  useEffect(() => {
    apiFetch("/")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(e => setError(e))
  }, [setError])

  return message
}
export default LandingMessage
