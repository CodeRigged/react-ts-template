import { useEffect, useState } from "react"
import { useAppStore, useLocaleStore } from "~/stores/index"
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
  const { setIsPending, setError } = useAppStore()
  const [messages, setMessages] = useState(flattenObject(defaultLocale))

  useEffect(() => {
    setIsPending(true)
    LocalesData[selectedLocale]()
      .then(data => setMessages(flattenObject(data.default)))
      .catch(error => setError(error))
      .finally(() => {
        setIsPending(false)
      })
  }, [selectedLocale, setIsPending, setError])
  return { messages, selectedLocale }
}
