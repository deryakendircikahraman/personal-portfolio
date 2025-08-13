'use client'

import { useEffect, useState } from 'react'
import { getGitHubStats } from '@/lib/github'

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  avatarUrl: string
  profileUrl: string
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const githubStats = await getGitHubStats('deryakendircikahraman')
        setStats(githubStats)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded w-32"></div>
              <div className="h-3 bg-slate-200 rounded w-24"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-6 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return null
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={stats.avatarUrl}
            alt="Derya Kendirci"
            className="w-16 h-16 rounded-full border-2 border-slate-200"
          />
          <div>
            <h3 className="text-xl font-bold text-slate-900">GitHub Activity</h3>
            <p className="text-slate-600">@deryakendircikahraman</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.publicRepos}</div>
            <div className="text-sm text-slate-600">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.followers}</div>
            <div className="text-sm text-slate-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.following}</div>
            <div className="text-sm text-slate-600">Following</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-900">Recent Activity</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">Updated personal-portfolio</div>
                <div className="text-xs text-slate-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">Pushed to backspace-coding-agent</div>
                <div className="text-xs text-slate-500">1 day ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">Starred aven-ai-support</div>
                <div className="text-xs text-slate-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="pt-4 border-t border-slate-100">
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Profile
          </a>
        </div>
      </div>
    </div>
  )
} 