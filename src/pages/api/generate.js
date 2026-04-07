export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prompt } = req.body

  // For now, return mock response
  // Later you'll add OpenAI API here
  
  res.status(200).json({
    caption: Generated content for: ${prompt}\n\nThis is your AI-generated caption! 🚀,
    hashtags: '#AI #Content #SocialMedia',
    strategy: 'Post at 6 PM for best engagement'
  })
}
