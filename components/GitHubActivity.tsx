'use client'

import { useEffect, useState } from 'react'
import { getGitHubStats, getContributionData } from '@/lib/github'

interface GitHubStats {
  publicRepos: number
  followers: number
  following: number
  avatarUrl: string
  profileUrl: string
}

interface Contribution {
  date: string
  count: number
}

export function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [githubStats, contributionData] = await Promise.all([
          getGitHubStats('deryakendircikahraman'),
          getContributionData('deryakendircikahraman')
        ])
        
        setStats(githubStats)
        setContributions(contributionData)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-[#f6f8fa] hover:bg-[#e1e4e8]' // GitHub'ın commit olmayan günler rengi
    if (count <= 2) return 'bg-[#9be9a8] hover:bg-[#40c463]'
    if (count <= 4) return 'bg-[#40c463] hover:bg-[#30a14e]'
    if (count <= 6) return 'bg-[#30a14e] hover:bg-[#216e39]'
    return 'bg-[#216e39] hover:bg-[#0d1117]'
  }

  const getContributionTooltip = (date: string, count: number) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    if (count === 0) return `${formattedDate}: No contributions`
    if (count === 1) return `${formattedDate}: 1 contribution`
    return `${formattedDate}: ${count} contributions`
  }

  // Generate month labels for the last 7 weeks
  const getMonthLabels = () => {
    const months = []
    const today = new Date()
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - (i * 7))
      months.push(date.toLocaleDateString('en-US', { month: 'short' }))
    }
    
    return months
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-[#d0d7de] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 rounded w-32"></div>
              <div className="h-3 bg-slate-200 rounded w-24"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-200 rounded w-24"></div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-slate-200 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return null
  }

  return (
    <div className="bg-white rounded-xl border border-[#d0d7de] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="space-y-8">
        {/* Header - Enhanced GitHub Style */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={stats.avatarUrl}
              alt="Derya Kendirci"
              className="w-16 h-16 rounded-full border-2 border-[#d0d7de] shadow-md hover:shadow-lg transition-shadow duration-200"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#24292f] hover:text-[#0969da] transition-colors duration-200">GitHub Activity</h3>
            <p className="text-[#656d76] text-sm font-medium">@deryakendircikahraman</p>
          </div>
        </div>

        {/* Repository Count - Enhanced */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 border border-blue-100">
          <div className="text-3xl font-bold text-[#24292f] mb-1">{stats.publicRepos}</div>
          <div className="text-[#656d76] text-sm font-medium">Public repositories</div>
        </div>

        {/* GitHub-Style Contribution Graph - Enhanced */}
        <div className="space-y-6">
          {/* Title and Legend - Enhanced */}
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-[#24292f] flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {contributions.filter(c => c.count > 0).length} contributions in the last year
            </h4>
            <div className="flex items-center gap-3 text-xs text-[#656d76]">
              <span className="font-medium">Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-[#f6f8fa] rounded-sm border border-[#d0d7de] hover:scale-110 transition-transform duration-200"></div>
                <div className="w-3 h-3 bg-[#9be9a8] rounded-sm border border-[#d0d7de] hover:scale-110 transition-transform duration-200"></div>
                <div className="w-3 h-3 bg-[#40c463] rounded-sm border border-[#d0d7de] hover:scale-110 transition-transform duration-200"></div>
                <div className="w-3 h-3 bg-[#30a14e] rounded-sm border border-[#d0d7de] hover:scale-110 transition-transform duration-200"></div>
                <div className="w-3 h-3 bg-[#216e39] rounded-sm border border-[#d0d7de] hover:scale-110 transition-transform duration-200"></div>
              </div>
              <span className="font-medium">More</span>
            </div>
          </div>
          
          {/* Month Labels - Enhanced */}
          <div className="flex justify-between text-xs text-[#656d76] px-2 font-medium">
            {getMonthLabels().map((month, index) => (
              <span key={index} className="w-8 text-center hover:text-[#0969da] transition-colors duration-200">{month}</span>
            ))}
          </div>
          
          {/* Contribution Grid - Enhanced with better styling */}
          <div className="grid grid-cols-7 gap-1 border border-[#d0d7de] rounded-lg p-2 bg-gradient-to-br from-slate-50 to-white shadow-inner">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125 cursor-pointer border border-[#d0d7de] ${getContributionColor(contribution.count)} shadow-sm hover:shadow-md`}
                title={getContributionTooltip(contribution.date, contribution.count)}
              />
            ))}
          </div>
          
          {/* GitHub Style Footer - Enhanced */}
          <div className="text-xs text-[#656d76] text-center pt-3 border-t border-[#d0d7de] hover:text-[#0969da] transition-colors duration-200 cursor-pointer">
            Learn how we count contributions
          </div>
        </div>

        {/* GitHub Style Button - Enhanced */}
        <div className="pt-4">
          <a
            href={stats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0969da] text-white rounded-lg text-sm font-semibold hover:bg-[#0858b9] transition-all duration-300 border border-[#0969da] hover:border-[#0858b9] shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
} 