import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setResult(data)
    } catch (err) {
      alert('Error generating content')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-dark p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Kyro AI
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your content idea..."
          className="w-full h-32 p-4 rounded-xl bg-gray-800 text-white mb-4"
        />
        
        <button
          onClick={generate}
          disabled={loading}
          className="w-full py-3 bg-primary rounded-xl font-bold hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Content'}
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-800 rounded-xl">
            <h3 className="text-primary font-bold mb-2">Result:</h3>
            <p className="text-white">{result.caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}
