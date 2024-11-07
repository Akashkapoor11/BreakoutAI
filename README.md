# BreakoutAI
AI DATA ENRICHMENT DASHBOARD
  This project is an AI-powered dashboard that enriches datasets by performing web searches and extracting specific information for each entity in a chosen column. It uses OpenAI's GPT-3.5-turbo model to parse    
  web results based on user queries and format the extracted data in a structured output.

FEATURES
Upload CSV files or connect to Google Sheets
Select primary column for entity list
Custom prompt input for information retrieval
AI-powered web search and information extraction
View and download enriched results

SETUP
  1)Clone the repository:
    git clone https://github.com/Akashkapoor11/ai-data-enrichment.git
    cd ai-data-enrichment
  2)Install dependencies:
    npm install
  3)Create a .env.local file in the root directory and add your OpenAI API key:
    OPENAI_API_KEY=your_api_key_here
  4)Run the development server:
    npm run dev
  5)Open http://localhost:3000 in your browser to view the dashboard.

USAGE
  *Upload a CSV file or enter a Google Sheet URL.
  *Select the primary column containing the list of entities.
  *Enter a custom prompt for information retrieval.
  *Click the "Search" button to start the enrichment process.
  *View the results in the table and download them if needed.
  
TECHNOLOGIES USED
  Next.js
  React
  OpenAI API
  shadcn/ui components
  CSV parsing (csv-parser)
