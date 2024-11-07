import { useToast } from "@/components/ui/use-toast"

export default function Dashboard() {
  // ... (previous state declarations)
  const { toast } = useToast()

  // ... (previous functions)

  const handleSearch = async () => {
    if (!file && !sheetUrl) {
      toast({
        title: "Error",
        description: "Please upload a CSV file or provide a Google Sheet URL.",
        variant: "destructive",
      })
      return
    }

    if (!selectedColumn) {
      toast({
        title: "Error",
        description: "Please select a primary column.",
        variant: "destructive",
      })
      return
    }

    if (!prompt) {
      toast({
        title: "Error",
        description: "Please enter a custom prompt.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          file: file ? await file.text() : null,
          sheetUrl,
          column: selectedColumn,
          prompt,
        }),
      })

      if (!response.ok) {
        throw new Error('Search request failed')
      }

      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      console.error('Search error:', error)
      toast({
        title: "Error",
        description: "An error occurred while processing your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // ... (rest of the component)
}