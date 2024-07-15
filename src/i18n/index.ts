import { useEffect, useState } from "react"
import { useAppStore, useLocaleStore } from "~/stores/index"
import { useErrorStore } from "~/stores/state-handlers"
import { flattenObject } from "../utils"
import defaultLocale from "./json/en-US.json"

const LocalesData = {
  "en-US": () => import("./json/en-US.json"),
  "de-DE": () => import("./json/de-DE.json"),
  "fr-FR": () => import("./json/fr-FR.json"),
  // add more locales here
}
/**
 * Custom hook to load messages based on the selected locale.
 *
 * @return {Object} An object containing messages and selectedLocale.
 */
export const useLocaleLoader = () => {
  const { selectedLocale } = useLocaleStore()
  const { setIsPending } = useAppStore()
  const { setError } = useErrorStore()
  const [messages, setMessages] = useState(flattenObject(defaultLocale))

  useEffect(() => {
    setIsPending(true)
    LocalesData[selectedLocale]()
      .then(data => setMessages(flattenObject(data.default)))
      .catch(error => setError(error))
      .finally(() => {
        setIsPending(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocale])
  return { messages, selectedLocale }
}
