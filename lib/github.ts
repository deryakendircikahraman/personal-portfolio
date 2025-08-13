interface GitHubActivity {
  totalContributions: number
  contributions: Array<{
    date: string
    count: number
  }>
  recentRepos: Array<{
    name: string
    description: string
    language: string
    stars: number
    url: string
  }>
}

export async function getGitHubActivity(username: string): Promise<GitHubActivity> {
  try {
    // GitHub GraphQL API endpoint
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                totalContributions
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
              repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
                nodes {
                  name
                  description
                  primaryLanguage {
                    name
                    color
                  }
                  stargazerCount
                  url
                }
              }
            }
          }
        `,
        variables: { username }
      })
    })

    if (!response.ok) {
      throw new Error('GitHub API request failed')
    }

    const data = await response.json()
    const user = data.data.user

    // Process contributions
    const contributions = user.contributionsCollection.contributionCalendar.weeks
      .flatMap((week: any) => week.contributionDays)
      .map((day: any) => ({
        date: day.date,
        count: day.contributionCount
      }))

    // Process recent repositories
    const recentRepos = user.repositories.nodes.map((repo: any) => ({
      name: repo.name,
      description: repo.description || 'No description available',
      language: repo.primaryLanguage?.name || 'Unknown',
      stars: repo.stargazerCount,
      url: repo.url
    }))

    return {
      totalContributions: user.contributionsCollection.totalContributions,
      contributions,
      recentRepos
    }
  } catch (error) {
    console.error('Error fetching GitHub activity:', error)
    
    // Fallback data
    return {
      totalContributions: 1274,
      contributions: [],
      recentRepos: [
        {
          name: 'personal-portfolio',
          description: 'Modern Next.js portfolio with Sanity CMS integration',
          language: 'TypeScript',
          stars: 0,
          url: 'https://github.com/deryakendircikahraman/personal-portfolio'
        },
        {
          name: 'backspace-coding-agent',
          description: 'AI-powered coding agent for GitHub PR generation',
          language: 'TypeScript',
          stars: 12,
          url: 'https://github.com/deryakendircikahraman/backspace-coding-agent'
        },
        {
          name: 'aven-ai-support',
          description: 'RAG-powered AI support assistant with voice capabilities',
          language: 'TypeScript',
          stars: 8,
          url: 'https://github.com/deryakendircikahraman/aven-ai-support'
        }
      ]
    }
  }
}

// Simple GitHub stats without API token
export async function getGitHubStats(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (!response.ok) throw new Error('Failed to fetch GitHub stats')
    
    const data = await response.json()
    return {
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatarUrl: data.avatar_url,
      profileUrl: data.html_url
    }
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return {
      publicRepos: 15,
      followers: 42,
      following: 38,
      avatarUrl: 'https://github.com/deryakendircikahraman.png',
      profileUrl: 'https://github.com/deryakendircikahraman'
    }
  }
} 