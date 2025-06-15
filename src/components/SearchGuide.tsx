
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Search, Target, Globe, BookOpen, MapPin, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const SearchGuide = () => {
  const [copiedPrompt, setCopiedPrompt] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(''), 2000);
  };

  const googleSearchKeywords = {
    engineering: [
      "best engineering colleges ranking 2024",
      "top engineering universities admission requirements",
      "engineering college placement statistics",
      "NIRF ranking engineering colleges",
      "engineering college fees structure comparison"
    ],
    medical: [
      "top medical colleges NEET cutoff",
      "best medical universities abroad MCAT scores",
      "medical college admission process",
      "AIIMS vs other medical colleges",
      "medical college fees government vs private"
    ],
    business: [
      "top MBA colleges CAT percentile",
      "best business schools GMAT scores",
      "MBA college placement reports",
      "business school ranking criteria",
      "MBA fees vs salary package analysis"
    ],
    general: [
      "college admission requirements checklist",
      "university ranking methodology explained",
      "college fees financial aid options",
      "student reviews college experience",
      "college vs university difference explained"
    ]
  };

  const aiPrompts = [
    {
      id: 'general-search',
      title: 'General College Search',
      prompt: "I'm looking for colleges for [your field] with the following preferences: Budget: [amount], Location: [preferred locations], Course duration: [years], Ranking preference: [top 10/50/100], Special requirements: [any specific needs]. Please suggest colleges with admission requirements, fees, and placement statistics.",
      category: 'General'
    },
    {
      id: 'comparison',
      title: 'College Comparison',
      prompt: "Compare these colleges for [course name]: [College 1], [College 2], [College 3]. Please analyze: 1) Admission requirements and cutoffs, 2) Fee structure and financial aid, 3) Faculty and infrastructure, 4) Placement records, 5) Alumni network, 6) Course curriculum differences. Which would be best for someone interested in [specific specialization]?",
      category: 'Comparison'
    },
    {
      id: 'admission-strategy',
      title: 'Admission Strategy',
      prompt: "I have these scores: [list your scores/grades], interested in [field of study], budget of [amount], and can study in [locations]. Create a college application strategy with: 1) Dream colleges (reach schools), 2) Target colleges (likely admits), 3) Safety colleges (sure admits), 4) Application timeline, 5) Required standardized tests, 6) Documentation needed.",
      category: 'Strategy'
    },
    {
      id: 'international',
      title: 'International Study Options',
      prompt: "I want to study [course] abroad with a budget of [amount]. My profile: [academic scores], [work experience if any], [English test scores]. Suggest: 1) Countries with affordable education, 2) Universities with good ROI, 3) Scholarship opportunities, 4) Visa requirements, 5) Post-study work options, 6) Living costs breakdown.",
      category: 'International'
    },
    {
      id: 'financial-planning',
      title: 'Education Financing',
      prompt: "Help me plan finances for [course] at [type of college]. Family income: [range], Savings: [amount], Preferred loan amount: [if any]. Provide: 1) Total education cost breakdown, 2) Scholarship opportunities, 3) Education loan options and eligibility, 4) Part-time work possibilities, 5) ROI analysis, 6) Financial planning timeline.",
      category: 'Financial'
    }
  ];

  const searchTips = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Be Specific",
      description: "Use specific course names, locations, and requirements in your searches"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multiple Sources",
      description: "Cross-reference information from official websites, ranking agencies, and student forums"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Check Accreditation",
      description: "Verify college accreditation and recognition by relevant authorities"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Virtually",
      description: "Take virtual tours and attend online information sessions"
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Smart College Search Guide
          </CardTitle>
          <p className="text-gray-600 mt-2">Master the art of finding your perfect college with AI and search strategies</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI Prompts Section */}
        <Card className="bg-white/80 backdrop-blur-sm border border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-emerald-700">
              <Brain className="h-6 w-6 mr-3" />
              AI Search Prompts
            </CardTitle>
            <p className="text-gray-600">Copy these prompts to use with ChatGPT, Claude, or any AI assistant</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiPrompts.map((prompt) => (
              <div key={prompt.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{prompt.title}</h4>
                    <Badge variant="outline" className="text-xs mt-1">{prompt.category}</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className="shrink-0"
                  >
                    {copiedPrompt === prompt.id ? 'Copied!' : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{prompt.prompt}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Google Search Keywords */}
        <Card className="bg-white/80 backdrop-blur-sm border border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-blue-700">
              <Search className="h-6 w-6 mr-3" />
              Google Search Keywords
            </CardTitle>
            <p className="text-gray-600">Effective keywords for finding specific college information</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(googleSearchKeywords).map(([category, keywords]) => (
              <div key={category} className="space-y-3">
                <h4 className="font-semibold text-gray-800 capitalize bg-gray-100 px-3 py-2 rounded-lg">
                  {category === 'general' ? 'General Search' : `${category.charAt(0).toUpperCase() + category.slice(1)} Colleges`}
                </h4>
                <div className="space-y-2">
                  {keywords.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border rounded-lg p-3 hover:shadow-sm transition-shadow">
                      <span className="text-sm text-gray-700 flex-1">{keyword}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(keyword)}`, '_blank')}
                        className="shrink-0 text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Search Tips */}
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-700 text-center">
            Pro Search Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchTips.map((tip, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto text-white">
                  {tip.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{tip.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Resources */}
      <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Recommended Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Official Rankings</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• NIRF Rankings (India)</li>
                <li>• QS World Rankings</li>
                <li>• Times Higher Education</li>
                <li>• US News Rankings</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Student Reviews</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shiksha.com</li>
                <li>• CollegeDunia</li>
                <li>• Niche.com</li>
                <li>• College Confidential</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Application Portals</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Common Application</li>
                <li>• UCAS (UK)</li>
                <li>• University websites</li>
                <li>• State admission portals</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchGuide;
