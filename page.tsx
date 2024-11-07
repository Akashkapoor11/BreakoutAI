'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null)
  const [sheetUrl, setSheetUrl] = useState('')
  const [primaryColumn, setPrimaryColumn] = useState('')
  const [prompt, setPrompt] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    // TODO: Implement the API call to process the data
    // This is where we'll send the file or sheet URL, primary column, and prompt to our backend

    setIsLoading(false)
  }

  const handleDownload = () => {
    // TODO: Implement the download functionality
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Web Search Agent</h1>
      <Card>
        <CardHeader>
          <CardTitle>Data Input</CardTitle>
          <CardDescription>Upload a CSV file or provide a Google Sheet URL</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Upload CSV</Label>
              <Input id="file-upload" type="file" accept=".csv" onChange={handleFileUpload} />
            </div>
            <div>
              <Label htmlFor="sheet-url">Google Sheet URL</Label>
              <Input
                id="sheet-url"
                type="url"
                placeholder="https://docs.google.com/spreadsheets/d/..."
                value={sheetUrl}
                onChange={(e) => setSheetUrl(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="primary-column">Primary Column</Label>
              <Input
                id="primary-column"
                placeholder="e.g., Company Name"
                value={primaryColumn}
                onChange={(e) => setPrimaryColumn(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="prompt">Custom Prompt</Label>
              <Textarea
                id="prompt"
                placeholder="Enter your custom prompt for information retrieval..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Process Data'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Entity</TableHead>
                  <TableHead>Extracted Information</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.entity}</TableCell>
                    <TableCell>{result.information}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button onClick={handleDownload}>Download Results</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}