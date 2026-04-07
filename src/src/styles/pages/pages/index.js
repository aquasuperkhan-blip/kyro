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
      alert('Error!')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
        Kyro AI
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your idea..."
          className="w-full h-32 p-4 rounded bg-gray-800 text-white mb-4"
        />
        
        <button
          onClick={generate}
          disabled={loading}
          className="w-full py-3 bg-blue-600 rounded font-bold text-white"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>

        {result && (
          <div className="mt-8 p-6 bg-gray-800 rounded text-white">
            <p>{result.caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}
